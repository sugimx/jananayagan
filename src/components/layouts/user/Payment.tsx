"use client"

import React, { useState } from 'react'
import AddressIcons from '@/components/ui/user/AddressIcons'
import { FaUser } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"
import { HiDevicePhoneMobile } from "react-icons/hi2"
import { IconType } from 'react-icons'
import { IoMdHome } from "react-icons/io"
import { useQuery, useMutation } from '@tanstack/react-query'
import { GetAddressFn } from '@/api/AddressInfo'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { apiService, CreateOrderRequest } from '@/lib/api'

interface Address {
  _id: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  district: string;
  postalCode: string;
  country: string;
  landmark: string;
  isDefault: boolean;
}

const DetailsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center gap-3'>
            {children}
        </div>
    )
}

const Icon = ({ Icon }: { Icon: IconType }) => {
    return (
        <span className='text-[#F5D57A] text-md md:text-lg'>
            <Icon />
        </span>
    )
}

const Paragraph = ({ content }: { content: string }) => {
    return (
        <p className='text-md font-light md:text-lg'>{content}</p>
    )
}

const AddressForm = () => {
    const { token } = useAuth();
  
    const { data: addressesData, isLoading, error } = useQuery({
        queryKey: ['addresses', token],
        queryFn: GetAddressFn,
        enabled: !!token,
    });

   
    const defaultAddress = addressesData?.data?.find((addr: Address) => addr.isDefault) || addressesData?.data?.[0];

    if (isLoading) {
        return (
            <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%]'>
                <div className='text-center text-white'>
                    <p>Loading address...</p>
                </div>
            </div>
        );
    }

   
    if (addressesData?.data && addressesData.data.length > 0 && defaultAddress) {
        return <OrderSummary address={defaultAddress} />;
    }

    
    if (error || !addressesData?.data || addressesData.data.length === 0) {
        return <AddressFormComponent />;
    }

    return null;
}


const OrderSummary = ({ address }: { address: Address }) => {
    const { user, token } = useAuth();
    const [isProcessing, setIsProcessing] = useState(false);
    const router = useRouter()

    
    const createOrderMutation = useMutation({
        mutationFn: async (orderData: CreateOrderRequest) => {
            if (!token) throw new Error('No authentication token');
            console.log('Creating order with data:', orderData);
            const result = await apiService.createOrder(orderData, token);
            console.log('Order creation response:', result);
            return result;
        },
        onSuccess: async (response) => {
            console.log('onSuccess triggered with response:', response);
            if (response.success && response.data) {
                const responseData = response.data; // typed as Order
                const paymentRequest = responseData.paymentRequest;
                const orderId = responseData._id;
                
                if (paymentRequest) {
                    // Try to extract a usable redirectUrl from paymentRequest shape
                    const paymentData = (() => {
                        const maybe: unknown = paymentRequest;
                        if (
                            maybe &&
                            typeof maybe === 'object'
                        ) {
                            const obj = maybe as Record<string, unknown>;
                            const direct = typeof obj.redirectUrl === 'string' ? (obj.redirectUrl as string) : undefined;
                            const url = typeof obj.url === 'string' ? (obj.url as string) : undefined;
                            const payload = obj.payload as Record<string, unknown> | undefined;
                            const payloadRedirect = payload && typeof payload.redirectUrl === 'string' ? (payload.redirectUrl as string) : undefined;
                            return { redirectUrl: direct || payloadRedirect || url };
                        }
                        return { redirectUrl: undefined };
                    })();
                    
                    try {
                        console.log('Redirecting to PhonePe with URL:', paymentData.redirectUrl);
                        console.log('Payment data:', paymentData);
                        
                       
                        if (paymentData.redirectUrl) {
                            window.location.href = paymentData.redirectUrl;
                        } else {
                            console.error('No redirect URL provided by backend');
                            alert('Payment initialization failed. Please try again.');
                        }
                        
                    } catch (error) {
                        console.error('Error redirecting to PhonePe:', error);
                        alert('Error initializing payment. Please try again.');
                    }
                } else if (orderId) {
                   
                    try {
                        const paymentResponse = await apiService.createPhonePePayment(orderId, token!);
                        
                        if (paymentResponse.success && paymentResponse.data) {
                            const paymentData = paymentResponse.data; // { redirectUrl?: string }
                            
                            try {
                                console.log('Redirecting to PhonePe with URL:', paymentData.redirectUrl);
                                console.log('Payment data:', paymentData);
                                
                                
                                if (paymentData.redirectUrl) {
                                    window.location.href = paymentData.redirectUrl;
                                } else {
                                    console.error('No redirect URL provided by backend');
                                    alert('Payment initialization failed. Please try again.');
                                }
                                
                            } catch (error) {
                                console.error('Error redirecting to PhonePe:', error);
                                alert('Error initializing payment. Please try again.');
                            }
                        } else {
                            console.error('Payment request failed:', paymentResponse.message);
                            alert('Payment request failed. Please try again.');
                        }
                    } catch (error) {
                        console.error('Error creating payment request:', error);
                        alert('Error creating payment request. Please try again.');
                    }
                }
            } else {
                console.error('Order creation failed:', response);
                console.error('Response message:', response.message);
                alert(`Order creation failed: ${response.message || 'Unknown error'}. Please try again.`);
            }
        },
        onError: (error) => {
            console.error('Error creating order:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
            alert(`Error creating order: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        },
        onSettled: () => {
            setIsProcessing(false);
        }
    });

    const handlePayment = async () => {
        if (!token || !user) {
            alert('Please login to continue');
            return;
        }
        setIsProcessing(true);
        
        const orderData: CreateOrderRequest = {
            items: [
                {
                    productId: '65a1b2c3d4e5f6789abcdef2',
                    productName: 'Jana Nayagan Personalized Mug',
                    quantity: 1,
                    price: 299,
                    totalPrice: 299
                }
            ],
            shippingAddressId: address._id,
            paymentMethod: 'phonepe'
        };
        createOrderMutation.mutate(orderData);
    }

    const handleAddress = () => {
        router.push('/change-address')
    }
    
    return (
        <>
            <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%]'>
                <div className='md:flex gap-6 justify-center'>
                    <div className='text-white flex-1'>
                        <div className='mb-3'>
                            <div className='mb-5'>
                                <h1 className='text-[#F5D57A] text-2xl font-semibold mb-1 md:text-4xl'>Address</h1>
                                <p className='text-sm font-light md:text-lg'>Please confirm the {"buyer's"} address, your Jana Nayagan Cup finds its way here.</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <DetailsContainer>
                                    <Icon Icon={FaUser} />
                                    <Paragraph content={address.fullName} />
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={MdOutlineEmail} />
                                    <Paragraph content={user?.email || 'No email'} />
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={IoMdHome} />
                                    <Paragraph content={address.addressLine1}/>
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={HiDevicePhoneMobile} />
                                    <Paragraph content={address.phone}/>
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={FaLocationDot} />
                                    <Paragraph content={address.city} />
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={FaMapLocationDot} />
                                    <Paragraph content={address.state} />
                                </DetailsContainer>
                                {address.landmark && (
                                    <DetailsContainer>
                                        <Icon Icon={FaMapLocationDot} />
                                        <Paragraph content={`Landmark: ${address.landmark}`} />
                                    </DetailsContainer>
                                )}
                            </div>
                            <button 
                                className='outline-none border-1 border-[#F5D57A] text-[#F5D57A] text-md my-5 w-4/5 lg:w-2/5 py-1 font-semibold rounded-lg cursor-pointer'
                                onClick={handleAddress}
                            >
                                Change Address
                            </button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='bg-[#F5D57A] w-full px-4 py-4 text-lg font-light'>
                            <h1 className='text-2xl font-semibold mb-1 md:text-4xl'>Order summery</h1>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light text-md md:text-lg'>Subtotal</span>
                                <div className='flex items-center font-light'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span className='font-light text-md md:text-lg'>299</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light text-md md:text-lg'>Delivery</span>
                                <div className='flex items-center font-light'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span className='font-light text-md md:text-lg'>Free</span>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-500 my-2'></div>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light text-md md:text-lg'>Total</span>
                                <div className='flex items-center font-semibold'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span className='font-light text-md md:text-lg'>299</span>
                                </div>
                            </div>
                            <p className='text-sm my-2'>Estimated shipping time: 2 days</p>
                        </div>
                        <button 
                            onClick={handlePayment}
                            disabled={isProcessing}
                            className={`w-full py-2 my-3 text-sm uppercase font-medium cursor-pointer ${
                                isProcessing 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-[#F5D57A] hover:bg-[#E6C86A]'
                            }`}
                        >
                            {isProcessing ? 'Processing...' : 'Go to Payment'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


const AddressFormComponent = () => {
    const router = useRouter();
    
    const handleAddAddress = () => {
        router.push('/address');
    };
    
    return (
        <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%]'>
            <div className='text-center text-white'>
                <h1 className='text-[#F5D57A] text-2xl font-semibold mb-4 md:text-4xl'>No Address Found</h1>
                <p className='text-lg mb-6'>Please add an address to proceed with your order.</p>
                <button 
                    onClick={handleAddAddress}
                    className='bg-[#F5D57A] text-black px-6 py-3 text-lg font-semibold rounded-md hover:bg-[#E6C86A] transition-colors'
                >
                    Add Address
                </button>
            </div>
        </div>
    )
}

export default AddressForm
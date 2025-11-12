"use client"

import React from 'react'
import { FaPlus } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import AddressFormTab from '@/components/layouts/user/AddressFormTab'
import { useMutation, useQuery } from '@tanstack/react-query'
import { GetAddressFn, updateDefaultAddress } from '@/api/AddressInfo'
import { useAuth } from '@/hooks/useAuth'
import Heading from '@/components/ui/user/Heading'
import Paragraph from '@/components/ui/user/Paragraph'
import Container from '@/components/layouts/user/Container'
import { useRouter } from 'next/navigation'

const MainContainer = ({ children, isActive, onActivate }: { children: React.ReactNode, isActive: boolean, onActivate: () => void }) => {
    return (
        <div className={`
                border-1 border-[#F5BB0B] rounded-xl mb-4 md:mb-1 md:w-[calc(50%-7.5px)] xl:w-[calc(25%-6px)] cursor-pointer
                ${isActive ? 'bg-[#F5BB0B] shadow-lg ring-2 text-black' : 'bg-transparent hover:bg-gray-800 text-[#F5BB0B]'}
            `}
            onClick={onActivate}
        >
            <div className='flex justify-between items-center px-2 py-4'>
                {children}
            </div>
        </div>
    )
}

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-2'>
            {children}
        </div>
    )
}

const AddressParagraph = ({ content }: { content: string }) => {
    return (
        <p className='text-sm mb-2 md:text-[1rem]'>
            {content}
        </p>
    )
}

const CustomerDetails = ({ content }: { content: string }) => {
    return (
        <p className='text-xs text-[#808089] md:text-[0.8rem]'>
            {content}
        </p>
    )
}

type FormData = {
    _id: string
    type: string
    isDefault: boolean
    phone: string
    addressLine1: string
    city: string
    state: string
    postalCode: string
    district: string
    country: string
    landmark: string
    fullName: string
}

const ChangeAddress = () => {
    const [isActive, setIsActive] = React.useState(0)
    const [toggle, setToggle] = React.useState(false)
    const [addressId, setAddressId] = React.useState<string>("")
    const [ item, setItemId ] = React.useState('')
    const { token } = useAuth()

    const router = useRouter()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['addresses', token],
        queryFn: GetAddressFn,
        enabled: !!token,
    })

    const {
        mutate: addressMutate,
        isPending: isPendingDefault,
        isSuccess: isSuccessDefault
    } = useMutation<{ success: true, message: string }, Error, { token: string, item: string }>({
        mutationFn: updateDefaultAddress
    })

    React.useEffect(() => {
        if(isSuccessDefault) {
            router.push('/payment')
        }
    }, [ isSuccessDefault, router ])

    const handleEditFn = (id: string) => {
        setToggle(!toggle)
        setAddressId(id)
    }

    const handleAddNewFn = () => {
        setToggle(!toggle)
        setAddressId("")
    }

    const handleChangeAddress = (_id: string, index: number) => {
        setIsActive(index)
        setItemId(_id)
    }

    const handleDefaultAddress = () => {
        if (!token) {
            router.push('/login')
            return
        }
        addressMutate({ token, item })
    }

    if (isLoading) {
        return (
            <div className='w-full bg-black h-[40vh] flex justify-center items-center'>
                <span className='content-loader'></span>
            </div>
        )
    }

    return (
        <>
            <Container>
                <div className='w-full h-30 bg-[#F5BB0B] my-5 flex justify-center items-center flex-col gap-2 rounded-lg'>
                    <h1 className='text-black font-semibold text-md md:text-lg lg:text-2xl'>My Addresses</h1>
                    <p className='text-[#5F5F5F] text-sm md:text-md'>Use your Saved Addresses</p>
                </div>
                <div className='my-5 relative'>
                    <div className='flex justify-end items-center mb-4'>
                        <button
                            className={`
                                text-black bg-[#F5BB0B] text-[0.8rem] px-5 md:px-10 py-2 rounded-md md:text-sm cursor-pointer flex items-center gap-1 font-semibold`}
                            onClick={handleAddNewFn}
                        >
                            <FaPlus className='font-bold' />
                            <span>New Address</span>
                        </button>
                    </div>
                    <div className='w-[100%] h-auto md:flex md:gap-[15px] lg:gap-2 md:flex-wrap'>
                        {data?.data.length !== 0 ? data?.data?.map((item: FormData, index: number) => (
                            <MainContainer key={index} isActive={isActive === index} onActivate={() => handleChangeAddress(item?._id, index)}>
                                <Section>
                                    <AddressParagraph content={`${item.addressLine1}, ${item.city}, ${item.state}, ${item.postalCode}`} />
                                    <CustomerDetails content={`${item.fullName} • ${item.phone}`} />
                                </Section>
                                <Section>
                                    <FiEdit2 className='text-2xl text-[#808089] cursor-pointer' onClick={() => handleEditFn(item._id)} />
                                </Section>
                            </MainContainer>
                        )) : (
                            <div className='w-full h-50 flex flex-col justify-center items-center'>
                                <Heading content='Oops! No Address Found' />
                                <Paragraph content="We couldn't find any address. create new address and try again." />
                            </div>
                        )}
                    </div>
                    {
                        isError && (
                            <div className='w-full h-50 flex flex-col justify-center items-center'>
                                <Heading content='Oops! No Address Found' />
                                <Paragraph content="We couldn't find any address. create new address and try again." />
                            </div>
                        )
                    }
                    {toggle && <AddressFormTab state={toggle} setState={setToggle} addressId={addressId} refetch={refetch} />}
                </div>
                <div className='flex justify-center items-center h-20'>
                    <button className='bg-[#D3AF37] text-black w-5/5 md:w-1/5 py-2 font-bold text-sm rounded-lg cursor-pointer' onClick={handleDefaultAddress}>
                        {isPendingDefault ? <span className='button-loader'></span> : 'Delivery to this Address'}
                    </button>
                </div>
            </Container>
        </>
    )
}

export default ChangeAddress
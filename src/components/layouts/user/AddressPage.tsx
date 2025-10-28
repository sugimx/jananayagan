"use client"

import React from 'react'
import { FaPlus } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import AddressFormTab from './AddressFormTab'
import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteAddress, GetAddressFn } from '@/api/AddressInfo'
import { useAuth } from '@/hooks/useAuth'
import ErrorMessage from '@/components/ui/user/ErrorMessage'
import { RiDeleteBinFill } from "react-icons/ri"
import { useRouter } from 'next/navigation'

const MainContainer = ({ children, isActive, onActivate }: { children: React.ReactNode, isActive: boolean, onActivate: () => void }) => {
    return (
        <div className={`
                border-1 border-[#F5D57A] rounded-xl mb-4 md:mb-1 md:w-[calc(50%-7.5px)] xl:w-[calc(25%-6px)] cursor-pointer
                ${isActive ? 'bg-[#F5D57A] shadow-lg ring-2 text-black' : 'bg-transparent hover:bg-gray-800 text-[#F5D57A]'}
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

const AddressPage = () => {
    const [isActive, setIsActive] = React.useState(0)
    const [toggle, setToggle] = React.useState(false)
    const [addressId, setAddressId] = React.useState<string>("")
    const { token } = useAuth()

    const router = useRouter()

    const { data, isLoading, isError, isSuccess, error, refetch } = useQuery({
        queryKey: ['addresses', token],
        queryFn: GetAddressFn,
        enabled: !!token,
    })

    const {
        mutate: deleteMutate,
        isPending: deletePending,
        isError: deleteError,
        isSuccess: deleteSuccess,
        error: deleteErr
    } = useMutation<{ success: boolean, message: string }, Error, { token: string, addressId: string }>({ 
        mutationFn: deleteAddress
    })

    React.useEffect(() => {
        if (deleteSuccess) {
            refetch()
        }
    }, [deleteSuccess, refetch])

    if (isLoading || deletePending) {
        return (
            <div className='w-full bg-black h-[40vh] flex justify-center items-center'>
                <span className='content-loader'></span>
            </div>
        )
    }

    const handleDeleteFn = (addressId: string) => {
        if (!token) {
            router.push('/login')
            return
        }
        
        deleteMutate({ token, addressId })
    }

    const handleEditFn = (id: string) => {
        setToggle(!toggle)
        setAddressId(id)
    }

    const handleAddNewFn = () => {
        setToggle(!toggle)
        setAddressId("")
    }

    return (
        <>
            <div className='my-5 relative'>
                <div className='flex justify-end items-center mb-4'>
                    <button
                        className={`
                            text-black bg-[#F5D57A] text-[0.8rem] px-5 md:px-10 py-2 rounded-md md:text-sm cursor-pointer flex items-center gap-1 font-semibold`}
                        onClick={handleAddNewFn}
                    >
                        <FaPlus className='font-bold' />
                        <span>New Address</span>
                    </button>
                </div>
                <div className='w-[100%] h-auto md:flex md:gap-[15px] lg:gap-2 md:flex-wrap'>
                    {data?.data.length !== 0 ? data?.data?.map((item: FormData, index: number) => (
                        <MainContainer key={index} isActive={isActive === index} onActivate={() => setIsActive(index)}>
                            <Section>
                                <RiDeleteBinFill className={`text-xl ${isActive === index ? 'text-black' : 'text-[#F5D57A]'}`} onClick={() => handleDeleteFn(item._id)} />
                            </Section>
                            <Section>
                                <AddressParagraph content={`${item.addressLine1}, ${item.city}, ${item.state}, ${item.postalCode}`} />
                                <CustomerDetails content={`${item.fullName} • ${item.phone}`} />
                            </Section>
                            <Section>
                                <FiEdit2 className='text-2xl text-[#808089] cursor-pointer' onClick={() => handleEditFn(item._id)} />
                            </Section>
                        </MainContainer>
                    )) : (
                        <div>
                            Data not found
                        </div>
                    )}
                </div>
                {
                    isError && <ErrorMessage message={error?.message || "Can't find your address. please create new address"} />
                }
                {
                    deleteError && <ErrorMessage message={deleteErr?.message || "Can't find your address. please create new address"} />
                }
                {toggle && <AddressFormTab state={toggle} setState={setToggle} addressId={addressId} refetch={refetch} />}
            </div>
        </>
    )
}

export default AddressPage
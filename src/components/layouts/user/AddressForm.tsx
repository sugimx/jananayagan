"use client"

import React from 'react'
import AddressFormContainer from '@/components/ui/user/AddressFormContainer'
import AddressIcons from '@/components/ui/user/AddressIcons'
import { FaUser } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { FaMobileScreen } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { FaHome } from "react-icons/fa"
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import districts from '@/lib/place'
import ErrorMessage from '@/components/ui/user/ErrorMessage'
import { useMutation } from '@tanstack/react-query'
import { registerFuntion } from '@/api/AddressInfo'
import { useAuth } from '@/hooks/useAuth'
import SuccessMessage from '@/components/ui/user/SuccessMessage'

type FormData = {
    type: string
    isDefault: boolean
    phone: string
    addressLine1: string
    city: string
    state: string
    postalCode: string
    district: string
    landmark: string
}

const AddressForm = () => {
    const { token } = useAuth()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>()

    const stateWatch = watch('state')

    const {
        mutate: registerMutate,
        isSuccess: registerIsSuccess,
        isError: registerIsError,
        isPending: registerIsPending,
        error: registerError
    } = useMutation({
        mutationFn: registerFuntion
    })

    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        registerMutate({ data, token: token! })
    }

    React.useEffect(() => {
        if (registerIsSuccess) {
            router.push('/payment')
        }
    })
    return (
        <>
            <div className='w-[90%] h-auto mx-auto my-10 lg:w-[30%]'>
                <h1 className='text-[1.5rem] font-light mb-2 text-[#F5BB0B] md:text-[2rem]'>Address</h1>
                <div className='md:flex gap-2 justify-center'>
                    <div className='my-5 text-white flex-1'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label className='text-sm text-white md:text-lg'>Address</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaUser} />
                                    <input
                                        type="text"
                                        placeholder='Enter your Address here....'
                                        className='w-full h-full outline-none border-none text-black'
                                        {
                                            ...register('addressLine1', { required: "Address field is required" })
                                        }
                                    />
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.addressLine1 && <ErrorMessage message={errors?.addressLine1?.message} />
                            }
                            <div>
                                <label className='text-sm text-white md:text-lg'>LandMark</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaUser} />
                                    <input
                                        type="text"
                                        placeholder='Enter your Address here....'
                                        className='w-full h-full outline-none border-none text-black'
                                        {
                                            ...register('landmark', { required: "LandMark field is required" })
                                        }
                                    />
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.landmark && <ErrorMessage message={errors?.landmark?.message} />
                            }
                            <div>
                                <label className='text-sm text-white md:text-lg'>Phone</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaMobileScreen} />
                                    <input
                                        type="text"
                                        placeholder='Enter your phone number here....'
                                        className='w-full h-full outline-none border-none text-black'
                                        {
                                            ...register('phone', {
                                                required: "Phone field is required",
                                                minLength: { value: 10, message: "Phone number must be 10 digits" },
                                                maxLength: { value: 10, message: "Phone number must be 10 digit" }
                                            })
                                        }
                                    />
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.phone && <ErrorMessage message={errors?.phone?.message} />
                            }
                            <div>
                                <label className='text-sm text-white md:text-lg'>City</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaHome} />
                                    <input
                                        type="text"
                                        placeholder='Enter your city here....'
                                        className='w-full h-full outline-none border-none text-black'
                                        {
                                            ...register('city', { required: "City field is required" })
                                        }
                                    />
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.city && <ErrorMessage message={errors?.city?.message} />
                            }
                            <div>
                                <label className='text-sm text-white md:text-lg'>State</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaHome} />
                                    <select className='h-10 w-full outline-none text-[#808089]'
                                        {
                                            ...register('state', { required: "State field is required" })
                                        }
                                    >
                                        <option className='' value="">Select Your State</option>
                                        <option className='bg-black' value="TamilNadu">TamilNadu</option>
                                        <option className='bg-black' value="Kerala">Kerala</option>
                                        <option value="others">Others</option>
                                    </select>
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.state && <ErrorMessage message={errors?.state?.message} />
                            }
                            <div>
                                <label className='text-sm text-white md:text-lg'>District</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={IoIosMail} />
                                    <select className='h-10 w-full outline-none text-[#808089]'
                                        {
                                            ...register('district', { required: "District field is required" })
                                        }
                                    >
                                        <option className='' value="">Select Your District</option>
                                        {districts && districts?.filter(item => item.state === stateWatch).map((item, index) => (
                                            <option className='bg-black' value={item.district} key={index}>{item.district}</option>
                                        ))}
                                    </select>
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.district && <ErrorMessage message={errors?.district?.message} />
                            }
                            <div>
                                <label className='text-sm text-white md:text-lg'>Post Code</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaMapLocationDot} />
                                    <input
                                        type="text"
                                        placeholder='Enter your post code here....'
                                        className='w-full h-full outline-none border-none text-black'
                                        {
                                            ...register('postalCode', { required: "Postal Code field is required" })
                                        }
                                    />
                                </AddressFormContainer>
                            </div>
                            {
                                errors?.postalCode && <ErrorMessage message={errors?.postalCode?.message} />
                            }
                            {registerIsSuccess && <SuccessMessage message="Address Information created successfully" />}
                            {registerIsError && <ErrorMessage message={registerError?.message} />}
                            <button
                                className='bg-[#7a0202] w-full py-2 my-3 text-sm uppercase font-medium cursor-pointer text-[#F5BB0B]'
                                onClick={handleSubmit(handleFormSubmit)}
                            >
                                {registerIsPending ? <span className='loader'></span> : 'save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressForm
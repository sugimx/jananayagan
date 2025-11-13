"use client"

import { getProfile, updateProfile } from '@/api/ProfileAPI'
import ErrorMessage from '@/components/ui/user/ErrorMessage'
import Heading from '@/components/ui/user/Heading'
import InputBox from '@/components/ui/user/InputBox'
import Paragraph from '@/components/ui/user/Paragraph'
import SuccessMessage from '@/components/ui/user/SuccessMessage'
import { useAuth } from '@/hooks/useAuth'
import districts from '@/lib/place'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const FormContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mb-2 w-full lg:w-[25%]'>
            {children}
        </div>
    )
}

const FormControl = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mb-5'>
            {children}
        </div>
    )
}

const Label = ({ content }: { content: string }) => {
    return (
        <label className='text-sm block mb-1 text-[#F5BB0B] md:text-md lg:text-lg'>{content}</label>
    )
}

type ProfileType = {
    fullName: string
    phone: string
    gmail: string
    state: string
    dob: string
    dist: string
}

const MyProfile = () => {
    const { token } = useAuth()
    const router = useRouter()
    const {
        data,
        isPending,
        isSuccess,
        isError
    } = useQuery({ 
        queryKey: ['profile'],
        queryFn: () => getProfile(token!),
        enabled: !!token
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
        reset
    } = useForm<ProfileType>()

    const {
        mutate,
        isPending: isUpdatePending,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error: updateError
    } = useMutation({ mutationFn: updateProfile })

    const stateWatch = watch('state')

    React.useEffect(() => {
        if(isSuccess) {
            reset({
                fullName: data?.data?.name,
                gmail: data?.data?.email,
                phone: data?.data?.phone,
                state: data?.data?.state,
                dob: data?.data?.dob,
                dist: data?.data?.district
            })
        }
    }, [ isSuccess, data, reset ])

    if(isPending) {
        return (
            <div className='w-full h-[40vh] flex justify-center items-center'>
                <span className='content-loader'></span>
            </div>
        )
    }

    if(isError) {
        return (
            <div className='w-full h-50 flex flex-col justify-center items-center'>
                <Heading content='Oops! No User Found' />
                <Paragraph content="We couldn't find User. Signup to create a user." />
            </div>
        )
    }

    const handleSubmitFn: SubmitHandler<ProfileType> = (formData) => {
        if(!token) {
            router.push('/login')
            return
        }
        mutate({ data: formData, token })
    }

    return (
        <div className='my-4'>
            <div className='mx-2'>
                <div className='mb-5'>
                    <h1 className='text-[1.2rem] text-[#F5BB0B] font-semibold md:text-[1.5rem]'>Edit Profile</h1>
                </div>
                {isSuccess && (
                    <div className='md:flex md:justify-between md:gap-2'>
                        <FormContainer>
                            <FormControl>
                                <Label content="Name" />
                                <InputBox<ProfileType>
                                    type="text" 
                                    placeHolder='Enter Your Name....' 
                                    errorMsg='Name field is required' 
                                    register={register} 
                                    defaultValue={data?.data?.name}
                                    name="fullName" 
                                />
                            </FormControl>
                                {
                                    errors?.fullName && <ErrorMessage message={errors?.fullName?.message} />
                                }
                            <FormControl>
                                <Label content="Email" />
                                <InputBox<ProfileType>
                                    type="text" 
                                    placeHolder='Enter Your Email....' 
                                    errorMsg='Email field is required' 
                                    register={register} 
                                    name="gmail" 
                                    defaultValue={data?.data?.email}
                                    validationOptions = {{
                                        validate: (value: string) => value.endsWith("@gmail.com") || "Invalid email address",
                                    }}
                                />
                                {
                                    errors?.gmail && <ErrorMessage message={errors?.gmail?.message} />
                                }
                            </FormControl>
                        </FormContainer>
                        <FormContainer>
                            <FormControl>
                                <Label content="Phone" />
                                <InputBox<ProfileType>
                                    type="text" 
                                    placeHolder='Enter Your Phone Number....' 
                                    errorMsg='Phone number field is required' 
                                    register={register} 
                                    name='phone' 
                                    defaultValue={data?.data?.phone}
                                    validationOptions={{
                                        minLength: {
                                            value: 10,
                                            message: "Phone number must be 10 digits",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Phone number must be 10 digits",
                                        },
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "Phone number must contain digits only",
                                        }
                                    }}
                                />
                                {
                                    errors?.phone && <ErrorMessage message={errors?.phone?.message} />
                                }
                            </FormControl>
                            <FormControl>
                                <Label content="DOB" />
                                <InputBox<ProfileType> type="date" errorMsg='Date field is required' register={register} name="dob" />
                            </FormControl>
                            {
                                errors?.dob && <ErrorMessage message={errors?.dob?.message} />
                            }
                        </FormContainer>
                        <FormContainer>
                            <FormControl>
                                <Label content="State" />
                                <select className='w-full h-10 px-2 py-1 border-2 border-[#F5BB0B] outline-none rounded-lg text-[#F5BB0B] md:h-12'
                                    defaultValue={data?.data?.state}
                                    {
                                        ...register('state', {
                                            required: 'State field is required'
                                        })
                                    }
                                >
                                    <option className='bg-[#7a0202]'>---Select Your State---</option>
                                    <option className='bg-[#7a0202]' value="TamilNadu">TamilNadu</option>
                                    <option className='bg-[#7a0202]' value="Kerala">Kerala</option>
                                    <option className='bg-[#7a0202]' value="others">Others</option>
                                </select>
                            </FormControl>
                            {
                                errors?.state && <ErrorMessage message={errors?.state?.message} />
                            }
                            <FormControl>
                                <Label content="District" />
                                <select className='w-full h-10 px-2 py-1 border-2 border-[#F5BB0B] outline-none rounded-lg text-[#F5BB0B] md:h-12'
                                    {
                                        ...register('dist', {
                                            required: 'District field is required'
                                        })
                                    }
                                >
                                    {data?.data?.dist && <option className='bg-[#7a0202]' value={data?.data?.dist}>{data?.data?.dist}</option>}
                                    <option className='bg-[#7a0202]' value="">---Select Your District---</option>
                                    {districts.filter(item => item.state === stateWatch).map((item, index) => (
                                        <option key={index} className='bg-[#7a0202]'>{item.district}</option>
                                    ))}
                                </select>
                            </FormControl>
                            {
                                errors?.dist && <ErrorMessage message={errors?.dist?.message} />
                            }
                        </FormContainer>
                    </div>
                )}
                {isUpdateSuccess && <SuccessMessage message="updated successfully" />}
                {isUpdateError && <ErrorMessage message={(updateError as Error).message} />}
                <div className='my-5 w-full flex justify-center'>
                    <button 
                        className='border-2 border-[#F5BB0B] px-6 py-2 text-sm text-[#F5BB0B] rounded-md font-semibold md:text-md cursor-pointer'
                        onClick={handleSubmit(handleSubmitFn)}
                    >
                        {isUpdatePending ? <span className='loader'></span> : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
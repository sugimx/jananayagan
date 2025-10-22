"use client"

import ErrorMessage from '@/components/ui/user/ErrorMessage'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
// import Paragraph from '@/components/ui/user/Paragraph'
import React from 'react'
import { SubmitHandler, useForm, UseFormRegister, RegisterOptions } from 'react-hook-form'
import { IoClose } from "react-icons/io5"
import { useRouter } from 'next/navigation'
import { registerFuntion } from '@/api/AddressInfo'
import SuccessMessage from '@/components/ui/user/SuccessMessage'
import districts from '@/lib/place'

const InputContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-1'>
            {children}
        </div>
    )
}

const InputLabel = ({ content }: { content: string }) => {
    return (
        <label className='text-[0.8rem] font-semibold text-white md:text-[0.9rem]'>{content}</label>
    )
}

const Input = (
    { placeholder, register, name, errorMsg, validationOptions }: 
    { placeholder: string, register: UseFormRegister<any>, name: string, errorMsg: string, validationOptions?: RegisterOptions }) => {
    return (
        <input 
            type="text" 
            className='h-10 w-full outline-none border-2 border-[#F5D57A] rounded-md px-2 text-[#808089] md:h-10' 
            placeholder={placeholder}
            {...register(name, 
                {
                    required: errorMsg,
                    ...validationOptions
                }
            )}
        />
    )
}

type FormData = {
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
}

const AddressFormTab = ({ state, setState }: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const router = useRouter()
    const { formState: { errors }, register, handleSubmit, watch } = useForm<FormData>()

    const stateWatch = watch('state')

    const { token } = useAuth()

    const { mutate, isError, isPending, isSuccess, error } = useMutation<{ success: true, message: string }, Error,{ data: FormData; token: string }>({ mutationFn: registerFuntion })
 
    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        if(!token) {
            router.push('/login')
            return
        }
        mutate({ data: data, token })
    }


    React.useEffect(() => {
        if(isSuccess) {
            const intervel = setInterval(() => {
                setState(false)
            }, 1000)

            return () => clearInterval(intervel)
        }
    }, [isSuccess])

    return (
        <div className='text-white absolute top-[-100px] md:top-[-300px] left-0 w-full min-h-[50vh] flex justify-between flex-col items-center'>
            <div className='w-[90%] md:w-[50%] lg:w-[40%] xl:w-[40%] bg-black'>
                <div className='bg-[#F5D57A] h-[80%] rounded-4xl px-4 py-4'>
                    <div className='flex justify-end text-black'>
                        <IoClose onClick={() => setState(!state)} className='cursor-pointer'/>
                    </div>
                    <div className='h-15 flex items-center justify-center text-black text-[1rem] font-semibold'>
                        <h1>New address</h1>
                    </div>
                    <div className='h-auto bg-black flex flex-col gap-4 px-3 py-4 rounded-xl'>
                        <InputContainer>
                            <InputLabel content='Address' />
                            <Input placeholder='Enter Your Address' 
                                register={register} 
                                name="addressLine1" 
                                errorMsg="Address field is required" 
                            />
                        </InputContainer>
                        {
                            errors?.addressLine1 && <ErrorMessage message={errors?.addressLine1?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='LandMark' />
                            <Input placeholder='Enter Your LandMark' register={register} name="landmark" errorMsg="Landmark field is required" />
                        </InputContainer>
                        {
                            errors?.landmark && <ErrorMessage message={errors?.landmark?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='City' />
                            <Input placeholder='Enter Your City' register={register} name="city" errorMsg="City field is required" />
                        </InputContainer>
                        {
                            errors?.city && <ErrorMessage message={errors?.city?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='State' />
                            <select className='h-10 w-full outline-none border-2 border-[#F5D57A] rounded-md px-2 text-[#808089]'
                                {
                                    ...register('state', { required: "State field is required" })
                                }
                            >
                                <option className='' value="">Select Your State</option>
                                <option className='bg-black' value="TN">TamilNadu</option>
                                <option className='bg-black' value="KL">Kerala</option>
                            </select>
                        </InputContainer>
                        {
                            errors?.state && <ErrorMessage message={errors?.state?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='District' />
                            <select className='h-10 w-full outline-none border-2 border-[#F5D57A] rounded-md px-2 text-[#808089]'
                                {
                                    ...register('district', { required: "District field is required" })
                                }
                            >
                                <option className='' value="">Select Your District</option>
                                {districts && districts?.filter(item => item.state === stateWatch).map((item, index) => (
                                    <option className='bg-black' value={item.district} key={index}>{item.district}</option>
                                ))}
                            </select>
                        </InputContainer>
                        {
                            errors?.district && <ErrorMessage message={errors?.district?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='Phone Number' />
                            <Input placeholder='Enter Your Phone Number' 
                                register={register} name="phone" 
                                errorMsg='Phone field is required' 
                                validationOptions={{
                                    minLength: { value: 10, message: "Phone number must be 10 digits" },
                                    maxLength: { value: 10, message: "Phone number must be 10 digit" }
                                }}
                            />
                        </InputContainer>
                        {
                            errors?.phone && <ErrorMessage message={errors?.phone?.message} />
                        }
                         <InputContainer>
                            <InputLabel content='Postal Code' />
                            <Input placeholder='Enter Your Postal Code' 
                                register={register} 
                                name="postalCode" 
                                errorMsg='Postal Code field is required' 
                                validationOptions={{
                                    minLength: { value: 6, message: "Post Code must be 6 digits" },
                                    maxLength: { value: 6, message: "Post Code must be 6 digits" }
                                }}
                            />
                        </InputContainer>
                        {
                            errors?.postalCode && <ErrorMessage message={errors?.postalCode?.message} />
                        }
                        {/* <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <Paragraph content='Save to address book' className='text-[#F5D57A]' />
                        </div> */}
                    </div>
                    <button className='bg-black w-full py-1 text-[#F5D57A] my-3 rounded-full cursor-pointer md:py-2' onClick={handleSubmit(handleFormSubmit)}>
                        {isPending ? <span className='loader'></span> : 'save'}
                    </button>
                    {isSuccess && <SuccessMessage message="Address Information created successfully" />}
                    {isError && <ErrorMessage message={error?.message} />}
                </div>
            </div>
        </div>
    )
}

export default AddressFormTab
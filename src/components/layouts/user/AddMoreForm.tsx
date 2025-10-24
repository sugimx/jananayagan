import React, { useEffect } from 'react'
import { FaUserEdit } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoMdPhonePortrait } from "react-icons/io"
import { FaGift } from "react-icons/fa"
import { FaMapMarked } from "react-icons/fa"
import { IoIosClose } from "react-icons/io"
import { BsPinMapFill } from "react-icons/bs"
// import { AiOutlinePicture } from "react-icons/ai"
import { SubmitHandler, useForm } from 'react-hook-form'
import ErrorMessage from '@/components/ui/user/ErrorMessage'
import { useMutation } from '@tanstack/react-query'
import { registerData } from '@/api/BuyerInfoAPI'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import SuccessMessage from '@/components/ui/user/SuccessMessage'
import districts from '@/lib/place'

type props = {
    onHandleToggle: () => void
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

type FormValue = {
    name: string
    gmail: string
    phone: number
    dateOfBirth: string
    state: string
    dist: string
}

const AddMoreForm: React.FC<props> = ({ onHandleToggle, setState }) => {
    const router = useRouter()
    const { token } = useAuthContext()
    const { register, formState: { errors }, handleSubmit, watch } = useForm<FormValue>()

    const stateWatch = watch('state')

    const { mutate, isPending, isError, isSuccess, error } = useMutation<{ success: true, message: string }, Error,{ data: FormValue; token: string }>({ mutationFn: registerData })

    const handleFormSubmit: SubmitHandler<FormValue> = (data) => {
        if (!token) {
            router.push('/login')
            return
        }
        console.log(data)
        mutate({ data: data, token })
    }

    useEffect(() => {
        const intervel = setInterval(() => {
            if(isSuccess) {
                setState(false)
            }
        }, 1000)

        return () => clearInterval(intervel)
    }, [isSuccess])

    return (
        <>
            <div className='absolute top-20 w-full md:flex justify-center items-center z-10 main-content blurred'>
                <div className='bg-black border-1 border-[#F5D57A] w-full md:w-[50%] lg:w-[50%] xl:w-[30%] md:h-full px-3 md:px-10 py-5 rounded-xl relative'>
                    <div className='w-full h-5 absolute top-0 left-0 flex justify-end px-2 py-3 cursor-pointer' onClick={onHandleToggle}>
                        <IoIosClose className='bg-white text-black font-bold rounded-full'/>
                    </div>
                    <div>
                        <h1 className='text-[#F5D57A] text-[1.5rem] font-semibold'>Buyer Info</h1>
                        <p className='text-sm'>Fill in your details to receive your unique ID for the Official Jana Nayagan {"Collector's"} Mug and secure your entry into the lucky draw.</p>
                    </div>
                    <div className='flex flex-col gap-5 my-2'>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaUserEdit className='text-[2.8rem] px-3' />
                            <input type="text" className='h-full w-full outline-none' defaultValue="melto" placeholder='John Doe' {...register("name", { required: "name field is required"})} />
                        </div>
                        {errors?.name  && (
                            <ErrorMessage message={errors?.name?.message} />
                        )}
                        <div className='bg-white flex text-black items-center h-10'>
                            <MdEmail className='text-[2.8rem] px-3' />
                            <input 
                                type="email" 
                                className='h-full w-full outline-none' 
                                placeholder='example@gmail.com'
                                {...register('gmail', {
                                    required: "Email is required",
                                    validate: (value) =>
                                    value.endsWith("@gmail.com") || "Invalid email address",
                                })}
                            />
                        </div>
                        {errors?.gmail && (
                            <ErrorMessage message={errors?.gmail?.message} />
                        )}
                        <div className='bg-white flex text-black items-center h-10'>
                            <IoMdPhonePortrait className='text-[2.8rem] px-3' />
                            <input 
                                type="number" 
                                className='h-full w-full outline-none' 
                                placeholder='8888888888'  
                                {...register('phone', { 
                                    required: "phone number is required",
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
                                })}
                            />
                        </div>
                        {errors?.phone && (
                            <ErrorMessage message={errors?.phone?.message} />
                        )}
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaGift className='text-[2.8rem] px-3' />
                            <input type="date" className='h-full w-full outline-none' defaultValue="2025-10-02" placeholder='DOB' {...register('dateOfBirth', { required: "DOB is required" })} />
                        </div>
                        {errors?.dateOfBirth && (
                            <ErrorMessage message={errors?.dateOfBirth?.message} />
                        )}
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaMapMarked className='text-[2.8rem] px-3' />
                            <select className='h-full w-full outline-none' {...register('state', { required: "state field is required" })}>
                                <option value="">Choose an option</option>
                                <option value="TN">Tamilnadu</option>
                                <option value="KL">Kerala</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        {errors?.state && (
                            <ErrorMessage message={errors?.state?.message} />
                        )}
                        <div className='bg-white flex text-black items-center h-10'>
                            <BsPinMapFill className='text-[2.8rem] px-3' />
                            <select className='h-full w-full outline-none' {...register('dist', { required: "District field is required" })}>
                                <option className='' value="">Select Your District</option>
                                {districts && districts?.filter(item => item.state === stateWatch).map((item, index) => (
                                    <option value={item.district} key={index}>{item.district}</option>
                                ))}
                            </select>
                        </div>
                        {errors?.dist && (
                            <ErrorMessage message={errors?.dist?.message} />
                        )}
                        {/* <div className='bg-white flex text-black items-center h-10'>
                            <AiOutlinePicture className='text-[2.8rem] px-3' />
                            <input type="file" className='h-full w-full outline-none' placeholder='Name' />
                        </div> */}
                        {/* <div className='flex gap-2 justify-center items-center'>
                            <input type="checkbox" className='agree--checkbox' />
                            <p className='text-sm md:text-md'>Agree for terms & conditions</p>
                        </div> */}
                    </div>
                    <button className='bg-[#F5D57A] w-full h-8 text-sm md:text-md rounded-md text-black cursor-pointer uppercase mt-5' onClick={handleSubmit(handleFormSubmit)}>
                        {isPending ? <span className='loader'></span> : 'save'}
                    </button>
                    {isSuccess && <SuccessMessage message="Buyer Information created successfully" />}
                    {isError && <ErrorMessage message={error?.message} />}
                </div>
            </div>
        </>
    )
}

export default AddMoreForm
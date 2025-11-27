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
import { registerData, updateBuyerInfo } from '@/api/BuyerInfoAPI'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import SuccessMessage from '@/components/ui/user/SuccessMessage'
import districts from '@/lib/place'

type BuyerProfile = {
    _id: string
    name: string
    gmail: string
    phone: number
    dateOfBirth: string
    state: string
    dist: string
    profileType?: string
}

type FormValue = {
    buyerProfiles?: BuyerProfile[]
}

type props = {
    onHandleToggle: () => void
    setState: React.Dispatch<React.SetStateAction<boolean>>
    data: FormValue
    buyerIndex: number
    editState: React.SetStateAction<boolean>
    refetch: () => void
}

const AddMoreForm: React.FC<props> = ({ onHandleToggle, setState, data, buyerIndex, editState, refetch }) => {
    const [ buyerId, setBuyerId ] = React.useState<string>("")
    const router = useRouter()
    const { token } = useAuthContext()
    const { register, formState: { errors }, handleSubmit, watch, reset } = useForm<BuyerProfile>()

    const stateWatch = watch('state')

    const {
        mutate,
        isPending,
        isError,
        isSuccess,
        error
    } = useMutation<{ success: true, message: string }, Error,{ data: BuyerProfile; token: string }>({
        mutationFn: registerData
    })

    const {
        mutate: updateMutate,
        isPending: isUpdatePending,
        isError: isUpdateError,
        isSuccess: isUpdateSuccess,
        error: updateError
    } = useMutation<{ success: true, message: string }, Error, { data: BuyerProfile, token: string, buyerId: string }>({
        mutationFn: updateBuyerInfo
    })

    const handleFormSubmit: SubmitHandler<BuyerProfile> = (data) => {
        if (!token) {
            router.push('/login')
            return
        }

        if(editState) {
            updateMutate({ data: data, token, buyerId })
        } else {
            mutate({ data: data, token })
        }
    }

    useEffect(() => {
        const intervel = setInterval(() => {
            if(isSuccess) {
                setState(false)
                refetch()
            }
        }, 1000)

        return () => clearInterval(intervel)
    }, [isSuccess, refetch, setState])

    useEffect(() => {
        if (buyerIndex != null && data) {
            setBuyerId(data?.buyerProfiles?.[buyerIndex]?._id || "")
            reset({
                name: data?.buyerProfiles?.[buyerIndex]?.name || '',
                gmail: data?.buyerProfiles?.[buyerIndex]?.gmail || '',
                phone: data?.buyerProfiles?.[buyerIndex]?.phone,
                dateOfBirth: data?.buyerProfiles?.[buyerIndex]?.dateOfBirth?.slice(0, 10) || '',
                state: data?.buyerProfiles?.[buyerIndex]?.state || '',
                dist: data?.buyerProfiles?.[buyerIndex]?.dist || '',
                profileType: data?.buyerProfiles?.[buyerIndex].profileType || '',
            })
        }
    }, [data, buyerIndex, reset])

    useEffect(() => {
        const intervel = setInterval(() => {
            if(isUpdateSuccess) {
                setState(false)
                refetch()
            }
        }, 1000)

        return () => clearInterval(intervel)
    }, [ refetch, isUpdateSuccess, setState ])

    return (
        <>
            <div className='fixed inset-0 z-50 flex items-center justify-center main-content blurred'>
                <div className='bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B] border-1 border-white/10 w-full md:w-[50%] lg:w-[50%] xl:w-[30%] md:h-full px-3 md:px-10 py-5 rounded-xl relative'>
                    <div className='w-full h-5 absolute top-0 left-0 flex justify-end px-2 py-3 cursor-pointer' onClick={onHandleToggle}>
                        <IoIosClose className='bg-[#F5BB0B] text-black font-bold rounded-full'/>
                    </div>
                    <div>
                        <h1 className='text-[#F5BB0B] text-[1.5rem] font-semibold'>Buyer Info</h1>
                        <p className='text-sm text-white'>Fill in your details to receive your unique ID for the Official Jana Nayagan {"Collector's"} Mug and secure your entry into the lucky draw.</p>
                    </div>
                    <div className='flex flex-col gap-5 my-2'>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaUserEdit className='text-[2.8rem] px-3' />
                            <input type="text" className='h-full w-full outline-none' placeholder='John Doe' {...register("name", { required: "name field is required"})} />
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
                            <input type="date" className='h-full w-full outline-none' placeholder='DOB' {...register('dateOfBirth', { required: "DOB is required" })} />
                        </div>
                        {errors?.dateOfBirth && (
                            <ErrorMessage message={errors?.dateOfBirth?.message} />
                        )}
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaMapMarked className='text-[2.8rem] px-3' />
                            <select className='h-full w-full outline-none' {...register('state', { required: "state field is required" })}>
                                <option value="">Choose an option</option>
                                <option value="TamilNadu">Tamilnadu</option>
                                <option value="Kerala">Kerala</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        {errors?.state && (
                            <ErrorMessage message={errors?.state?.message} />
                        )}
                        {stateWatch === 'others' ? (
                            <div className='bg-white flex text-black items-center h-10'>
                                <BsPinMapFill className='text-[2.8rem] px-3' />
                                <input type="text" className='h-full w-full outline-none' placeholder='District' {...register('dist', { required: "District field is required" })} />
                            </div>
                        ) : (
                            <div className='bg-white flex text-black items-center h-10'>
                                <BsPinMapFill className='text-[2.8rem] px-3' />
                                <select className='h-full w-full outline-none' {...register('dist', { required: "District field is required" })}>
                                    <option className='' value="">Select Your District</option>
                                    {districts && districts?.filter(item => item.state === stateWatch).map((item, index) => (
                                        <option value={item.district} key={index}>{item.district}</option>
                                    ))}
                                </select>
                            </div>
                        )}

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
                    <button className='bg-[#F5BB0B] w-full h-8 text-sm md:text-md rounded-md text-black cursor-pointer uppercase mt-5' onClick={handleSubmit(handleFormSubmit)}>
                        {isPending || isUpdatePending ? <span className='loader'></span> : 'save'}
                    </button>
                    {isSuccess && <SuccessMessage message="Buyer Information created successfully" />}
                    {isUpdateSuccess && <SuccessMessage message="Buyer Information updated successfully" />}
                    {isError && <ErrorMessage message={error?.message} />}
                    {isUpdateError && <ErrorMessage message={updateError?.message} />}
                </div>
            </div>
        </>
    )
}

export default AddMoreForm
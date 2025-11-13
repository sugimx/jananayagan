"use client"

import ErrorMessage from '@/components/ui/user/ErrorMessage'
import { useAuth } from '@/hooks/useAuth'
import { useMutation, useQuery } from '@tanstack/react-query'
// import Paragraph from '@/components/ui/user/Paragraph'
import React from 'react'
import { SubmitHandler, useForm, UseFormRegister, RegisterOptions, FieldValues, Path } from 'react-hook-form'
import { IoClose } from "react-icons/io5"
import { useRouter } from 'next/navigation'
import { GetSingleAddress, registerFuntion, UpdateAddress } from '@/api/AddressInfo'
import SuccessMessage from '@/components/ui/user/SuccessMessage'
import districts from '@/lib/place'
import Heading from '@/components/ui/user/Heading'
import Paragraph from '@/components/ui/user/Paragraph'


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


type InputProps<T extends FieldValues> = {
  placeholder: string;
  register: UseFormRegister<T>
  name: Path<T>
  errorMsg: string;
  validationOptions?: RegisterOptions<T, Path<T>>
}


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


const Input = <T extends FieldValues>(
    { placeholder, register, name, errorMsg, validationOptions }: InputProps<T>) => {
    return (
        <input 
            type="text" 
            className='h-10 w-full outline-none border-2 border-[#F5BB0B] rounded-md px-2 text-[#F5BB0B] md:h-10' 
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

const AddressFormTab = ({ state, setState, addressId, refetch }: { state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>, addressId?: string, refetch: () => void }) => {
    const { formState: { errors }, register, handleSubmit, watch, reset } = useForm<FormData>({
        defaultValues: {
            phone: "",
            addressLine1: "",
            city: "",
            state: "",
            postalCode: "",
            district: "",
            landmark: ""
        }
    })

    const stateWatch = watch('state')

    const router = useRouter()

    const { token } = useAuth()

    const { 
        mutate,
        isError, 
        isPending, 
        isSuccess, 
        error 
    } = useMutation<{ success: true, message: string }, Error,{ data: FormData; token: string }>({ mutationFn: registerFuntion })

    const {
        mutate: updateMutate,
        isError: updateError,
        isPending: updatePending,
        isSuccess: updateSuccess,
        error: updateErr
    } = useMutation<{ success: true, message: string }, Error, { data: FormData, token: string, addressId: string }>({ mutationFn: UpdateAddress })
    
    const {
        data,
        isSuccess: getSuccess,
        isError: getError,
        isFetching
    } = useQuery({ queryKey: ['singleAddress'], queryFn: () => GetSingleAddress(token!, addressId!), enabled: !!token && !!addressId })
 
    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        if(!token) {
            router.push('/login')
            return
        }

        if(addressId) {
            updateMutate({ data: data, token, addressId })
        } else {
            mutate({ data: data, token })
        }
    }

    React.useEffect(() => {
        if(getSuccess && addressId) {
            reset({
                phone: data?.data?.phone,
                addressLine1: data?.data?.addressLine1,
                city: data?.data?.city,
                state: data?.data?.state,
                postalCode: data?.data?.postalCode,
                district: data?.data?.district,
                landmark: data?.data?.landmark
            })
        } else {
            reset({
                phone: "",
                addressLine1: "",
                city: "",
                state: "",
                postalCode: "",
                district: "",
                landmark: ""
             })
        }
    }, [ getSuccess, data, reset, addressId ])

    React.useEffect(() => {
        if(isSuccess || updateSuccess) {
            const intervel = setInterval(() => {
                refetch()
                setState(false)
            }, 1000)

            return () => clearInterval(intervel)
        }
    }, [isSuccess, updateSuccess, refetch, setState])

    if(isFetching) {
        return (
            <div className='w-full h-[20vh] bg-black flex justify-center items-center'>
                <span className='content-loader'></span>
            </div>
        )
    }

    if(getError) {
        return (
            <div className='w-full h-50 flex flex-col justify-center items-center'>
                <Heading content='Oops! No Address Found' />
                <Paragraph content="We couldn't find any address. create new address and try again." />
            </div>
        )
    }

    return (
        <div className='text-white absolute top-[-100px] md:top-[-200px] left-0 w-full min-h-[50vh] flex justify-between flex-col items-center'>
            <div className='w-[90%] md:w-[50%] lg:w-[40%] xl:w-[40%] bg-black rounded-4xl'>
                <div className='bg-black h-[80%] rounded-4xl px-4 py-4'>
                    <div className='flex justify-end text-[#F5BB0B]'>
                        <IoClose onClick={() => setState(!state)} className='cursor-pointer'/>
                    </div>
                    <div className='h-15 flex items-center justify-center text-white text-[1rem] font-semibold'>
                        <h1>New address</h1>
                    </div>
                    <div className='h-auto bg-[#000] flex flex-col gap-4 px-3 py-4 rounded-xl'>
                        <InputContainer>
                            <InputLabel content='Address' />
                            <Input<FormData> placeholder='Enter Your Address' 
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
                            <Input<FormData> 
                                placeholder='Enter Your LandMark' 
                                register={register} 
                                name="landmark" 
                                errorMsg="Landmark field is required"
                            />
                        </InputContainer>
                        {
                            errors?.landmark && <ErrorMessage message={errors?.landmark?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='City' />
                            <Input<FormData> placeholder='Enter Your City' register={register} name="city" errorMsg="City field is required" />
                        </InputContainer>
                        {
                            errors?.city && <ErrorMessage message={errors?.city?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='State' />
                            <select className='h-10 w-full outline-none border-2 border-[#F5BB0B] rounded-md px-2 text-[#F5BB0B]'
                                {
                                    ...register('state', { required: "State field is required" })
                                }
                            >
                                <option className='bg-black' value="" >Select Your State</option>
                                <option className='bg-black' value="TamilNadu">TamilNadu</option>
                                <option className='bg-black' value="Kerala">Kerala</option>
                                <option className='bg-black' value="others">Others</option>
                            </select>
                        </InputContainer>
                        {
                            errors?.state && <ErrorMessage message={errors?.state?.message} />
                        }
                        <InputContainer>
                            <InputLabel content='District' />
                            <select className='h-10 w-full outline-none border-2 border-[#F5BB0B] rounded-md px-2 text-[#F5BB0B]'
                                {
                                    ...register('district', { required: "District field is required" })
                                }
                            >
                                <option className='bg-black' value="">Select Your District</option>
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
                            <Input<FormData> placeholder='Enter Your Postal Code' 
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
                            <Paragraph content='Save to address book' className='text-[#F5BB0B]' />
                        </div> */}
                    </div>
                    <button disabled={isPending || updatePending} className='bg-[#F5BB0B] w-full py-1 text-black my-3 rounded-full cursor-pointer md:py-2 flex justify-center items-center gap-2' onClick={handleSubmit(handleFormSubmit)}>
                        {isPending || updatePending ? <span className='button-loader'></span> : 'save'} 
                    </button>
                    {isSuccess && <SuccessMessage message="Address Information created successfully" />}
                    {isError && <ErrorMessage message={error?.message} />}
                    {updateSuccess && <SuccessMessage message="Address Information Updated successfully" />}
                    {updateError && <ErrorMessage message={updateErr?.message} />}
                </div>
            </div>
        </div>
    )
}

export default AddressFormTab
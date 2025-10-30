"use client"

import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaCamera } from "react-icons/fa"
import AddMoreForm from './AddMoreForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { IoIosClose } from "react-icons/io"
import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteBuyerInfo, getData } from '@/api/BuyerInfoAPI'
import { useAuthContext } from '@/contexts/AuthContext'
import ErrorMessage from '@/components/ui/user/ErrorMessage'
import SuccessMessage from '@/components/ui/user/SuccessMessage'
import LinkComponent from '@/components/ui/user/LinkComponent'

const BuyerSlider = () => {
    const [ toggle, setToggle ] = React.useState(false)
    const [ editState, setEditState ] = React.useState(false)

    const [ processDisableBtn, setProcessDisableBtn ] = React.useState<boolean>(false)
    const [ buyerIndex, setBuyerIndex ] = React.useState<number>(-1)
    const { token } = useAuthContext()

    const { isSuccess, isError, data, refetch, isPending } = useQuery({
        queryKey: ['buyerInfo', token],
        queryFn: getData,
        enabled: !!token,
    })

    const {
        mutate: deleteMutateInfo,
        isSuccess: deleteSuccess,
        isError: deleteIsError,
        isPending: deleteIsPending,
        error: deleteError
    } = useMutation<{ success: true, message: string }, Error, { token: string, buyerId: string }>({ 
        mutationFn: deleteBuyerInfo 
    })

    function handleToggle() {
        setEditState(false)
        setBuyerIndex(0)
        setToggle((prev) => !prev)
    }

    function handleEdit(index: number) {
        setEditState(true)
        setBuyerIndex(index)
        setToggle((prev) => !prev)
    }

    React.useEffect(() => {
        const datas = data?.buyerProfiles?.[0]
        if(isSuccess && datas?.name || datas?.gmail || datas?.dateOfBirth || datas?.dist || datas?.state === null || undefined) {
            setProcessDisableBtn(true)
        } 
    }, [ data, isSuccess])



    const handleDeleteFn = (buyerId: string) => {
        if(buyerId && token) {
            deleteMutateInfo({ token, buyerId })
        }
    }

    React.useEffect(() => {
        if(deleteSuccess) {
            refetch()
        }
    }, [ deleteSuccess, refetch ])

    return (
        <div className='w-full overflow-hidden main-content blurred'>
            <Swiper
                modules={[Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1650: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                }}
            >
                {isPending && <div className='w-full bg-black h-[40vh] flex justify-center items-center'><span className='content-loader'></span></div>}
                {isError && <ErrorMessage message='Buyers not found' />}
                {isSuccess && data?.buyerProfiles?.map((item: { _id: string, name: string, dateOfBirth: string, gmail: string, dist: string, state: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <div className='border-1 border-[#F5D57A] rounded-xl relative'>
                             <div className='w-full h-5 absolute top-0 left-0 flex justify-end px-2 py-3'>
                                {deleteIsPending ? (
                                    <span className='loaders'></span>
                                ) : index !== 0 && (
                                    <IoIosClose className='bg-white text-black font-bold rounded-full cursor-pointer' onClick={() => handleDeleteFn(item._id)} />
                                )}
                            </div>
                            <div className='flex-1 py-4 px-2 md:flex-0 md:px-8'>
                                <div className='flex items-center flex-col'>
                                    <div className='flex flex-col items-center relative bg-white w-[50%] h-[100px] rounded-xl'>
                                        <Image 
                                            src="/user_image.jpg"
                                            alt="rectangle Image"
                                            width={100}
                                            height={400}
                                            className='w-full h-full rounded-xl'
                                        />
                                        <div className='absolute bottom-[-1.5px] text-black bg-gray-500 w-full rounded-b-xl text-center flex justify-center items-center gap-2 text-sm md:text-md cursor-pointer'>
                                            <FaCamera />
                                            <span className='text-sm'>Add</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 my-4'>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                        <span className='text-sm md:text-md'>{item?.name}</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                        <span className='text-sm md:text-md'>{item?.dateOfBirth && item?.dateOfBirth.split("T")[0]}</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                        <span className='text-sm md:text-md'>{item?.gmail}</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                        <span className='text-sm md:text-md'>{item?.dist}</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                        <span className='text-sm md:text-md'>{item?.state}</span>
                                    </div>
                                </div>
                                <button 
                                    className='w-full h-7 bg-[#F5D57A] rounded-lg text-black uppercase text-[0.7rem] cursor-pointer' 
                                    onClick={() => handleEdit(index)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {deleteSuccess && <SuccessMessage message='Buyer Information Deleted Successfully' />}
            {deleteIsError && <ErrorMessage message={deleteError?.message || 'Failed to delete Buyer Information'} />}
            <div className='w-full h-20 flex justify-center items-center gap-3'>
                <button className='bg-black w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 cursor-pointer' onClick={handleToggle}>Add More Cup</button>
                {processDisableBtn ?
                    <LinkComponent link="/payment" content='Proceed Payment' />
                    :
                    <button disabled className='bg-gray-500 w-40 text-sm rounded-md text-white py-2 cursor-not-allowed'>Proceed to Buy</button>
                }
            </div>
            {toggle && <AddMoreForm onHandleToggle={handleToggle} setState={setToggle} data={data} buyerIndex={buyerIndex} editState={editState} refetch={refetch} />}
        </div>
    )
}

export default BuyerSlider
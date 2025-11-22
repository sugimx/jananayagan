"use client"

import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowRight } from "react-icons/md"
// import { FaCamera } from "react-icons/fa"
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
import Heading from '@/components/ui/user/Heading'
import Paragraph from '@/components/ui/user/Paragraph'
import Link from 'next/link'

const BuyerSlider = () => {
    const [ toggle, setToggle ] = React.useState(false)
    const [ editState, setEditState ] = React.useState(false)
    const [ confirmCondtions, setConfirmConditions ] = React.useState(false)

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
        const datas = data?.buyerProfiles?.[0];

        if (isSuccess && datas) {
            const { name, gmail, dateOfBirth, dist, state } = datas
            console.log( name, gmail, dateOfBirth, dist, state, datas)

            const isMissing = name === '' || gmail === '' || dateOfBirth === '' || dist === '' || state === '' || data?.buyerProfiles.length === 0
            console.log("missing", isMissing)
            setProcessDisableBtn(isMissing)
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
                {isPending && <div className='w-full h-[40vh] flex justify-center items-center'><span className='content-loader'></span></div>}
                {isSuccess && data?.buyerProfiles?.map((item: { _id: string, name: string, dateOfBirth: string, gmail: string, dist: string, state: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <div className='bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B] border-1 border-white/10 rounded-xl relative'>
                             <div className='w-full h-5 absolute top-0 left-0 flex justify-end px-2 py-3'>
                                {deleteIsPending ? (
                                    <span className='loaders'></span>
                                ) : index !== 0 && (
                                    <IoIosClose className='bg-[#000] text-white font-bold rounded-full cursor-pointer' onClick={() => handleDeleteFn(item._id)} />
                                )}
                            </div>
                            <div className='flex-1 py-4 px-2 md:flex-0 md:px-8'>
                                <div className='flex items-center flex-col'>
                                    <div className='flex flex-col items-center relative bg-transparent w-[50%] h-[100px] rounded-xl'>
                                        <Image
                                            src="/user_image.png"
                                            alt="rectangle Image"
                                            width={100}
                                            height={400}
                                            className='w-full h-full rounded-xl'
                                        />
                                        {/* <div className='absolute bottom-[-1.5px] text-black bg-gray-500 w-full rounded-b-xl text-center flex justify-center items-center gap-2 text-sm md:text-md cursor-pointer'>
                                            <FaCamera />
                                            <span className='text-sm'>Add</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 my-4 text-white'>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5BB0B]' /></span>
                                        <span className='text-sm md:text-md'>
                                            {item?.name ? item?.name : processDisableBtn && <p className='text-[#7a0202]'>Field is required to proceed payment. Click edit to fill the Information</p>}
                                        </span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5BB0B]' /></span>
                                        <span className='text-sm md:text-md'>
                                            {item?.dateOfBirth ? item?.dateOfBirth.split("T")[0] : processDisableBtn && <p className='text-[#7a0202]'>Field is required to proceed payment. Click edit to fill the Information</p>}
                                        </span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5BB0B]' /></span>
                                        <span className='text-sm md:text-md'>
                                            {item?.gmail ? item?.gmail : processDisableBtn && <p>Field is required to proceed payment. Click edit to fill the Information</p>}
                                        </span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5BB0B]' /></span>
                                        <span className='text-sm md:text-md'>
                                            {item?.dist ? item?.dist : processDisableBtn && <p className='text-[#7a0202]'>Field is required to proceed payment. Click edit to fill the Information</p>}
                                        </span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdKeyboardArrowRight className='text-[#F5BB0B]' /></span>
                                        <span className='text-sm md:text-md'>
                                             {item?.state ? item?.state : processDisableBtn && <p className='text-[#7a0202]'>Field is required to proceed payment. Click edit to fill the Information</p>}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className='w-full h-7 bg-[#F5BB0B] rounded-lg text-[#000] uppercase text-[0.7rem] cursor-pointer'
                                    onClick={() => handleEdit(index)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                data?.buyerProfiles.length === 0 && (
                    <div className='w-full h-50 flex flex-col justify-center items-center'>
                        <Heading content='Oops! No Buyers Found' />
                        <Paragraph content="We couldn't find any Buyers. create new Buyers and try again." />
                    </div>
                )
            }
            {
                isError && (
                    <div className='w-full h-50 flex flex-col justify-center items-center'>
                        <Heading content='Oops! No Buyers Found' />
                        <Paragraph content="We couldn't find any Buyers. create new Buyers and try again." />
                    </div>
                )
            }
            {deleteSuccess && <SuccessMessage message='Buyer Information Deleted Successfully' />}
            {deleteIsError && <ErrorMessage message={deleteError?.message || 'Failed to delete Buyer Information'} />}
            <div className='flex justify-center items-center py-4 text-sm lg:w-[50%] mx-auto'>
                <div className='text-[#fff] flex items-center gap-2 px-2'>
                    <input type='checkbox' className='cursor-pointer' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmConditions(e.target.checked)} />
                    <div className='flex gap-2'>
                        <p>
                            “I hereby confirm that I have fully read, understood, and agreed to all <Link target="_blank" href="/terms-conditions" className='text-[#F5BB0B]'>Terms & Conditions</Link>, <Link target="_blank" href="/privacy-policy" className='text-[#F5BB0B]'>Privacy Policy</Link>, <Link target="_blank" href="/return-policy" className='text-[#F5BB0B]'>Return & Cancellation Policy</Link> provided on this website. I acknowledge that my order, payment, delivery, and participation in any promotional activity will be governed solely by these policies, and I voluntarily consent to proceed.”
                        </p>
                        {/* <span>Promotional & Lucky Draw Disclaminer</span>
                        <span>Privacy Policy</span>
                        <span>Return & Cancellation</span> 
                        
                        , and the <Link target="_blank" href="/promotional-conditions" className='text-[#F5BB0B]'>Lucky Draw Disclaimer</Link>
                        */}
                    </div>
                </div>
            </div>
            <div className='w-full h-20 flex justify-center items-center gap-3'>
                <button className='bg-black w-40 text-sm rounded-md border-1 border-[#F5BB0B] py-2 cursor-pointer text-[#DCDCDC]' onClick={handleToggle}>Add More Cup</button>
                {data?.buyerProfiles.length !== 0 && confirmCondtions && !processDisableBtn ? (
                    <LinkComponent link="/payment" content='Proceed Payment' />
                ): (
                    <button disabled className='bg-gray-500 w-40 text-sm rounded-md text-white py-2 cursor-not-allowed'>Proceed Payment</button>
                )}
            </div>
            {toggle && <AddMoreForm onHandleToggle={handleToggle} setState={setToggle} data={data} buyerIndex={buyerIndex} editState={editState} refetch={refetch} />}
        </div>
    )
}

export default BuyerSlider
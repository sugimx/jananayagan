"use client"

import React from 'react'
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md"
import AddMoreForm from './AddMoreForm';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BuyerSlider = () => {
    const [ toggle, setToggle ] = React.useState(false)
    const arr = [1, 2, 3, 4, 5, 6, 7]

    function handleToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <div className='w-full overflow-hidden'>
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
                {arr.map((item, i) => (
                    <SwiperSlide>
                        <div className='border-1 border-[#F5D57A] flex-1 py-4 px-2 rounded-xl md:flex-0 md:px-8' key={i}>
                            <div className='flex items-center flex-col'>
                                <div className='flex flex-col items-center relative bg-white w-[50%] rounded-xl'>
                                    <Image 
                                        src="/Rectangle 4.png"
                                        alt="rectangle Image"
                                        width={100}
                                        height={100}
                                    />
                                    <div className='absolute bottom-[-1.5px] text-black bg-gray-500 w-full rounded-b-xl text-center'>
                                        <span className='text-sm'>Add</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 my-4'>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span>Melto {item}</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span>22-03-1997</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span>meltosm8@gmail.com</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span>Kanyakumari</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span>TamilNadu</span>
                                </div>
                            </div>
                            <button className='w-full h-7 bg-[#F5D57A] rounded-lg text-black uppercase text-[0.7rem] cursor-pointer'>Edit</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full h-20 flex justify-center items-center gap-3'>
                <button className='bg-black w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 cursor-pointer' onClick={handleToggle}>Add More Cup</button>
                <button className='bg-[#F5D57A] w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 text-black font-semibold cursor-pointer'>Checkout</button>
            </div>
            {toggle && <AddMoreForm />}
        </div>
    )
}

export default BuyerSlider
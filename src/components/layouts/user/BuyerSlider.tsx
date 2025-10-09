"use client"

import React from 'react'
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaCamera } from "react-icons/fa"
import AddMoreForm from './AddMoreForm';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LinkComponent from '@/components/ui/user/LinkComponent';

const BuyerSlider = () => {
    const [ toggle, setToggle ] = React.useState(false)
    const arr = [1, 2, 3, 4, 5, 6, 7]

    function handleToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <div className='w-full overflow-hidden main-content blurred' id="">
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
                    <SwiperSlide key={i}>
                        <div className='border-1 border-[#F5D57A] flex-1 py-4 px-2 rounded-xl md:flex-0 md:px-8'>
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
                                    <span className='text-sm md:text-md'>Melto {item}</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span className='text-sm md:text-md'>22-03-1997</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span className='text-sm md:text-md'>meltosm8@gmail.com</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span className='text-sm md:text-md'>Kanyakumari</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdKeyboardArrowRight className='text-[#F5D57A]' /></span>
                                    <span className='text-sm md:text-md'>TamilNadu</span>
                                </div>
                            </div>
                            <button className='w-full h-7 bg-[#F5D57A] rounded-lg text-black uppercase text-[0.7rem] cursor-pointer'>Edit</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full h-20 flex justify-center items-center gap-3'>
                <button className='bg-black w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 cursor-pointer' onClick={handleToggle}>Add More Cup</button>
                <LinkComponent link="/address" content='Proceed Payment' />
            </div>
            {toggle && <AddMoreForm onHandleToggle={handleToggle} />}
        </div>
    )
}

export default BuyerSlider
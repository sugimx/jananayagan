"use client"

import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md"
import AddMoreForm from './AddMoreForm';

const BuyerSlider = () => {
    const [ toggle, setToggle ] = React.useState(false)
    const arr = [1, 2, 3]
    const getSlides = (desired: number) => Math.min(desired, arr.length)

    function handleToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <>
            <Slider
                key={arr.length}
                slidesToShow={getSlides(6)}
                slidesToScroll={getSlides(6)}
                infinite={false}
                speed={500}
                arrows={false}
                responsive={[
                    {
                        breakpoint: 1250,
                        settings: { slidesToShow: getSlides(4), slidesToScroll: getSlides(4) }
                    },
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: getSlides(3), slidesToScroll: getSlides(3) },
                    },
                    {
                        breakpoint: 600,
                        settings: { slidesToShow: getSlides(2), slidesToScroll: getSlides(2) },
                    },
                ]}
                className="md:!flex md:!gap-5"
            >
                {arr.map((item, i) => (
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
            ))}
            </Slider>
            <div className='w-full h-20 flex justify-center items-center gap-3'>
                <button className='bg-black w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 cursor-pointer' onClick={handleToggle}>Add More Cup</button>
                <button className='bg-[#F5D57A] w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 text-black font-semibold cursor-pointer'>Checkout</button>
            </div>
            {toggle && <AddMoreForm />}
        </>
    )
}

export default BuyerSlider
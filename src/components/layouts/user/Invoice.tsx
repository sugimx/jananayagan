"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
const InvoicePdfDownloadButton = dynamic(
  () => import("@/components/layouts/user/InvoicePdfDownloadButton"),
  { ssr: false } 
)
import { FaRupeeSign } from "react-icons/fa"

import React from 'react'

const Invoice = () => {
    return (
        <>
            <div className="w-full min-h-[50vh] my-7">
                <div className="text-center md:w-[80%] lg:w-[50%] mx-auto">
                    <h1 className="text-[1.2rem] font-semibold my-2 md:text-[2rem] text-[#F5D57A]">THANK YOU!</h1>
                    <p className="text-[0.9rem] md:text-[1.2rem] font-light">We received your order and will start preparing your package right away. You will receive a confirmation email in a moment.</p>
                </div>

                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div className="flex gap-3 my-5 lg:w-[100%] lg:mx-auto py-4" key={index}>
                        <div className="flex flex-col gap-2 md:flex-row flex-1">
                            <Image 
                                src="/cup_image.png"
                                alt="cup image"
                                width={300}
                                height={300}
                                className="w-20 h-20 lg:w-30 lg:h-30"
                            />
                            <div className="flex flex-col gap-3 lg:flex-row lg:gap-20">
                                <p className="text-xs md:text-md lg:text-lg">Official Jana Nayagan Limited Edition Cup</p>
                                <p className="text-xs md:text-md lg:text-lg flex items-center md:flex-row md:items-start">
                                    <FaRupeeSign className="md:my-[3px]" /> 
                                    <span>{item}00</span>
                                </p>
                            </div>
                        </div>
                        <div className="md:flex md:justify-between flex-1">
                            <div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-xs md:text-md lg:text-lg text-[#F5D57A] font-light">Delivery Details</h1>
                                </div>
                                <p className="text-xs md:text-md lg:text-lg my-2">3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz 71856-95159 Iran</p>
                                <div>
                                    <h1 className="text-xs md:text-md lg:text-lg text-[#F5D57A] font-light">Contact information</h1>
                                    <span className="text-white text-xs md:text-sm lg:text-md">amoopur@gmail.com</span>
                                </div>
                            </div>
                            <div className="md:flex md:flex-col">
                                <button className="bg-[#F5D57A] px-7 py-2 text-xs text-black uppercase mb-2 cursor-pointer">Status Download</button>
                                <InvoicePdfDownloadButton /> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Invoice
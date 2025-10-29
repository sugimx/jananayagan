import React from 'react'
import Image from 'next/image'
import { RxDownload } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import html2canvas from 'html2canvas'

const ShareImgComponent = (
    { handleToggle }: { handleToggle: () => void }
) => {
    const ref = React.useRef<HTMLDivElement>(null)

    const handleDownload = async () => {
        const element = ref.current

         if (!element) {
            console.error("Element not found!")
            return
        }

        await new Promise((r) => setTimeout(r, 200))
       
        const canvas = await html2canvas(element, {
            useCORS: true, 
            scale: 2,
            backgroundColor: "#353240",
        })

        const dataURL = canvas.toDataURL("image/png")

    
        const link = document.createElement("a")
        link.href = dataURL
        link.download = "status.png"
        link.click()
    }

    return (
        <div className='absolute top-[5%] left-1/2 -translate-x-1/2 w-[340px] flex flex-col justify-center items-center rounded-t-4xl'>
            <div className='max-w-[340px] h-auto bg-[#353240] rounded-4xl' ref={ref}>
                <div className='share-image'>
                    <Image 
                        src="/jana_nayagan_logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='share-content'>
                    <div className='share-content-image'>
                        <Image 
                            src="/cup_image.png"
                            alt="cup image"
                            width={400}
                            height={400} 
                            className="w-50 h-50"
                        />
                    </div>
                    <div className='share-booking-container'>
                        <div className='share-booking-content'>
                            <span>Booking ID</span>
                            <span>000085752257</span>
                        </div>
                        <div className='share-booking-content'>
                            <span>Payment Time</span>
                            <span>25-02-2023, 13:22:16</span>
                        </div>
                        <div className='share-booking-content'>
                            <span>Buyer Name</span>
                            <span>Antonio Roberto</span>
                        </div>
                         <div className='share-booking-content mt-5'>
                            <span>Amount</span>
                            <span>INR 320</span>
                        </div>
                    </div>
                </div>
                <div className='share-code-image'>
                    <Image 
                        src="/qr_code.png"
                        alt="barcode image"
                        width={300}
                        height={100}
                        className="w-40 h-40"
                    />
                </div>
            </div>
            <div className='absolute top-3 right-7'>
                <button className='bg-[#F5D57A] text-black px-2 rounded-full py-2 flex items-center gap-2 cursor-pointer text-center' onClick={handleDownload}>
                    <RxDownload />
                </button>
            </div>
            <div className='absolute top-3 left-7'>
                <button className='bg-[#F5D57A] text-black px-2 rounded-full py-2 flex items-center gap-2 cursor-pointer text-center' onClick={handleToggle}>
                    <IoMdClose />
                </button>
            </div>
        </div>
    )
}

export default ShareImgComponent
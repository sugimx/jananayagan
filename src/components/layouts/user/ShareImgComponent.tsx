import React from 'react'
import { RxDownload } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { useQuery } from '@tanstack/react-query'
import { getSingleStatus } from '@/api/StatusAPI'
import { useAuth } from '@/hooks/useAuth'
import ErrorMessage from '@/components/ui/user/ErrorMessage'
import { toPng } from 'html-to-image'
import QRCode from 'react-qr-code'
import Image from 'next/image'

const ShareImgComponent = (
    { handleToggle, orderId }: { handleToggle: () => void, orderId: string }
) => {
    const ref = React.useRef<HTMLDivElement>(null)

    const { token } = useAuth()

    const {
        data,
        isSuccess,
        isPending,
        error,
        isError
    } = useQuery({
        queryKey: ['status', orderId],
        queryFn: () => getSingleStatus({ token: token!, orderId }),
        enabled: !!token && !!orderId
    })

    const handleDownload = async () => {
        if (!ref.current) return;

        const dataUrl = await toPng(ref.current, {
            cacheBust: true,
            pixelRatio: 2,
            backgroundColor: "white",
        })

        const link = document.createElement("a")
        link.download = "hidden-content.png"
        link.href = dataUrl
        link.click()
    }

    return (
        <>
            {isSuccess && (
                <div className="fixed top-40 bottom-25 inset-0 z-50 flex items-center justify-center">
                    <div className='relative'>
                        <div ref={ref}>
                            <div className='max-w-[340px] h-auto bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B]'>
                                <div className='share-image'>
                                    <Image
                                        src="/tvk_logo.png"
                                        alt="Logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className='share-content bg-gradient-to-tr from-[#ff4e4e] to-[#ffce33]'>
                                    <div className='share-content-image'>
                                        <Image
                                            src="/cup_number_277.png"
                                            alt="cup image"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className='share-booking-container'>
                                        <div className='share-booking-content'>
                                            <span>Booking ID</span>
                                            <span>{isPending ? 'loading' : data?.data?.bookingId ? data?.data?.bookingId : '-'}</span>
                                        </div>
                                        <div className='share-booking-content'>
                                            <span>Payment Time</span>
                                            <span>{isPending ? 'loading' : data?.data?.paymentTime ? data?.data?.paymentTime : '-'}</span>
                                        </div>
                                        <div className='share-booking-content'>
                                            <span>Buyer Name</span>
                                            <span>{isPending ? 'loading' : data?.data?.buyerName ? data?.data?.buyerName : 'John Doe'}</span>
                                        </div>
                                        <div className='share-booking-content mt-5'>
                                            <span>Amount</span>
                                            <span>INR {isPending ? 'loading' : data?.data?.amount ? data?.data?.amount : '00'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='share-code-image'>
                                    {/* <img
                                        src="/qr_code.png"
                                        alt="barcode image"
                                        width={300}
                                        height={100}
                                        className="w-40 h-40"
                                    /> */}
                                    <QRCode value='www.tvkcup2026.com' style={{ height: "auto", maxWidth: "70%", width: "70%" }} />
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-3 right-7'>
                            <button className='bg-gradient-to-tr from-[#ff4e4e] to-[#ffce33] text-black px-2 rounded-full py-2 flex items-center gap-2 cursor-pointer text-center' onClick={handleDownload}>
                                <RxDownload />
                            </button>
                        </div>
                        <div className='absolute top-3 left-7'>
                            <button className='bg-gradient-to-tr from-[#ff4e4e] to-[#ffce33] text-black px-2 rounded-full py-2 flex items-center gap-2 cursor-pointer text-center' onClick={handleToggle}>
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isError && <ErrorMessage message={(error as Error).message} />}
        </>
    )
}

export default ShareImgComponent
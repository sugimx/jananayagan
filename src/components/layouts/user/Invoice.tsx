"use client"

import React from 'react'
import Head from 'next/head'
import downloadA4Pdf from '@/lib/downloadDivAsPDF'
import Container from './Container'
import Link from 'next/link'
import ShareImage from '@/lib/shareImage'

const Invoice = () => {
  return (
    <>
        <Head>
            <meta property="og:title" content="Invoice - Jananayagan" />
            <meta property="og:description" content="Download your invoice from Jananayagan." />
            <meta property="og:image" content="https://jananayagan.vercel.app/jana-nayagan%2032.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
        </Head>
        <Container>
            <div id="download_container" >
                <div className='text-[#F5D57A] py-2 px-2 lg:py-20 lg:px-20' style={{ position: 'absolute', left: '-9999px', top: 0, width: '100vw' }}>
                    <div>
                        <h1 className='font-bold text-md lg:text-[5rem] lg:my-12'>Invoice</h1>
                        <p className='text-[0.5rem] my-2 lg:text-4xl lg:my-20'>#27346733-022</p>
                        <div className='flex items-center leading-relaxed gap-4 text-[0.5rem] lg:gap-18 lg:text-4xl'>
                            <span className='lg:my-2'>Invoice Date</span>
                            <span className='font-bold'>6 March, 2023</span>
                        </div>
                        <div className='flex items-center leading-relaxed gap-4 text-[0.5rem] lg:gap-18 lg:text-4xl'>
                            <span className='lg:my-2'>Invoice Date</span>
                            <span className='font-bold'>6 March, 2023</span>
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#4a4a4a] flex my-2 lg:my-20'></div>
                    <div className='flex font-semibold text-md lg:text-4xl lg:my-20'>
                        <div className='flex-1 flex flex-col gap-3 text-[0.5rem] lg:text-2xl lg:gap-8'>
                            <p className='lg:my-12'>Billed To</p>
                            <p>Din Djarin</p>
                            <p>9029 Salt Lake, Mandalor</p>
                            <p>dindjarin@gmail.com</p>
                            <p>(+254) 724-453-233</p>
                        </div>
                        <div className='flex-1 flex flex-col gap-3 text-[0.5rem] lg:text-2xl lg:gap-8'>
                            <p className='lg:my-12'>From</p>
                            <p>Jana Nayagan Mug Seller</p>
                            <p>9029 Arcane, Jupiter 2</p>
                            <p>www.jananayagan.com</p>
                            <p>(+254) 243-124-392</p>
                        </div>
                    </div>
                    <div className='my-4 lg:my-25'>
                        <p className='text-[0.4rem] lg:text-4xl'>This is an invoice sample. This message is set as default. You can always change it to whatever you like. Feel free.</p>
                    </div>
                    <div>
                        <div className='text-[0.5rem] py-3 font-bold flex justify-between border-b-1 border-[#4a4a4a] lg:py-6 lg:text-4xl'>
                            <p className='w-[30%]'>Description</p>
                            <p className='w-[20%] text-center'>Quantity</p>
                            <p className='w-[20%] text-center'>Price</p>
                            <p className='w-[20%] text-end'>Amount</p>
                        </div>
                        <div className='text-[0.5rem] py-3 font-bold flex justify-between border-b-1 border-[#4a4a4a] lg:py-6 lg:text-4xl'>
                            <p className='w-[30%]'>Official Jana Nayagan Cup Limited Edition</p>
                            <p className='w-[20%] text-center'>5</p>
                            <p className='w-[20%] text-center'>₹ 400</p>
                            <p className='w-[20%] text-end'>₹ 2,000</p>
                        </div>
                    </div>
                    <div className='flex justify-end text-[0.5rem] my-2 gap-4 lg:gap-60 lg:text-4xl lg:my-5'>
                        <div className='flex flex-col gap-2 lg:gap-12'>
                            <p>Subtotal</p>
                            <p>Total excluding tax</p>
                            <p>Discount (2%)</p>
                            <p>Total</p>
                            <p>Amout Due</p>
                        </div>
                        <div className='flex flex-col gap-2 lg:gap-12'>
                            <p>₹ 2,000</p>
                            <p>₹ 2,200</p>
                            <p>₹ 200</p>
                            <p>₹ 2,000</p>
                            <p>₹ 2,000</p>
                        </div>
                    </div>
                    <div className='my-5 lg:my-25'>
                        <p className='text-[0.4rem] lg:text-4xl'>This is a footer sample. You can add a special message to your user to thank them.</p>
                    </div> 
                    <div className='border-t-1 border-[#4a4a4a] flex justify-between py-2 text-[0.4rem] lg:py-8 lg:text-4xl '>
                        <p>#27346733-022 · $93,100 due 7 March, 2023</p>
                        <p>Page 1 of 1</p>
                    </div>
                </div>
            </div>
            <Link
              href="#"
                onClick={e => {
                    e.preventDefault();
                    downloadA4Pdf("download_container", "invoice.pdf");
                }}
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors mt-8"
            >
              Download Invoice PDF
            </Link>
            <ShareImage />
       </Container>
    </>
  )
}

export default Invoice
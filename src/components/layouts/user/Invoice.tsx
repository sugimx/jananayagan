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
            <div id="download_container" style={{ position: 'absolute', left: '-9999px', top: 0, width: '100vw' }}>
                <div className='py-20 px-20 text-[#F5D57A]'>
                    <div>
                        <h1 className='text-[5rem] font-bold my-12'>Invoice</h1>
                        <p className='text-4xl my-20'>#27346733-022</p>
                        <div className='flex gap-18 items-center text-4xl leading-relaxed'>
                            <span className='my-2'>Invoice Date</span>
                            <span className='font-bold'>6 March, 2023</span>
                        </div>
                        <div className='flex gap-18 items-center text-4xl leading-relaxed'>
                            <span className='my-2'>Invoice Date</span>
                            <span className='font-bold'>6 March, 2023</span>
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#4a4a4a] flex my-20'></div>
                    <div className='my-20 flex font-semibold text-4xl'>
                        <div className='flex-1 flex flex-col gap-8'>
                            <p className='my-12'>Billed To</p>
                            <p>Din Djarin</p>
                            <p>9029 Salt Lake, Mandalor</p>
                            <p>dindjarin@gmail.com</p>
                            <p>(+254) 724-453-233</p>
                        </div>
                        <div className='flex-1 flex flex-col gap-8'>
                            <p className='my-12'>From</p>
                            <p>Jana Nayagan Mug Seller</p>
                            <p>9029 Arcane, Jupiter 2</p>
                            <p>www.jananayagan.com</p>
                            <p>(+254) 243-124-392</p>
                        </div>
                    </div>
                    <div className='my-25'>
                        <p className='text-4xl'>This is an invoice sample. This message is set as default. You can always change it to whatever you like. Feel free.</p>
                    </div>
                    <div>
                        <div className='text-4xl font-bold flex justify-between py-6 border-b-1 border-[#4a4a4a]'>
                            <p className='w-[30%]'>Description</p>
                            <p className='w-[20%] text-center'>Quantity</p>
                            <p className='w-[20%] text-center'>Price</p>
                            <p className='w-[20%] text-end'>Amount</p>
                        </div>
                        <div className='text-3xl font-bold flex justify-between py-6 border-b-1 border-[#4a4a4a]'>
                            <p className='w-[30%]'>Official Jana Nayagan Cup Limited Edition</p>
                            <p className='w-[20%] text-center'>5</p>
                            <p className='w-[20%] text-center'>₹ 400</p>
                            <p className='w-[20%] text-end'>₹ 2,000</p>
                        </div>
                    </div>
                    <div className='flex justify-end gap-60 text-4xl my-5'>
                        <div className='flex flex-col gap-12'>
                            <p>Subtotal</p>
                            <p>Total excluding tax</p>
                            <p>Discount (2%)</p>
                            <p>Total</p>
                            <p>Amout Due</p>
                        </div>
                        <div className='flex flex-col gap-12'>
                            <p>₹ 2,000</p>
                            <p>₹ 2,200</p>
                            <p>₹ 200</p>
                            <p>₹ 2,000</p>
                            <p>₹ 2,000</p>
                        </div>
                    </div>
                    <div className='my-25'>
                        <p className='text-4xl'>This is a footer sample. You can add a special message to your user to thank them.</p>
                    </div>
                    <div className='text-4xl border-t-1 border-[#4a4a4a] py-8 flex justify-between'>
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
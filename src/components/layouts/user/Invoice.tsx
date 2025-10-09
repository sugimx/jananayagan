"use client"

import React from 'react'
import downloadA4Pdf from '@/lib/downloadDivAsPDF'
import Container from './Container'

const Invoice = () => {
  return (
    <>
       <Container>
            <div id="download_container" className='text-[#F5D57A]'>
                <div className='py-20 px-20'>
                    <div>
                        <h1 className='text-2xl text-bold'>Invoice</h1>
                        <p>#27346733-022</p>
                        <div>
                            <span>Invoice Date</span>
                            <span>6 March, 2023</span>
                        </div>
                        <div>
                            <span>Invoice Date</span>
                            <span>6 March, 2023</span>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <button onClick={() => downloadA4Pdf("download_container", "invoice.pdf")} className='text-white cursor-pointer'>Get Your Invoice</button>
       </Container>
    </>
  )
}

export default Invoice
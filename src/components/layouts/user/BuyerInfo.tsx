import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuyerSlider from './BuyerSlider'

const BuyerInfo = () => {
    return (
        <>
            <Container>
                <div className='h-[80vh] py-10'>
                    <div>
                        <h1 className='text-[1.5rem] text-[#F5D57A] font-semibold my-1 md:text-[3rem] md:my-2'>Buyer Info</h1>
                        <p className='text-sm leading-relaxed my-1 md:text-lg md:my-4'>Fill in your details to receive your unique ID for the Official Jana Nayagan Limited Edition Cup and secure your entry into the lucky draw.</p>
                    </div>
                        <BuyerSlider />
                        <div className='w-full h-20 flex justify-center items-center gap-3'>
                            <button className='bg-black w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2'>Add More Cup</button>
                            <button className='bg-[#F5D57A] w-40 text-sm rounded-md border-1 border-[#F5D57A] py-2 text-black font-semibold'>Checkout</button>
                        </div>
                    <div>
                        
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BuyerInfo
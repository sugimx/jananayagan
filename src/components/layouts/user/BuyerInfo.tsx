import React from 'react'
import Container from './Container'
import BuyerSlider from './BuyerSlider'

const BuyerInfo = () => {
    return (
        <>
            <Container>
                <div className='h-[80vh] py-10 relative'>
                    <div>
                        <h1 className='text-[1.5rem] text-[#F5D57A] font-semibold my-1 md:text-[3rem] md:my-2'>Buyer Info</h1>
                        <p className='text-sm leading-relaxed my-1 md:text-lg md:my-4'>Fill in your details to receive your unique ID for the Official Jana Nayagan Limited Edition Cup and secure your entry into the lucky draw.</p>
                    </div>
                    <BuyerSlider />
                </div>
            </Container>
        </>
    )
}

export default BuyerInfo
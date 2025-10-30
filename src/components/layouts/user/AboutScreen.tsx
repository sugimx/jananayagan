import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import AboutHeading from '@/components/ui/user/AboutHeading'

const AboutScreen = () => {
    return (
        <Container>
            <div className='w-[80%] mx-auto my-10 lg:flex lg:items-center'>
                <div className='leading-relaxed text-center lg:flex-[0.5] lg:text-start'>
                    <AboutHeading content='About Us - Jananayagan Cup' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                       <p>Welcome to Jananayagan Cup — your trusted destination for premium-quality cups and drinkware. We specialize in durable, stylish, and customizable products perfect for homes, offices, cafés, and events. Explore our wide collection of mugs, tumblers, and accessories designed to suit every taste and budget. Shop easily, enjoy secure payments, and get fast delivery right to your doorstep. Discover quality you can count on — only at Jananayagan Cup.</p>


                        {/* <p>Welcome to SUGIMX Private Limited, a company built on passion, pride, and unforgettable celebrations.</p>
                        <p>We are proud to announce our official collaboration with KVN Productions for the Jana Nayagan 2026 Movie Promotion - the grand celebration of Thalapathy {"Vijay's"} final fan-based film. This is not just a business project - it is a once-in-a-lifetime moment for every fan.</p>
                        <p>As part of this collaboration, we present the Jana Nayagan 2026 Limited Edition Coffee Cup
                        Collection - a tribute to Vijay sir and his unmatched journey.  Each cup is individually numbered
                        from 1 to 27,70,000, giving every fan a unique place in history. From the first buyer to the last,
                        your name and number will forever remain on our platform, celebrating your pride as a fan</p> */}
                    </div> 
                    <Link href='/product' className='border-1 border-[#F5D57A] py-1 inline-block my-3 px-10 text-sm md:text-lg'>Explore</Link>
                </div>
                <div className='lg:flex-[1] flex justify-center lg:justify-end items-center mt-6 lg:mt-0'>
                    <Image 
                        src="/jana-nayagan 32.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[300px] md:w-[450px] lg:h-[300px] lg:w-[600px]'
                    />
                </div>
            </div>
            {/* <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='lg:flex-[1] flex justify-center lg:justify-start items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image 
                        src="/cup_image.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[450px] lg:h-[600px] lg:w-[600px]'
                    />
                </div>
                <div className='leading-relaxed text-center lg:flex-1 lg:text-start order-1 lg:order-1'>
                    <AboutHeading content='Why This Project is Special?' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p><span className='font-bold'>Movie Collaboration</span> - Officially associated with KVN Productions for Jana Nayagan 2026 promotions.</p>
                        <p><span className='font-bold'>Historic Celebration</span> - The final fan-based film of Thalapathy Vijay, marked forever with these cups.</p>
                        <p><span className='font-bold'>Unique Identity</span> - Every cup is numbered, making your purchase a once-in-history collectible</p>
                        <p><span className='font-bold'>Fan Movement</span> - More than coffee, this is about emotion, unity, and celebration.</p>
                    </div> 
                </div>
            </div>
            <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='leading-relaxed text-center lg:flex-[0.5] lg:text-start'>
                    <AboutHeading content='Our Mission' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p>To make Jana Nayagan 2026 not just a movie release, but a festival for fans across Tamil Nadu, Kerala, and beyond.</p>
                    </div> 
                    <AboutHeading content='Our Belief' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p>This is the last dance, the final roar, the greatest celebration. Owning a cup means you are not just a spectator - you are part of this historic moment</p>
                        <p>When you hold your Jana Nayagan 2026 Coffee Cup, {"you're"} not holding just a product - {"you're"} holding a piece of cinema history, a symbol of victory, and the spirit of Vijay fans worldwide</p>
                    </div> 
                </div>
                <div className='lg:flex-[1] flex justify-center lg:justify-end items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image 
                        src="/cup_image.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[450px] lg:h-[600px] lg:w-[600px]'
                    />
                </div>
            </div>
            <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='lg:flex-[1] flex justify-center lg:justify-start items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image 
                        src="/cup_image.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[450px] lg:h-[600px] lg:w-[600px]'
                    />
                </div> 
                <div className='leading-relaxed text-center lg:flex-1 lg:text-start order-1 lg:order-1'>
                    <AboutHeading content='Short About Us' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p>SUGIMX Private Limited, in collaboration with KVN Productions, proudly presents the Jana Nayagan 2026 Limited Edition Coffee Cup Collection - the official fan celebration of Thalapathy {"Vijay's"} final film. With 27,70,000 uniquely numbered cups, this project turns every fan-s support into history.</p>
                    </div> 
                </div>
            </div> */}
        </Container>
    )
}

export default AboutScreen
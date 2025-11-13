import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AboutHeading from '@/components/ui/user/AboutHeading'
import Container from './Container'

const AboutContent = () => {
    return (
        <Container>
            <div className='w-[80%] mx-auto py-10 lg:flex lg:items-center'>
                <div className='leading-relaxed text-center lg:flex-[0.5] lg:text-start'>
                    <AboutHeading content='About Us - TVK Cup' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p>Welcome to Jananayagan Cup — your trusted destination for premium-quality cups and drinkware. We specialize in durable, stylish, and customizable products perfect for homes, offices, cafés, and events. Explore our wide collection of mugs, tumblers, and accessories designed to suit every taste and budget. Shop easily, enjoy secure payments, and get fast delivery right to your doorstep. Discover quality you can count on — only at Jananayagan Cup.</p>
                        <p>Welcome to SUGIMX Private Limited, a company built on passion, pride, and unforgettable celebrations.</p>
                        <p>We are proud to announce our official collaboration with KVN Productions for the Jana Nayagan 2026 Movie Promotion - the grand celebration of Thalapathy {"Vijay's"} final fan-based film. This is not just a business project - it is a once-in-a-lifetime moment for every fan.</p>
                        <p>As part of this collaboration, we present the Jana Nayagan 2026 Limited Edition Coffee Cup
                        Collection - a tribute to Vijay sir and his unmatched journey.  Each cup is individually numbered
                        from 1 to 27,70,000, giving every fan a unique place in history. From the first buyer to the last,
                        your name and number will forever remain on our platform, celebrating your pride as a fan</p>
                    </div> 
                    <Link href='/product' className='border-1 border-[#F5BB0B] py-1 inline-block my-3 px-10 text-sm md:text-lg text-[#F5BB0B]'>Explore</Link>
                </div>
                <div className='lg:flex-[1] flex justify-center lg:justify-end items-center mt-6 lg:mt-0'>
                    <Image 
                        src="/jana-nayagan 32.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[350px] lg:h-[350px] lg:w-[450px]'
                    />
                </div>
            </div>
            <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='lg:flex-[1] flex justify-center lg:justify-start items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image 
                        src="/tvk_cup.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[350px] lg:h-[400px] lg:w-[450px]'
                    />
                </div>
                <div className='leading-relaxed text-center lg:flex-1 lg:text-start order-1 lg:order-1'>
                    <AboutHeading content='What Makes This Cup Special?' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p><span className='font-bold'>Exclusive TVK Flag Design</span> - a proud symbol of unity and change.</p>
                        <p><span className='font-bold'>Unique Serial Number</span> - every cup is registered and traceable by its owner name.</p>
                        <p><span className='font-bold'>Digital Ownership System</span> - your name appears publicly; personal details stay secure under login.</p>
                        <p><span className='font-bold'>Limited Edition</span> - only available for a short booking window.</p>
                        <p><span className='font-bold'>Transferable Ownership</span> - you can resell or gift it later to another proud supporter.</p>
                    </div> 
                </div>
            </div>
            <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='leading-relaxed text-center lg:flex-[0.5] lg:text-start'>
                    <AboutHeading content='Our Mission' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p>This project stands for passion, unity, and responsibility. A part of every purchase goes toward helping children with brain and developmental disorders, because real leadership means caring for every life.</p>
                        <p>When this cup enters your home, it becomes more than an object - it becomes a conversation, a belief, and a moment that inspires others. Even a small cup can make a big change. </p>
                    </div> 
                </div>
                <div className='lg:flex-[1] flex justify-center lg:justify-end items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image 
                        src="/tvk_cup.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[350px] lg:h-[400px] lg:w-[450px]'
                    />
                </div>
            </div>
            <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='lg:flex-[1] flex justify-center lg:justify-start items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image 
                        src="/tvk_cup.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[350px] lg:h-[400px] lg:w-[450px]'
                    />
                </div> 
                <div className='leading-relaxed text-center lg:flex-1 lg:text-start order-1 lg:order-1'>
                    <AboutHeading content='How It Works?' />
                    <div className='text-justify text-sm md:text-[1rem] flex flex-col gap-2'>
                        <p>Book your cup online on our official website.</p>
                        <p>Get your unique serial number instantly.</p>
                        <p>Delivery scheduled directly to your doorstep.</p>
                        <p>Ownership displayed on our website after verification.</p>
                    </div> 
                    <p className='py-4'>Booking Open for One Week Only</p>
                    <p>Once booking closes — these limited edition cups will never be made again. Your serial number is forever unique, your story forever part of TVK history.</p>
                </div>
            </div>
        </Container>
    )
}

export default AboutContent
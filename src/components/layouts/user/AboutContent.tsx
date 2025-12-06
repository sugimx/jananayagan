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
                        {/* <p>Welcome to SUGIMX Private Limited, a company built on passion, pride, and unforgettable
                        celebrations.</p>
                        <p>We are proud to announce our official collaboration with KVN Productions for the Jana Nayagan
                        2026 Movie Promotion - the grand celebration of Thalapathy {"Vijay's"} final fan-based film.
                        This is not just a business project - it is a once-in-a-lifetime moment for every fan.</p>
                        <p>As part of this collaboration, we present the Jana Nayagan 2026 Limited Edition Coffee Cup
                        Collection - a tribute to Vijay sir and his unmatched journey. Each cup is individually numbered
                        from 1 to 27,70,000, giving every fan a unique place in history. From the first buyer to the last,
                        your name and number will forever remain on our platform, celebrating your pride as a fan.</p>
                        <p>Every movement begins with a spark… and this one began with the love of millions.</p> */}
                        <p>What started as a simple wish from a group of fans has grown into a wave — a wave strong enough to unite people across streets, cities, and states. We call ourselves Sugimx Private Limited, not as a company, but as a family of fans driven by one shared emotion: our admiration for Thalapathy Vijay.</p>
                        <p>This project belongs to no party or banner — it rises from the quiet rhythm of countless hearts, all beating toward the same horizon, carried by a shared hope that needs no name.</p>
                        <p>It {"isn't"} a business venture.</p>
                        <p>It is a moment in history, created by fans, for fans.</p>
                        <p>When Thalapathy Vijay announced his political entry, it wasn’t just news — it was a once-in-a-lifetime moment. A moment we wanted to celebrate in a way that stays with us forever. {"That's"} how the idea of the TVK 2026 Limited Edition Coffee Cup Collection was born.</p>
                        <p>Imagine holding a cup that {"isn't"} just a product… but a memory. A symbol. A story.</p>
                        <p>A symbol.</p>
                        <p> A story.</p>
                        <p>
                            Every cup in this collection is individually serialised — from 1 to n — giving each fan a unique place in this movement. No two numbers are the same. Just like no two fans are the same. From the first supporter to the thousandth, every single person becomes a part of this grand celebration.
                        </p>
                        <p>
                            And your number?
                        </p>
                        <p>
                            Your name?
                        </p>
                        <p>
                            It will live on our platform forever — a timeless reminder of your pride, your love, and your presence in this historic moment.
                        </p>
                        <p>This is not about buying a cup.</p>
                        <p>This is about owning a piece of the journey.</p>
                        <p>When fans unite, we don’t just celebrate…</p>
                        <p>We create history.</p>

                        <p>Welcome to the wave.</p>
                        <p>Welcome to the story.</p>
                        <p>Welcome to the TVK 2026 Limited Edition Coffee Cup Collection — made by fans, loved by fans, remembered forever.</p>
                    </div>
                    <Link href='/product' className='border-1 border-[#F5BB0B] py-1 inline-block my-3 px-10 text-sm md:text-lg text-[#F5BB0B]'>Explore</Link>
                </div>
                <div className='lg:flex-[1] flex justify-center lg:justify-end items-center mt-6 lg:mt-0'>
                    <Image
                        src="/tvkillustration.png"
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
                        src="/cup_umber_277.png"
                        width={500}
                        height={500}
                        alt='cup image'
                        // className='w-full md:h-[400px] md:w-[500px] lg:h-[400px] lg:w-[800px]'
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
                        src="/cup_number_5000.png"
                        width={500}
                        height={500}
                        alt='cup image'
                        // className='w-full md:h-[400px] md:w-[350px] lg:h-[400px] lg:w-[450px]'
                    />
                </div>
            </div>
            <div className='w-[80%] mx-auto my-10 flex lg:items-center lg:justify-between flex-col lg:flex-row'>
                <div className='lg:flex-[1] flex justify-center lg:justify-start items-center mt-6 lg:mt-0 order-2 lg:order-1'>
                    <Image
                        src="/cup_number_100000.png"
                        width={500}
                        height={500}
                        alt='cup image'
                        // className='w-full md:h-[400px] md:w-[350px] lg:h-[400px] lg:w-[450px]'
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
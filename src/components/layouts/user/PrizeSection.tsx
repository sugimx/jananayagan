import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'

const PrizeSection = () => {
    return (
        <>

            <Container>
                <div className='max-w-6xl mx-auto w-full'>
                    <div className='px-6 pt-24'>
                        <div className='relative rounded-2xl border border-white/6 bg-gradient-to-br from-[#07070a] to-[#0f1114] p-8 text-white shadow-inner'>
                            <h2 className='text-4xl font-semibold mb-3 text-[#F5BB0B]'>Respect to all TVK Vijay Anna fans</h2>
                            <p className='mb-4 text-white/80'>Thank you for supporting our work and standing with us for our Vijay Anna.</p>

                            <h3 className='text-xl font-semibold mt-2 text-[#F5BB0B]'>Delivery Update</h3>
                            <p className='mb-2 text-white/80'>Delivery for customers who ordered from the beginning until 1 January 2026 will begin from 15 January 2026 and continue until 20 January 2026.</p>
                            <p className='mb-2 text-white/80'>Fans can order their Limited Edition Cup until 11 February 2026, before the winner list is announced.</p>
                            <p className='mb-2 text-white/80'>Orders placed after 2 January 2026 will be delivered later based on allocation.</p>
                            <p className='mb-2 text-white/80'>All deliveries will be completed before the election date is announced.</p>

                            <h3 className='text-xl font-semibold mt-3 text-[#F5BB0B]'>Winner Announcement</h3>
                            <p className='mb-2 text-white/80'>Winner announcements will start on 15 January 2026 and end on 11 February 2026.</p>
                            <p className='mb-2 text-white/80'>Each winner will be selected live by an influencer, and they will directly call the winner.</p>
                            <p className='mb-2 text-white/80'>Prizes will be delivered by the TVK Cup 2026 team.</p>

                            <h3 className='text-xl font-semibold mt-3 text-[#F5BB0B]'>Prize Announcement Dates</h3>
                            <ul className='list-disc list-inside space-y-1 mt-2 text-white/80'>
                                <li>15 January 2026 – 10th Prize: Bullet</li>
                                <li>18 January 2026 – 9th Prize: Bullet</li>
                                <li>21 January 2026 – 8th Prize: Bullet</li>
                                <li>24 January 2026 – 7th Prize: Bullet</li>
                                <li>27 January 2026 – 6th Prize: Bullet</li>
                                <li>30 January 2026 – 5th Prize: Bullet</li>
                                <li>2 February 2026 – 4th Prize: Bullet</li>
                                <li>5 February 2026 – 3rd Prize: Maruti Swift Car</li>
                                <li>8 February 2026 – 2nd Prize: Thar ROZZ</li>
                                <li>11 February 2026 – 1st Prize: ₹27,70,000 Cash Prize</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrizeSection
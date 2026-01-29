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
                            <p className='mb-2 text-white/80'>Delivery for customers who ordered from the beginning until 15 January 2026 will begin from 20 January 2026 and continue until 25 January 2026.</p>
                            <p className='mb-2 text-white/80'>Fans can order their Limited Edition Cup until 25 March 2026, before the winner list is announced.</p>
                            <p className='mb-2 text-white/80'>Orders placed after 15 January 2026 will be delivered later based on allocation.</p>
                            <p className='mb-2 text-white/80'>All deliveries will be completed before the election date is announced.</p>

                            <h3 className='text-xl font-semibold mt-3 text-[#F5BB0B]'>Winner Announcement</h3>
                            <p className='mb-2 text-white/80'>Winner announcements will start on 15 January 2026 and end on 25 March 2026.</p>
                            <p className='mb-2 text-white/80'>Price announcement live will be on every monday at <span className='text-[#F5BB0B] font-semibold text-xl'>8 PM</span></p>
                            <p className='mb-2 text-white/80'>Each winner will be selected live by an influencer, and they will directly call the winner.</p>
                            <p className='mb-2 text-white/80'>Prizes will be delivered by the TVK Cup 2026 team.</p>
                            <p className='mb-2 text-white/80'>Prizes distribution video will be uploaded on every saturday.</p>

                            <h3 className='text-xl font-semibold mt-3 text-[#F5BB0B]'>Prize Announcement Dates</h3>
                            <ul className='list-disc list-inside space-y-1 mt-2 text-white/80'>
                                <li>15 January 2026 – 10th Prize: Royal Enfield 350</li>
                                <li>19 January 2026 – 9th Prize: Royal Enfield 350</li>
                                <li>26 January 2026 – 8th Prize: Royal Enfield 350</li>
                                <li>2 February 2026 – 7th Prize: Royal Enfield 350</li>
                                <li>9 February 2026 – 6th Prize: Royal Enfield 350</li>
                                <li>16 February 2026 – 5th Prize: Royal Enfield 350</li>
                                <li>23 February 2026 – 4th Prize: Royal Enfield 350</li>
                                <li>2 March 2026 – 3rd Prize: Maruti Swift Car</li>
                                <li>9 March 2026 – 2nd Prize: Thar axt</li>
                                <li>16 March 2026 – 1st Prize: ₹27,70,000 Cash Prize</li>
                                <li>25 March 2026 – Surprise Prize</li>
                            </ul>

                            <h3 className='text-xl font-semibold mt-3 text-[#F5BB0B]'>Prize Distribution Video Upload Dates</h3>
                            <ul className='list-disc list-inside space-y-1 mt-2 text-white/80'>
                                <li>21 January 2026 – 10th Prize</li>
                                <li>31 January 2026 – 9th Prize</li>
                                <li>7 February 2026 – 8th Prize</li>
                                <li>14 February 2026 – 7th Prize</li>
                                <li>21 February 2026 – 6th Prize</li>
                                <li>28 February 2026 – 5th Prize</li>
                                <li>7 March 2026 – 4th Prize</li>
                                <li>14 March 2026 – 3rd Prize</li>
                                <li>21 March 2026 – 2nd Prize</li>
                                <li>28 March 2026 – 1st Prize & Surprise Prize</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrizeSection
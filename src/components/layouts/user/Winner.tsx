"use client"

import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { FaTrophy, FaMapMarkerAlt, FaCrown } from 'react-icons/fa'
import { IoCafe } from 'react-icons/io5'

interface WinnerType {
    _id: string;
    name: string;
    cupNumber: string;
    location: string;
    prizePosition?: string;
    announcedDate?: string;
}

// Static winner data
const winnersData: WinnerType[] = [
    {
        _id: '1',
        name: 'Mega Jackpot',
        cupNumber: 'Coming Soon',
        location: 'Future Winner\'s City',
        prizePosition: '1st Prize',
        announcedDate: '2026-03-25'
    },
    {
        _id: '2',
        name: 'Golden Streak',
        cupNumber: 'Coming Soon',
        location: 'Future Winner\'s City',
        prizePosition: '2nd Prize',
        announcedDate: '2026-03-16'
    },
    {
        _id: '5',
        name: 'Varun Raja',
        cupNumber: 'TVK-2102',
        location: 'Kanyakumari',
        prizePosition: '5th Prize',
        announcedDate: '2026-03-02'
    },
    {
        _id: '6',
        name: 'Nithish',
        cupNumber: 'TVK-1394',
        location: 'Trichy',
        prizePosition: '6th Prize',
        announcedDate: '2026-02-09'
    },
    {
        _id: '7',   
        name: 'Jaya Kumar',
        cupNumber: 'TVK-1168',
        location: 'Chennai',
        prizePosition: '7th Prize',
        announcedDate: '2026-02-02'
    },
    {
        _id: '8',
        name: 'Aravinth Raj Kumar',
        cupNumber: 'TVK-470',
        location: 'Coonoor',
        prizePosition: '8th Prize',
        announcedDate: '2026-01-26'
    },
    {
        _id: '9',
        name: 'Sekar',
        cupNumber: 'TVK-263',
        location: 'Kanchipuram',
        prizePosition: '9th Prize',
        announcedDate: '2026-01-19'
    },
    {
        _id: '10',
        name: 'Bala Murugan',
        cupNumber: 'TVK-971',
        location: 'Karumathampatti',
        prizePosition: '10th Prize',
        announcedDate: '2026-01-15'
    },
]

const Winner = () => {
    const winners = winnersData

    return (
        <Container>
            <div className='relative z-10 mx-auto px-5 md:px-10 py-20'>
                <div className='text-center mb-12'>
                    <p className='uppercase tracking-[0.5rem] text-xs md:text-sm text-[#F5BB0B]/80'>Mega Lucky Draw</p>
                    <h1 className='text-3xl md:text-5xl font-black bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,187,11,0.35)]'>
                        Lucky Draw Winners
                    </h1>
                    <p className='mt-4 text-base md:text-lg text-white/70'>
                        Congratulations to all our lucky winners!
                    </p>
                </div>

                {winners.length === 0 ? (
                    <div className='text-center py-20'>
                        <FaTrophy className='text-6xl text-[#F5BB0B]/30 mx-auto mb-4' />
                        <p className='text-xl text-white/70'>Winners will be announced soon!</p>
                        <p className='mt-2 text-sm text-white/50'>Stay tuned for the exciting results</p>
                    </div>
                ) : (
                    <div className='max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {winners.map((winner, index) => (
                            <div
                                key={winner._id}
                                className='relative rounded-3xl border-4 border-[#F5BB0B]/30 bg-white/5 p-6 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(245,187,11,0.3)] hover:border-[#F5BB0B]/50'
                            >
                                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F5BB0B]/15 via-transparent to-transparent pointer-events-none' />
                                
                                {index === 0 && (
                                    <div className='absolute -top-3 -right-3 bg-gradient-to-r from-[#F5BB0B] to-[#FF6B00] rounded-full p-3 shadow-lg'>
                                        <FaCrown className='text-white text-xl' />
                                    </div>
                                )}

                                <div className='relative'>
                                    <div className='flex items-center justify-center mb-4'>
                                        <Image
                                            src={
                                                index === 0 ? '/thar_second_price.png' :
                                                index === 1 ? '/swift_third_prize.png' :
                                                '/bullet_fourth_prize.png'
                                            }
                                            alt={
                                                index === 0 ? 'Thar' :
                                                index === 1 ? 'Swift' :
                                                'Royal Enfield'
                                            }
                                            width={120}
                                            height={120}
                                            className='object-contain'
                                        />
                                    </div>

                                    {winner.prizePosition && (
                                        <div className='text-center mb-3'>
                                            <span className='inline-block px-4 py-1 rounded-full bg-[#F5BB0B]/20 text-[#FFED9F] text-sm font-semibold'>
                                                {winner.prizePosition}
                                            </span>
                                        </div>
                                    )}

                                    <div className='space-y-4'>
                                        <div className='text-center'>
                                            <h3 className='text-2xl font-bold text-white mb-1'>{winner.name}</h3>
                                            {winner.announcedDate && (
                                                <p className='text-xs text-white/50' suppressHydrationWarning>
                                                    Announced: {new Date(winner.announcedDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                                </p>
                                            )}
                                        </div>

                                        <div className='space-y-3 pt-4 border-t border-white/10'>
                                            <div className='flex items-center justify-center gap-3 p-3 rounded-xl bg-white/5'>
                                                <IoCafe className='text-xl text-[#F5BB0B]' />
                                                <div className='text-center'>
                                                    <p className='text-xs text-white/60 uppercase tracking-wider'>Cup Number</p>
                                                    <p className='text-lg font-semibold text-white'>{winner.cupNumber}</p>
                                                </div>
                                            </div>

                                            <div className='flex items-center justify-center gap-3 p-3 rounded-xl bg-white/5'>
                                                <FaMapMarkerAlt className='text-xl text-[#F5BB0B]' />
                                                <div className='text-center'>
                                                    <p className='text-xs text-white/60 uppercase tracking-wider'>Location</p>
                                                    <p className='text-lg font-semibold text-white'>{winner.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Winner

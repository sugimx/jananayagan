import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'

const LimitedEdition = () => {
    return (
        <>
            <Container>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col px-3 lg:flex-row justify-between md:mx-20 items-center py-20'>
                        <div className='flex-1 space-y-6 '>
                            <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60'>
                                <span className='h-2 w-2 rounded-full bg-gradient-to-tr from-[#ff4e4e] to-[#F5BB0B]' />
                                Limited Edition Drop
                            </div>
                            <h1 className='text-[2rem] leading-tight font-semibold md:text-[3.25rem]'>
                                The TVK Cup — <span className='text-[#F5BB0B]'>Crafted for the chosen few</span>
                            </h1>
                            <p className='text-base md:text-lg text-white/70 leading-relaxed'>
                                The TVK Fan Tribute Limited Edition Cup celebrates the unstoppable spirit of our people — unity, leadership, and love for a purpose that connects millions. Each cup carries a unique serial number that links directly to your name on our official site, making your story part of the movement forever.
                            </p>
                            <div className='grid gap-4 md:grid-cols-2'>
                                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                                    <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Total Units</p>
                                    <p className='text-2xl font-semibold text-white'>10,000 Worldwide</p>
                                </div>
                                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                                    <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Serialised</p>
                                    <p className='text-2xl font-semibold text-[#F5BB0B]'>Laser-etched ID</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                                <Link href='/product' className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] px-10 py-3 text-sm font-bold uppercase tracking-[0.3em] text-black shadow-[0_20px_60px_rgba(245,187,11,0.35)] transition hover:-translate-y-0.5'>
                                    Buy now
                                </Link>
                                <p className='text-white/60 text-sm md:text-base'>
                                    Includes authenticity certificate & lifetime listing in the Hall of Fans.
                                </p>
                            </div>
                        </div>

                    <div className='flex-1 relative flex justify-center'>
                        <div className='absolute -inset-1 rounded-[40px] bg-gradient-to-br from-[#FFFFFF]/20 via-transparent to-[#F5BB0B]/30 opacity-40 blur-xl' />
                        <div className='relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0b0a12] via-[#151226] to-[#07050c] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.55)]'>
                            <div className='absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)] opacity-30 pointer-events-none' />
                            <div className='relative flex flex-col items-center gap-6 text-center'>
                                <p className='text-xs uppercase tracking-[0.45em] text-white/60'>Limited to 10K</p>
                                <Image
                                    src='/tvk_cup.png'
                                    width={500}
                                    height={500}
                                    alt="TVK Cup image"
                                    className='drop-shadow-[0_35px_70px_rgba(0,0,0,0.6)]'
                                />
                                <div className='flex items-center gap-4 text-sm uppercase tracking-[0.4em] text-white/60'>
                                    <span>Serial #0028</span>
                                    <span className='h-2 w-2 rounded-full bg-[#F5BB0B]' />
                                    <span>Owner Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default LimitedEdition
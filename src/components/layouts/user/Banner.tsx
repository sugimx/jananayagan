import React from 'react'
import Image from 'next/image'
import LinkComponent from '@/components/ui/user/LinkComponent'

const Banner = () => {
    return (
        <>
            <section className='relative isolate overflow-hidden bg-[#050409] text-white py-16 sm:py-20 lg:py-28'>
                <div className='absolute inset-0 pointer-events-none'>
                    <div className='absolute -top-32 right-8 h-72 w-72 rounded-full bg-[#ff4e4e]/30 blur-3xl' />
                    <div className='absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#1a73e8]/20 blur-[120px]' />
                    <div className='absolute inset-y-0 right-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent' />
                </div>
                <div className='mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10 lg:grid lg:grid-cols-2 lg:items-center'>
                    <div className='space-y-8'>
                        <div className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.3em] text-white/70'>
                            <span className='h-2 w-2 rounded-full bg-gradient-to-tr from-[#ff4e4e] to-[#ffce33]' />
                            Limited Edition
                        </div>

                        <div className='space-y-4'>
                            <p className='text-sm uppercase tracking-[0.4em] text-white/60'>
                                TVK Special Edition
                            </p>
                            <h1 className='text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl'>
                                Celebrate the spirit of victory with every sip
                            </h1>
                            <p className='text-base text-white/70 sm:text-lg'>
                                Crafted for fans, designed for collectors. The TVK Cup combines premium materials with an iconic design inspired by our champion&apos;s journey.
                            </p>
                        </div>

                        <div className='flex flex-wrap items-center gap-6'>
                            <LinkComponent link='/product' content='Buy Now' />
                            <div className='space-y-1 text-sm text-white/70'>
                                <p>• Free Delivery</p>
                                {/* <p>• Delivery starts from pongal</p> */}
                                {/* <p>• Includes collectors sleeve</p> */}
                            </div>
                        </div>

                        {/* <div className='grid grid-cols-2 gap-6 text-white/80'>
                            <div>
                                <p className='text-3xl font-bold'>10K+</p>
                                <p className='text-xs uppercase tracking-widest text-white/60'>Fans United</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold'>100%</p>
                                <p className='text-xs uppercase tracking-widest text-white/60'>Authentic Merch</p>
                            </div>
                        </div> */}
                    </div>

                    <div className='relative flex flex-col items-center justify-center gap-8'>
                        <div className='absolute inset-0 -z-10 rotate-6 rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] via-[#191821] to-[#07070c] shadow-[0_0_120px_rgba(0,0,0,0.55)]' />
                        <div className='relative w-full rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl'>
                            <Image
                                src='/tvk_logo.png'
                                alt='TVK typography'
                                width={500}
                                height={500}
                                className='mx-auto h-auto w-full max-w-[360px]'
                                priority
                            />
                        </div>

                        <div className='w-full rounded-[32px] border border-white/5 bg-gradient-to-br from-[#06050a] to-[#0e1022] px-6 py-10 text-center shadow-inner'>
                            <Image
                                src='/tvk_cup.png'
                                alt='TVK cup'
                                width={500}
                                height={500}
                                className='mx-auto h-auto w-full max-w-[1000px]'
                            />
                            <p className='mt-4 text-sm uppercase tracking-[0.3em] text-white/60'>
                                Collector&apos;s Cup Edition
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
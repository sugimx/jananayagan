import React from 'react'

const VideoSection = () => {
    return (
        <section className='relative isolate overflow-hidden bg-[#050409] text-white py-16 sm:py-20 lg:py-28'>
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute -top-32 right-8 h-72 w-72 rounded-full bg-[#ff4e4e]/30 blur-3xl' />
                <div className='absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#1a73e8]/20 blur-[120px]' />
            </div>
            
            <div className='mx-auto max-w-6xl px-6 md:px-10'>
                <div className='space-y-8'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl mb-4'>
                            TVK Cup Showcase
                        </h2>
                        <p className='text-base text-white/70 sm:text-lg'>
                            Experience the premium quality and design of our exclusive TVK Cup
                        </p>
                    </div>

                    <div className='relative w-full rounded-lg overflow-hidden shadow-2xl'>
                        <iframe
                            src='https://player.cloudinary.com/embed/?cloud_name=dh03yacoi&public_id=TVK_Cup_Compressed_lno9fd&autoplay=true&loop=true&muted=true&controls=false'
                            title='TVK Cup Video'
                            width='100%'
                            height='600'
                            allow='autoplay; fullscreen; picture-in-picture'
                            allowFullScreen
                            className='w-full aspect-video'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection

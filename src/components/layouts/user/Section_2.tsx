import Image from 'next/image'
import React from 'react'
import Container from './Container'

const Section2 = () => {
  return (
    <section className='relative isolate overflow-hidden text-white py-16 md:py-24'>
      <Container>
        <div className='relative rounded-[40px] border border-white/10 px-6 py-10 md:px-12 md:py-16 shadow-[0_45px_120px_rgba(0,0,0,0.65)] overflow-hidden'>
          <div className='absolute -inset-1 rounded-[40px] pointer-events-none' />
          <div className='relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className='flex-1 space-y-6'>
              <p className='text-xs uppercase tracking-[0.5em] text-white/50'>Tribute Beyond A Symbol</p>
              <h1 className='text-[2rem] font-semibold leading-tight md:text-[3.2rem]'>
                TVK Cup — a tribute to the <span className='text-[#F5BB0B]'>spirit that unites us.</span>
              </h1>
              <p className='text-base md:text-lg text-white/70 leading-relaxed'>
                The voice of a movement now rests in your hands. This isn&apos;t just a cup — it&apos;s a mark of identity, pride, and emotion that carries forward the legacy of countless hearts beating together for a cause.
              </p>
              <div className='grid gap-5 md:grid-cols-2'>
                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                  <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Crafted Finish</p>
                  <p className='text-2xl font-semibold text-white'>Mirror Ceramic</p>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                  <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Legacy Seal</p>
                  <p className='text-2xl font-semibold text-[#F5BB0B]'>Signature Crest</p>
                </div>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#ffed9f]/30 via-transparent to-[#ff6b00]/20 blur-2xl opacity-60' />
                <div className='relative rounded-[32px] border border-white/5 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-md'>
                  <Image 
                    src="/tvk_cup.png"
                    width={360}
                    height={360}
                    alt='TVK Cup'
                    className='drop-shadow-[0_25px_55px_rgba(0,0,0,0.65)]'
                  />
                  <p className='mt-6 text-center text-sm uppercase tracking-[0.4em] text-white/60'>Carry the movement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Section2
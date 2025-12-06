import Image from 'next/image'
import React from 'react'
import Container from './Container'

const SocialReposibility = () => {
  return (
    <section className='relative isolate overflow-hidden text-white py-16 md:py-24'>
      <Container>
        <div className='relative rounded-[40px] border border-white/10 px-6 py-10 md:px-12 md:py-16 shadow-[0_45px_120px_rgba(0,0,0,0.65)] overflow-hidden'>
          <div className='absolute -inset-1 rounded-[40px] pointer-events-none' />
          <div className='relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className='flex-1 space-y-6'>
              <p className='text-xs uppercase tracking-[0.5em] text-white/50'>SOCIAL RESPONSIBILITY</p>
              <h1 className='text-[2rem] font-semibold leading-tight md:text-[3.2rem]'>
                A Fan Movement With <span className='text-[#F5BB0B]'>Purpose</span>
              </h1>
              <p className='text-base md:text-lg text-white/70 leading-relaxed'>
                Through this initiative, we stand behind {"India's"} trusted child-development efforts — including Cross-Disability Early Intervention Centres, the {"SPNIWCD's"} Navchetana and Aadharshila early-stimulation programs, and UNICEF-supported Early Childhood Development initiatives. These programs help children receive vital screening, guidance, and support during their most formative years.
              </p>
              <p className='text-base md:text-lg text-white/70 leading-relaxed'>
                A part of this project supports early brain-function screening, child development, and neuro-support awareness. Because every child deserves care at the moment it matters the most.
              </p>
              <p>
                This {"isn't"} just support.
              </p>
              <p>
                It {"isn't"} charity.
              </p>
              <p>It’s a promise — from fans, to the future.</p>
              <div className='grid gap-5 md:grid-cols-2'>
                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                  {/* <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Crafted Finish</p> */}
                  <p className='text-2xl font-semibold text-[#fff]'>Together we celebrate our hero</p>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                  {/* <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Legacy Seal</p> */}
                  <p className='text-2xl font-semibold text-[#F5BB0B]'>Together we support our children.</p>
                </div>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#ffed9f]/30 via-transparent to-[#ff6b00]/20 blur-2xl opacity-60' />
                <div className='relative rounded-[32px] border border-white/5 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-md'>
                  <Image
                    src="/cup_number_27777777.png"
                    width={400}
                    height={400}
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

export default SocialReposibility
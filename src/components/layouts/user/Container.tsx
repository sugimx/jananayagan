import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='relative isolate overflow-hidden text-white'>
      <div className='absolute inset-0 -z-10 shadow-[0_0_120px_rgba(0,0,0,0.55)]' />
      <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute -top-32 right-8 rounded-full bg-[#ff4e4e]/30 blur-3xl' />
          <div className='absolute bottom-0 left-0 rounded-full bg-[#1a73e8]/20 blur-[120px]' />
          {/* <div className='absolute inset-y-0 right-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent' /> */}
      </div>
      <div className='max-w-[1800px] mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Container
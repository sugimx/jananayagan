import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='px-2 bg-[#7a0202] text-white'>
      <div className='max-w-[1800px] mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Container
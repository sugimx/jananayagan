import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='px-2 bg-transparent text-white'>
      <div className='max-w-[1800px] mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Container
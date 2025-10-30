import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='px-2 bg-black text-white max-w-[1800px] mx-auto'>
        {children}
    </div>
  )
}

export default Container
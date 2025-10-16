import React from 'react'

const InputBox = ({ placeHolder, type }: { placeHolder?: string, type?: string }) => {
    return (
        <input 
            type={type}
            placeholder={placeHolder}
            className='w-full h-10 px-2 py-1 border-2 border-[#F5D57A] outline-none rounded-lg text-white md:h-12'
        />
    )
}

export default InputBox
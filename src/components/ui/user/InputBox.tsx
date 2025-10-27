import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

type props = {
    placeHolder?: string
    type?: string
    register: UseFormRegister<any>
    errorMsg?: string
    validationOptions?: RegisterOptions
    name: string
    defaultValue?: string | number
}

const InputBox = ({ placeHolder, type, register, validationOptions, name, errorMsg, defaultValue }: props) => {
    return (
        <input 
            type={type}
            placeholder={placeHolder}
            className='w-full h-10 px-2 py-1 border-2 border-[#F5D57A] outline-none rounded-lg text-white md:h-12'
            defaultValue={defaultValue}
            {
                ...register(name, {
                    required: errorMsg,
                    ...validationOptions
                })
            }
        />
    )
}

export default InputBox
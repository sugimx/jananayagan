import React from 'react'
import { FieldValues, RegisterOptions, UseFormRegister, Path } from 'react-hook-form'

type props<T extends FieldValues> = {
    placeHolder?: string
    type?: string
    register: UseFormRegister<T>
    errorMsg?: string
    validationOptions?: RegisterOptions<T, Path<T>>
    name: Path<T>
    defaultValue?: string | number
}

const InputBox = <T extends FieldValues>({ placeHolder, type, register, validationOptions, name, errorMsg, defaultValue }: props<T>) => {
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
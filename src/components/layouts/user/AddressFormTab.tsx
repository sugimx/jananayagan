import Paragraph from '@/components/ui/user/Paragraph'
import React from 'react'
import { IoClose } from "react-icons/io5"

const InputContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-2'>
            {children}
        </div>
    )
}

const InputLabel = ({ content }: { content: string }) => {
    return (
        <label className='text-[0.8rem] font-semibold text-white md:text-[1rem]'>{content}</label>
    )
}

const Input = ({ placeholder }: { placeholder: string }) => {
    return (
        <input 
            type="text" 
            className='h-10 w-full outline-none border-2 border-[#F5D57A] rounded-md px-2 text-[#808089] md:h-12' 
            placeholder={placeholder}
        />
    )
}

const AddressFormTab = ({ state, setState }: { state: boolean, setState: React.Dispatch<React.SetStateAction<any>> }) => {
    return (
        <div className='text-white absolute top-[-100px] md:top-[-200px] left-0 w-full min-h-[50vh] flex justify-between flex-col items-center'>
            <div className='w-[90%] md:w-[50%] lg:w-[40%] xl:w-[40%] bg-black'>
                <div className='bg-[#F5D57A] h-[80%] rounded-4xl px-4 py-4'>
                    <div className='flex justify-end text-black'>
                        <IoClose onClick={() => setState(!state)} className='cursor-pointer'/>
                    </div>
                    <div className='h-15 flex items-center justify-center text-black text-[1rem] font-semibold'>
                        <h1>New address</h1>
                    </div>
                    <div className='h-auto bg-black flex flex-col gap-4 px-3 py-4 rounded-xl'>
                        <InputContainer>
                            <InputLabel content='Address' />
                            <Input placeholder='Lot number, street name' />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel content='City' />
                            <Input placeholder='Enter Your City' />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel content='District' />
                            <Input placeholder='Enter Your District' />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel content='State' />
                            <select className='h-10 w-full outline-none border-2 border-[#F5D57A] rounded-md px-2 text-[#808089]' >
                                <option className='bg-black'>TamilNadu</option>
                                <option className='bg-black'>Kerala</option>
                            </select>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel content="Recipient's name" />
                            <Input placeholder='Enter Your Address' />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel content='Phone Number' />
                            <Input placeholder='Enter Your Phone Number' />
                        </InputContainer>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <Paragraph content='Save to address book' className='text-[#F5D57A]' />
                        </div>
                    </div>
                    <button className='bg-black w-full py-1 text-[#F5D57A] my-3 rounded-full cursor-pointer md:py-2'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddressFormTab
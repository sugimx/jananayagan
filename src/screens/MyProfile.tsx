import InputBox from '@/components/ui/user/InputBox'
import React from 'react'

const FormContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mb-2 w-full lg:w-[25%]'>
            {children}
        </div>
    )
}

const FormControl = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mb-2'>
            {children}
        </div>
    )
}

const Label = ({ content }: { content: string }) => {
    return (
        <label className='text-sm block mb-1 text-[#F5D57A] md:text-md lg:text-lg'>{content}</label>
    )
}

const MyProfile = () => {
  return (
    <div className='my-4'>
        <div className=''>
            <div className='mb-5'>
                <h1 className='text-[1.2rem] text-[#F5D57A] font-semibold md:text-[1.5rem]'>Edit Profile</h1>
            </div>
            <div className='md:flex md:justify-between md:gap-2'>
                <FormContainer>
                    <FormControl>
                        <Label content="Name" />
                        <InputBox type="text" placeHolder='Enter Your Name....' />
                    </FormControl>
                     <FormControl>
                        <Label content="Email" />
                        <InputBox type="text" placeHolder='Enter Your Email....' />
                    </FormControl>
                </FormContainer>
                <FormContainer>
                    <FormControl>
                        <Label content="Phone" />
                        <InputBox type="text" placeHolder='Enter Your Phone Number....' />
                    </FormControl>
                    <FormControl>
                        <Label content="DOB" />
                        <InputBox type="date" />
                    </FormControl>
                </FormContainer>
                <FormContainer>
                    <FormControl>
                        <Label content="State" />
                        <select className='h-10 w-full outline-none border-2 border-[#F5D57A] rounded-md px-2 text-[#808089]' >
                            <option className='bg-black'>TamilNadu</option>
                            <option className='bg-black'>Kerala</option>
                        </select>
                    </FormControl>
                    <FormControl>
                        <Label content="District" />
                        <InputBox type='text' placeHolder='Enter Your District....' />
                    </FormControl>
                </FormContainer>
            </div>
            <div className='my-5 w-full flex justify-center'>
                <button className='border-2 border-[#F5D57A] px-6 py-2 text-sm text-[#F5D57A] rounded-md font-semibold md:text-md cursor-pointer'>Save Changes</button>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default MyProfile
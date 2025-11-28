import React from 'react'

type props = {
    children: React.ReactNode
    content: string
}

const ProfileDetails = ({ children, content }: props) => {
    return (
        <>
            <div className='flex py-3 items-center text-black gap-1 text-sm md:text-md'>
                {children}
                <span className='font-bold'>{content}</span>
            </div>
        </>
    )
}

export default ProfileDetails
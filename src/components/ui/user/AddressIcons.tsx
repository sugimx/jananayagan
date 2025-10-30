import React from 'react'
import { IconType } from 'react-icons'

type props = {
    Icon: IconType
}

const AddressIcons = ({ Icon }: props) => {
    return (
        <>
            <Icon className='px-2 py-2 text-[2rem] text-black' />
        </>
    )
}

export default AddressIcons
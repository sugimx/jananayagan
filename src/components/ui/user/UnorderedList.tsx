import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"

type Props = {
    content: string
}

const UnorderedList = ({ content }: Props) => {
  return (
    <ul className='mb-4'>
        <li className='flex gap-2 text-sm md:text-lg'>
            <MdKeyboardArrowRight className='text-[#F5D57A] text-xl' />
            {content}
        </li>
    </ul>
  )
}

export default UnorderedList
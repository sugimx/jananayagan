import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

type Props =  {
    heading: string
    paragraph: string
}

const ErrorContent = ({ heading, paragraph }: Props) => {
  return (
   <div className='w-full h-50 flex flex-col justify-center items-center'>
        <Heading content={heading} />
        <Paragraph content={paragraph} />
    </div>
  )
}

export default ErrorContent
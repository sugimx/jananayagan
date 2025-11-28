import React from 'react'

const Paragraph = ({content, className}: { content:string, className?: string }) => {
    return (
        <p className={`text-[0.9rem] md:text-md ${className}`}>{content}</p>
    )
}

export default Paragraph
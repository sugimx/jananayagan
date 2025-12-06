import React from 'react'

const ErrorMessage = ({ message }: { message?: string }) => {
    return (
        <div className='text-[#F5BB0B] my-1'>
            {message}
        </div>
    )
}

export default ErrorMessage
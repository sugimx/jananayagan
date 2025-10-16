import React from 'react'

const ErrorMessage = ({ message }: { message?: string }) => {
    return (
        <div className='text-red-700'>
            {message}
        </div>
    )
}

export default ErrorMessage
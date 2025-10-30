import React from 'react'

const SuccessMessage = ({ message }: { message?: string }) => {
    return (
        <div className='text-green-700 my-2'>
            {message}
        </div>
    )
}

export default SuccessMessage
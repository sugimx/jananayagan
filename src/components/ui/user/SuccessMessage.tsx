import React from 'react'

const SuccessMessage = ({ message }: { message?: string }) => {
    return (
        <div className='text-[#F5BB0B] my-2'>
            {message}
        </div>
    )
}

export default SuccessMessage
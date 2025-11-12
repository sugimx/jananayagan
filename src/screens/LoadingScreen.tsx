import React from 'react'

const LoadingScreen = () => {
    return (
        <div className='absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-10 bg-[#000]'>
            <span className="loading"></span>
        </div>
    )
}

export default LoadingScreen
import React from 'react'

type props = {
    children: React.ReactNode
    className?: string
}

const AddressFormContainer = ({ children, className }: props) => {
    return (
        <>
            <div className={`bg-white flex gap-2 h-10 items-center justify-center rounded-sm mt-2 ${className ?? className}`}>
                {children}
            </div>
        </>
    )
}

export default AddressFormContainer
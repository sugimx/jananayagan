"use client"

import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import CashfreeButton  from '@/components/layouts/user/CashfreeButton';

const AddressForm = () => {
    const { token, user } = useAuth();

    if (!token || !user) {
        return (
            <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%]'>
                <div className='text-center text-white'>
                    <p className='text-lg mb-4'>Please login to continue</p>
                </div>
            </div>
        );
    }

    return (
        <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%]'>
            <div className='flex flex-col items-center justify-center gap-6'>
                <div className='text-center text-white'>
                    <h1 className='bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] text-transparent bg-clip-text text-2xl font-semibold mb-4 md:text-4xl'>
                        TVK Limited Edition Cup
                    </h1>
                    <p className='text-lg mb-2'>Price: ₹320</p>
                    <p className='text-sm text-gray-300 mb-6'>Click below to proceed with payment</p>
                </div>
                <CashfreeButton/>
            </div>
        </div>
    );
}

export default AddressForm
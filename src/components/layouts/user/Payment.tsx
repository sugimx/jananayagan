"use client"

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import CashfreeButton  from '@/components/layouts/user/CashfreeButton';
import { useRouter } from 'next/navigation';

const AddressForm = () => {
    const { token, user } = useAuth();
    const [selectedState, setSelectedState] = useState<string>('');
    const router = useRouter();

    const getPrice = () => {
        switch (selectedState) {
            case 'tamilnadu':
                return 30;
            case 'kerala':
                return 50;
            case 'others':
                return 100;
            default:
                return 0;
        }
    };

    if (!token || !user) {
        return (
            <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%] flex items-center justify-center'>
                <div className='text-center text-white'>
                    <p className='text-lg mb-6'>Please login to continue</p>
                    <button
                        onClick={() => router.push('/login')}
                        className='px-8 py-3 bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity'
                    >
                        Go to Login
                    </button>
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
                    
                    <div className='mb-6'>
                        <label htmlFor='state' className='block text-sm text-gray-300 mb-2'>Select Your State</label>
                        <select
                            id='state'
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className='w-full max-w-md px-4 py-2 rounded-lg bg-transparent border border-[#F5BB0B] text-white outline-none focus:ring-2 focus:ring-[#F5BB0B]'
                        >
                            <option value='' className='bg-black'>Select State</option>
                            <option value='tamilnadu' className='bg-black'>Tamil Nadu</option>
                            <option value='kerala' className='bg-black'>Kerala</option>
                            <option value='others' className='bg-black'>Others</option>
                        </select>
                    </div>

                    {selectedState && (
                        <>
                            <p className='text-lg mb-2'>Price : ₹ 320 + {getPrice()} (Delivery charge)</p>
                            <p className='text-sm text-gray-300 mb-6'>Click below to proceed with payment</p>
                        </>
                    )}
                </div>
                {selectedState && <CashfreeButton state={selectedState} />}
            </div>
        </div>
    );
}

export default AddressForm
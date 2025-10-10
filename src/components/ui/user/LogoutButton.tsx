'use client';

import React from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { AiOutlineUser } from "react-icons/ai"

const LogoutButton: React.FC = () => {
  const { logout, user } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) return null;

  return (
    <div className='h-[80px] flex justify-between items-center border-b-1 border-[#F5D57A]'>
        <div className='flex justify-center items-center gap-2'>
           <Link href="/profile" className='text-sm text-[#F5D57A] border-[1px] border-[#F5D57A] p-2 rounded-full relative cursor-pointer'>
                <AiOutlineUser />
            </Link>
            <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
            >
                Logout
            </button>
        </div>
    </div>
    // <div className="flex items-center gap-4">
    //   <span className="text-[#F5D57A] text-sm">
    //     <Link href="/profile" className='text-sm text-[#F5D57A] border-[1px] border-[#F5D57A] p-2 rounded-full relative cursor-pointer'>
    //         <AiOutlineUser />
    //     </Link>
    //   </span>
    //   <button
    //     onClick={handleLogout}
    //     className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
    //   >
    //     Logout
    //   </button>
    // </div>
  );
};

export default LogoutButton;


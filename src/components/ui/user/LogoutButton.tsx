'use client';

import React from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
  const { logout, user } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) return null;

  return (
      <button
          onClick={handleLogout}
          className="bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B] text-white px-5 py-1 rounded text-sm transition-colors cursor-pointer"
      >
          Logout
      </button>
  )
}

export default LogoutButton;


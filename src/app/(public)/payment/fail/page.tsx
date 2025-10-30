"use client"

import { useRouter, useSearchParams } from 'next/navigation'

export default function PaymentFailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason') || searchParams.get('code');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-[90%] max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg p-8">
          <div className="text-red-500 text-6xl mb-4">✗</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Failed</h2>
          <p className="text-gray-600 mb-2">Payment failed or was cancelled.</p>
          {reason && <p className="text-gray-500 mb-6">Reason: {reason}</p>}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => router.push('/')}
              className="bg-[#F5D57A] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#E6C86A] transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push('/payment')}
              className="bg-black text-white px-6 py-2 rounded-md font-semibold border border-black hover:opacity-80 transition-opacity"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



"use client"

import { useRouter, useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('tx');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-[90%] max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg p-8">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Successful!</h2>
          {transactionId && (
            <p className="text-gray-600 mb-2">Transaction ID: {transactionId}</p>
          )}
          <p className="text-gray-600 mb-4">Your order has been confirmed.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
            <p className="text-blue-800 font-semibold mb-1">🚚 Delivery Timeline</p>
            <p className="text-blue-700">Your cup will be delivered in <span className="font-bold">5 to 10 days</span></p>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => router.push('/')}
              className="bg-[#F5BB0B] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#E6C86A] transition-colors"
            >
              Back to Home
            </button>
            {/* <button
              onClick={() => router.push('/order')}
              className="bg-black text-white px-6 py-2 rounded-md font-semibold border border-black hover:opacity-80 transition-opacity"
            >
              View Orders
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

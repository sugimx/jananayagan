"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

const PaymentCallbackPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { token } = useAuth();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const handlePaymentCallback = async () => {
            try {
                // Get payment status from URL parameters
                const paymentStatus = searchParams.get('status');
                const transactionId = searchParams.get('transactionId');
                const orderId = searchParams.get('orderId');

                if (paymentStatus === 'SUCCESS') {
                    setStatus('success');
                    setMessage('Payment completed successfully! Your order has been confirmed.');
                    
                    // Redirect to order confirmation page after 3 seconds
                    setTimeout(() => {
                        router.push('/order');
                    }, 3000);
                } else {
                    setStatus('error');
                    setMessage('Payment failed or was cancelled. Please try again.');
                    
                    // Redirect to payment page after 5 seconds
                    setTimeout(() => {
                        router.push('/payment');
                    }, 5000);
                }
            } catch (error) {
                console.error('Error handling payment callback:', error);
                setStatus('error');
                setMessage('An error occurred while processing your payment. Please contact support.');
            }
        };

        handlePaymentCallback();
    }, [searchParams, router]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-[90%] max-w-md mx-auto text-center">
                <div className="bg-white rounded-lg p-8">
                    {status === 'loading' && (
                        <>
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F5D57A] mx-auto mb-4"></div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Payment...</h2>
                            <p className="text-gray-600">Please wait while we verify your payment.</p>
                        </>
                    )}

                    {status === 'success' && (
                        <>
                            <div className="text-green-500 text-6xl mb-4">✓</div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Successful!</h2>
                            <p className="text-gray-600 mb-4">{message}</p>
                            <p className="text-sm text-gray-500">Redirecting to your orders...</p>
                        </>
                    )}

                    {status === 'error' && (
                        <>
                            <div className="text-red-500 text-6xl mb-4">✗</div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Failed</h2>
                            <p className="text-gray-600 mb-4">{message}</p>
                            <button 
                                onClick={() => router.push('/payment')}
                                className="bg-[#F5D57A] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#E6C86A] transition-colors"
                            >
                                Try Again
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentCallbackPage;

'use client';
import { useEffect, useState } from "react";

interface PayButtonProps {
  sessionId?: string;
}

declare global {
  interface Window {
    Cashfree?: any;
  }
}

const PayButton: React.FC<PayButtonProps> = ({ sessionId }) => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "cashfree-sdk-script";
    if (document.getElementById(scriptId)) {
      setSdkLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.id = scriptId;
    script.onload = () => setSdkLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handlePay = () => {
    if (!sdkLoaded || !window.Cashfree) {
      console.error("Cashfree SDK not loaded yet");
      return;
    }

    const cashfree = window.Cashfree({ mode: "sandbox" }); // or "production"
    cashfree.checkout({
      paymentSessionId: sessionId,
      redirectTarget: "_self",  // opens in same tab
      returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/callback`,
    });
  };

  return (
    <button
        onClick={handlePay}
        disabled={!sdkLoaded || !sessionId}
        className={`w-full py-2 my-3 text-sm text-black uppercase font-medium cursor-pointer ${!sdkLoaded || !sessionId
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B] text-white hover:bg-[#7a0202] hover:text-white'
        }`}
    >
      Pay Now
    </button>
  );
};

export default PayButton;

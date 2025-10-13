import React from 'react';
import Container from '@/components/layouts/user/Container';

const ReturnPolicy = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5D57A]">
          Return, Refund & Cancellation Policy
        </h1>
        
        <div className="space-y-6 text-white leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">General Policy</h2>
            <p>
              All sales made through <strong>Jananayagan</strong> are final. Due to the nature of limited-edition and pre-booked products, orders once confirmed cannot be cancelled or refunded except in cases of proven product defect or wrong item dispatch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Return Request Process</h2>
            <p>
              Requests for return must be initiated within <strong>48 hours of product delivery</strong> by contacting our customer support at{' '}
              <a href="mailto:support@jananayagan.com" className="text-[#F5D57A] hover:underline">
                support@jananayagan.com
              </a>{' '}
              with valid proof of issue (unboxing video and order number mandatory).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Refund Processing</h2>
            <p>
              Upon verification, replacement or refund (as applicable) will be processed at the sole discretion of the Company. Refunds, if approved, shall be credited within <strong>7–10 working days</strong> to the original payment source.
            </p>
            <p className="mt-4">
              The Company reserves the right to reject any return/refund request if the product shows signs of usage, tampering, or damage caused post-delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Non-Refundable Cases</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customer negligence</li>
              <li>Wrong or incomplete address provided</li>
              <li>Non-collection of the parcel</li>
              <li>Product showing signs of usage or tampering</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Cancellation Before Shipment</h2>
            <p>
              In case of order cancellation before shipment, a processing fee of <strong>10%</strong> may be deducted.
            </p>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              <strong>Final Authority:</strong> The Company&apos;s decision in all such matters shall be final and binding.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default ReturnPolicy;
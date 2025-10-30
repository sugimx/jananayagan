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
            <h2 className="text-2xl font-semibold text-white mt-4 underline mb-1">General Policy</h2>
            <ul>
              <li>We aim to ensure a satisfactory shopping experience for every customer.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white mt-4 underline mb-1">Returns</h2>
            <p>
                Returns are accepted only for defective or damaged products. Customers must inform us within 48 hours of receiving the order, with proof (unboxing video and photo).
            </p>
            <h2 className="text-2xl font-semibold text-white mt-4 underline mb-1">Refunds</h2>
            <p>If a refund is approved after verification, it will be processed within 7–10 business days to the original payment source. Shipping charges are non-refundable.</p>
            <h2 className="text-2xl font-semibold text-white mt-4 underline mb-1">Cancellations</h2>
            <p>Orders can be cancelled before shipment only. Once dispatched, orders cannot be cancelled. A 10% processing fee may apply for cancellations.</p>
          </section>

          <section>
            <p>
              The Company reserves the right to refuse return or refund requests that do not meet policy conditions.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default ReturnPolicy;
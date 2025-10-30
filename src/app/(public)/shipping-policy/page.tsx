import React from 'react';
import Container from '@/components/layouts/user/Container';

const ShippingPolicy = () => {
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5D57A]">
                    Shipping & Delivery Policy
                </h1>

                <div className="space-y-6 text-white leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2 mt-3">
                        <li>We strive to deliver all confirmed orders promptly and safely.</li>
                        <li>Orders are typically processed within 3-5 business days after payment confirmation. Delivery time may vary depending on product availability, courier efficiency, and your location.</li>
                        <li>We use reliable third-party courier partners for all deliveries. Customers will receive tracking details by email or SMS once their order is shipped.</li>
                        <li>If you are unavailable at the time of delivery, the courier will reattempt delivery or contact you for alternate arrangements.</li>
                        <li>Delivery timelines are indicative and not guaranteed. Delays due to unforeseen circumstances (weather, customs, logistics issues, etc.) do not make the Company liable for compensation.</li>
                        <li>Once an order is shipped, ownership and risk pass to the customer. </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default ShippingPolicy;
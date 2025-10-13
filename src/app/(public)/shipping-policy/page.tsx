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
                    <p>
                        All sales made through <strong>Jananayagan</strong> are final. Due to the nature of limited-edition and pre-booked products, orders once confirmed cannot be cancelled or refunded except in cases of proven product defect or wrong item dispatch.
                    </p>

                    <p>
                        The Company endeavors to dispatch all confirmed orders within  first week of January 2026, unless otherwise stated. The estimated timelines are indicative only and may vary due to external factors such as courier delays, customs clearance, natural calamities, or operational constraints.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Tracking & Notifications</h2>
                        <p>
                            We use trusted courier and logistics partners for all shipments. Customers will receive an email/SMS notification containing tracking details once the order is shipped.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Delivery Address</h2>
                        <p>
                            All deliveries shall be made to the address provided by the customer at the time of booking. It is the customer&apos;s responsibility to ensure that delivery information is accurate. Failed deliveries due to incomplete or incorrect addresses will be reattempted subject to additional charges.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Risk & Liability</h2>
                        <p>
                            Risk of loss passes to the customer upon dispatch of goods from our facility. The Company shall not be liable for delays or loss once goods are handed over to the courier partner.
                        </p>
                    </section>

                    <section className="mt-8 pt-6 border-t border-gray-300">
                        <p className="text-sm text-gray-600">
                            <strong>Note:</strong> This policy is subject to change without prior notice. Continued use of our services constitutes your agreement to this policy.
                        </p>
                    </section>
                </div>
            </div>
        </Container>
    );
};

export default ShippingPolicy;
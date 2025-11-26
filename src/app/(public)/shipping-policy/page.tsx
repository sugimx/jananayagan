import React from 'react';
import Container from '@/components/layouts/user/Container';

const ShippingPolicy = () => {
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5BB0B]">
                    Shipping & Delivery Policy
                </h1>

                {/* <div className="space-y-6 text-white leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2 mt-3">
                        <li>We strive to deliver all confirmed orders promptly and safely.</li>
                        <li>Orders are typically processed within 3-5 business days after payment confirmation. Delivery time may vary depending on product availability, courier efficiency, and your location.</li>
                        <li>We use reliable third-party courier partners for all deliveries. Customers will receive tracking details by email or SMS once their order is shipped.</li>
                        <li>If you are unavailable at the time of delivery, the courier will reattempt delivery or contact you for alternate arrangements.</li>
                        <li>Delivery timelines are indicative and not guaranteed. Delays due to unforeseen circumstances (weather, customs, logistics issues, etc.) do not make the Company liable for compensation.</li>
                        <li>Once an order is shipped, ownership and risk pass to the customer. </li>
                    </ul>
                </div> */}
                <div>
                    <h1 className='font-bold inline-block'>1. Order Processing Time</h1>

<p>All orders are processed within 1-3 business days.

Orders placed on weekends or holidays will be processed on the next business day.

Processing time may increase during peak seasons, offers, or high-volume sales.</p>

<h1 className='font-bold inline-block'>2. Shipping Methods & Delivery Time</h1>
<p>
We offer standard courier shipping across India.

Estimated Delivery Time:

Local & Within Tamil Nadu: 2-5 business days

South India: 3-7 business days

Rest of India: 5-10 business days

Delivery timelines are estimates and may vary due to courier delays, weather, or unforeseen events.</p>

<h1 className='font-bold inline-block'>3. Shipping Charges</h1>
<p>
Shipping fees are calculated at checkout based on your location and order weight.

Free shipping may be offered during promotions or on orders that qualify for specific conditions.</p>

<h1>4. Order Tracking</h1>

<p>Once your order is shipped, you will receive an email/SMS with the tracking ID.

You can use this tracking ID to monitor your package through the {"courier's"} website.</p>

<h1 className='font-bold inline-block'>5. Incorrect or Incomplete Address</h1>

<p>Customers are responsible for providing accurate delivery details.

SUGIMX PRIVATE LIMITED is not responsible for:

Delays caused by incorrect addresses

Lost packages due to incomplete or wrong shipping information

If the package returns to us due to an incorrect address, re-shipping charges will apply.</p>

<h1 className='font-bold inline-block'>6. Delayed or Lost Shipments</h1>

<p>While we ensure timely dispatch:

Delays caused by courier services are outside our control

Lost shipments will be investigated with the courier; replacements will be issued only after confirmation</p>

<h1 className='font-bold inline-block'>7. International Shipping</h1>
<p>
Currently, we do not offer international shipping.
Orders are shipped within India only.</p>

<h1 className='font-bold inline-block'>8. Damaged Packages</h1>
<p>
If your order arrives damaged:

Take photos/videos of the package

Contact us within 24–48 hours of delivery

Replacement or refund will be processed after verification
</p>
<h1 className='font-bold inline-block'>
9. Delivery Attempts</h1>

<p>Couriers may attempt delivery 2–3 times.
If the package is returned to us due to unsuccessful delivery attempts, re-shipping charges will apply.</p>

<h1>10. Shipping policy</h1>
<p>
    Product Will be delivered within 5-7 days after order are processed
</p>
<p>
    All orders are processed within 1–2 business days.
</p>
<p>
Once processed, your product will be delivered within 5–7 business days.
</p>
                </div>
            </div>
        </Container>
    );
};

export default ShippingPolicy;
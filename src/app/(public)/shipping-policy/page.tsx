import React from 'react';
import Container from '@/components/layouts/user/Container';

const ShippingPolicy = () => {
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5BB0B]">
                    Shipping & Delivery Policy
                </h1>


                <div>
                    <p>
                        The orders for the user are shipped through registered domestic courier companies and/or speed post
                        only. Orders are shipped within 7 days from the date of the order and/or payment or as per the delivery
                        date agreed at the time of order confirmation and delivering of the shipment, subject to courier company /
                        post office norms. Platform Owner shall not be liable for any delay in delivery by the courier company /
                        postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of
                        purchase. Delivery of our services will be confirmed on your email ID as specified at the time of
                        registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be),
                        the same is not refundable.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default ShippingPolicy;
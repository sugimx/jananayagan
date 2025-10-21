import React from 'react';
import Container from '@/components/layouts/user/Container';

const ContactUs = () => {
    return (
        <Container>
            <div className="max-w-3xl mx-auto py-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5D57A]">
                    Contact Us
                </h1>

                <p className="text-white text-center mb-10">
                    Have questions or need help? Feel free to reach out to us!
                </p>

                <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-white space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold">Email</h2>
                        <p>jananayagan.info@gmail.com</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Phone</h2>
                        <p>+91 8903301652</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Address</h2>
                        <p>Jananayagan Cup, Kottar, Nagercoil 629002, Kanniyakumari, Tamil Nadu, India</p>
                    </div>
                </div>

               
            </div>
        </Container>
    );
};

export default ContactUs;

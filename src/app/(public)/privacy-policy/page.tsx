import React from 'react';
import Container from '@/components/layouts/user/Container';

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5D57A]">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-white leading-relaxed">
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>SUGIMX Private Limited</strong> values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.</li>
            <li>We may collect information such as your name, email address, phone number, delivery address, and payment details to process your order and provide customer support.</li>
            <li>Your data is used only for legitimate business purposes — such as billing, shipping, technical support, marketing updates (with your consent), and compliance with Indian law.</li>
            <li>We do not sell or rent your personal data to any third party. However, information may be shared with delivery partners, payment gateways, or legal authorities when required.</li>
            <li>We follow industry-standard practices to protect your data from unauthorized access or disclosure. However, we are not responsible for security breaches beyond our control.</li>
            <li>By using our website, you consent to the collection and use of your information as described in this Policy.</li>
            <li>We aim to deliver all orders within 5 to 7 days from the date of order.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
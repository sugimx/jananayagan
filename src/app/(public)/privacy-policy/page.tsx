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
          <p>
          {`This Privacy Policy ("Policy") governs the manner in which `}<strong>Jananayagan</strong>{` ("Company", "we", "our", "us") collects, uses, maintains, and discloses information collected from users ("you", "your", "User") of our website, applications, and other services ("Platform").`}
          </p>

          <p>
            By accessing or using the Platform, you signify your consent to the collection and use of your information in accordance with this Policy.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Personal Information</h3>
            <p>
              We may collect personal data such as your name, address, email ID, phone number, payment details, and transaction information when you register, place an order, or interact with our services. Such data is used strictly for legitimate business purposes including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Processing transactions and orders</li>
              <li>Order delivery and logistics</li>
              <li>Customer support and communication</li>
              <li>Compliance with applicable laws and regulations</li>
              <li>Improving our services and user experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Non-Personal Information</h3>
            <p>
            We may collect non-personal information such as browser type, device information, IP address, and usage patterns to improve our Platform&apos;s functionality and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send promotional emails and marketing communications (with your consent)</li>
              <li>Improve our Platform, products, and services</li>
              <li>Detect and prevent fraud and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Data Sharing & Disclosure</h2>
            <p>
              We do not sell or rent user information. However, your data may be shared on a need-to-know basis with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Logistics Partners:</strong> To facilitate order delivery</li>
              <li><strong>Payment Gateways:</strong> To process transactions securely</li>
              <li><strong>Service Providers:</strong> Who assist in operating our Platform</li>
              <li><strong>Auditors:</strong> For financial and operational audits</li>
              <li><strong>Government Authorities:</strong> When required by law or legal process</li>
              <li><strong>Affiliates:</strong> Where such disclosure is required for lawful processing</li>
            </ul>
            <p className="mt-3">
              All third parties are contractually obligated to maintain the confidentiality of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Data Security</h2>
            <p>
              The Company employs reasonable technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Secure socket layer (SSL) encryption for data transmission</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data privacy and security</li>
            </ul>
            <p className="mt-3">
              However, by using this Platform, you acknowledge that internet transmissions are not completely secure, and we cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our Platform. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our Platform</li>
              <li>Improve Platform performance and functionality</li>
              <li>Deliver personalized content and advertisements</li>
            </ul>
            <p className="mt-3">
              You can control cookie preferences through your browser settings, but disabling cookies may affect Platform functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing (where applicable)</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:support@jananayagan.com" className="text-[#F5D57A] hover:underline">
                support@jananayagan.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our Platform is not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">9. Changes to This Policy</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting to the Platform. We encourage you to review this Policy periodically.
            </p>
            <p className="mt-3">
              Continued use of our services constitutes your agreement to this Policy and any subsequent updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">10. Contact Us</h2>
            <p>
              For questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 space-y-1">
              <p><strong>Email:</strong>{' '}
                <a href="mailto:support@jananayagan.com" className="text-[#F5D57A] hover:underline">
                  support@jananayagan.com
                </a>
              </p>
              <p><strong>Company:</strong> Jananayagan</p>
            </div>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> January 2025
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
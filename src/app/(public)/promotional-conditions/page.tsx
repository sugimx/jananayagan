import React from 'react';
import Container from '@/components/layouts/user/Container';

const PromotionalConditions = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5BB0B]">
          Promotional Lucky Draw Disclaimer
        </h1>

        <p className='mb-8'>SUGIMX PRIVATE LIMITED (“the Company”) is conducting a Promotional Lucky Draw purely as part of its TVK Fan Tribute Limited Edition Cup marketing campaign.</p>
        
        <div className="space-y-6 text-white leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mb-4">1. No Extra Fee:</h2>
            <p>Participation in this lucky draw is completely free and is automatically applicable to every valid purchase of the TVK Fan Tribute Cup. No separate payment or registration fee is required for participation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">2. Nature of Offer:</h2>
            <p>
              This activity is conducted solely for promotional and fan engagement purposes. It shall not be treated as a lottery, gambling, or prize scheme under any applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">3. Eligibility:</h2>
            <p>
                All customers who have successfully placed an order through the official website within the booking period are eligible for automatic entry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">4. Selection & Announcement:</h2>
            <p>
              Winners will be chosen through a fair, computer-based random selection process and announced on the Company’s official website and social media handles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">5. Compliance with Law:</h2>
            <p>
              The draw is conducted in accordance with the Tamil Nadu Prize Schemes (Prohibition) Act, 1979 and Lotteries (Regulation) Act, 1998.
            </p>
            <p className="mt-3">
              The Company confirms that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The offer is attached to the sale of a genuine product.</li>
              <li>No person pays separately for participation.</li>
              <li>The activity is for brand appreciation and fan recognition only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">6. Prize Distribution:</h2>
            <p>
              The Company reserves the right to verify participant eligibility before prize distribution. Winners will be contacted via their registered mobile number or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">7. Company Rights:</h2>
            <p>
              The Company reserves the right to modify, reschedule, or withdraw this promotional lucky draw at its sole discretion without prior notice, without incurring any liability.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default PromotionalConditions;
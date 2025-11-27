import React from 'react';
import Container from '@/components/layouts/user/Container';

const TermsConditions = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5BB0B]">
          Terms and Conditions
        </h1>

        <div className="space-y-6 text-white leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">1. Terms & Condition</h2>
            <p>Terms & Conditions Governing the Booking, Purchase, Delivery, and Use of Limited Edition “TVK 2026” Coffee Cups</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">1. Booking, Consideration, and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>1.1. All bookings shall be deemed confirmed only upon receipt of full consideration, dulyremitted through the payment channels notified on the official booking interface of SUG Private Limited (“the Company”).</li>
              <li>1.2. Bookings once effected shall be irrevocable and non-cancellable by the purchaser under
              any circumstance whatsoever, and no claim for refund, chargeback, or set-off shall be
              entertained except in the sole and absolute discretion of the Company in instances of unilateral
              cancellation initiated by the Company.</li>
              <li>1.3.The purchaser, upon remittance of booking consideration, acknowledges that such payment
              constitutes final settlement of the transaction, save and except statutory levies payable to
              Government authorities, if any</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">2. Product Specification and Variance</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>2.1. Each coffee cup forms part of a finite and limited-edition series, allocated distinctive serial
              identifiers, the intellectual property and design rights in respect of which remain vested
              exclusively with the Company.</li>
              <li>2.2. The Company disclaims any liability in respect of minor deviations in shade, finish, texture,
              or appearance of the product as displayed in marketing material vis-à-vis the final delivered
              article, such variance being commercially customary.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">3. Delivery, Allocation, and Receipt</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>3.1. Delivery of the products shall be effected exclusively through logistics partners or delivery
              service providers engaged by the Company.</li>
              <li>3.2. The anticipated delivery window shall fall within the first calendar week of January 2026,
              provided however that such schedule is indicative only and subject to alteration, deferment, or
              rescheduling at the sole discretion of the Company without incurring liability.</li>
              <li>3.3. Purchasers shall provide a complete and accurate delivery address at the time of booking.
              Any failure of delivery arising from incorrect address, absence of recipient, refusal to accept, or
              other causes not attributable to the Company shall operate as constructive delivery and no
              claim for replacement or refund shall lie.</li>
              <li>3.4. Risk of loss or damage in transit shall pass to the purchaser upon handover of the goods to
              the logistics provider; however, in cases of demonstrable damage evident upon delivery, the
              {"Company's"} liability shall be limited to replacement, subject to Clause 6.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">4. Public Disclosure of Booking Particulars</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>4.1. As a condition precedent to booking, purchasers expressly consent to the publication of
              their name, booking sequence number, and related non-sensitive details upon the official
              website/app of the Company for the purposes of transparency, auditing, and promotional
              representation.</li>
              <li>4.2. The Company undertakes to withhold disclosure of sensitive identifiers such as Aadhaar
              numbers, phone numbers, or email addresses, save where required by lawful authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">5. Lucky Draw and Promotional Scheme</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>5.1. Each valid booking automatically constitutes eligibility for participation in a promotional
              reward scheme (“Lucky Draw”) organized by the Company as a goodwill gesture to its
              customers.</li>
              <li>5.2. The selection of winners shall be undertaken through a computerized randomization
              process conducted on the {"Company's"} official online platform, and the results shall be published
              exclusively on the {"Company's"} website.</li>
              <li>5.3. The declaration of winners by the Company shall be final, binding, and conclusive, and
              shall not be open to contestation, appeal, or review in any forum whatsoever.</li>
              <li>5.4. The prizes, benefits, or rewards conferred through such scheme are personal to the
              selected customers, and are strictly non-assignable, non-transferable, and non-exchangeable.</li>
              <li>5.5. This scheme is purely a voluntary promotional activity and shall not, under any construction,
              be deemed a lottery, gambling, wagering contract, or any activity prohibited by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">6. Return, Replacement, and Exclusions</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>6.1. No right of return shall accrue to the purchaser post-delivery, save in instances where
              demonstrable manufacturing defects or damage during transit are evidenced
              contemporaneously and reported within 48 hours of receipt.</li>
              <li>6.2. In such event, the {"Company's"} sole obligation shall be limited to replacement of the
              defective article with another item of like nature, subject to stock availability.</li>
              <li>6.3. Monetary refund shall under no circumstances be exigible, and claims for indirect,
              consequential, or incidental losses are expressly excluded.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#F5BB0B] mt-8 mb-4">7. Reservation of Rights by the Company</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>7.1. The Company reserves an unfettered right to modify, suspend, reschedule, or terminate the
              booking and delivery program at its discretion in the event of force majeure, regulatory
              intervention, or logistical exigencies.</li>
              <li>7.2. The Company further reserves the unilateral right to amend or modify these Terms &
              Conditions without prior notice, and the continued participation of purchasers shall constitute
              deemed acceptance thereof</li>
            </ul>
          </section>

        </div>
      </div>
    </Container>
  );
};

export default TermsConditions;
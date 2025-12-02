import React from 'react';
import Container from '@/components/layouts/user/Container';

const ReturnPolicy = () => {
  return (
    <Container>
       <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F5BB0B]">
          Return, Refund & Cancellation Policy - SUGIMX Private Limited
        </h1>

       <div className="space-y-6 text-white leading-relaxed">
          <p>
            This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service
            that you have purchased through the Platform. Under this policy:
          </p>
          <p>
            Cancellations will only be considered if the request is made 3 days of placing the order. However,
            cancellation requests may not be entertained if the orders have been communicated to such sellers /
            merchant(s) listed on the Platform and they have initiated the process of shipping them, or the
            product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
          </p>
          {/* <p>
            SUGIMX PRIVATE LIMITED does not accept cancellation requests for perishable items like
            flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that
            the quality of the product delivered is not good.
          </p> */}
          <p>
            In case of receipt of damaged or defective items, please report to our customer service team. The
            request would be entertained once the seller/ merchant listed on the Platform, has checked and
            determined the same at its own end. This should be reported within 3 days of receipt of products.
            In case you feel that the product received is not as shown on the site or as per your expectations,
            you must bring it to the notice of our customer service within 3 days of receiving the product. The
            customer service team after looking into your complaint will take an appropriate decision.
          </p>
          <p>
            In case of complaints regarding the products that come with a warranty from the manufacturers,
            please refer the issue to them.
          </p>
          <p>
            In case of any refunds approved by SUGIMX PRIVATE LIMITED, it will take 3 days for the
            refund to be processed to you.
          </p>

          <p>
            We offer refund / exchange within first 2 days from the date of your purchase. If 2 days have passed
            since your purchase, you will not be offered a return, exchange or refund of any kind. In order to become
            eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as
            you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale,
            then the item may not be eligible for a return / exchange. Further, only such items are replaced by us
            (based on an exchange request), if such items are found defective or damaged.
          </p>
          <p>
            You agree that there may be a certain category of products / items that are exempted from returns or
            refunds. Such categories of the products would be identified to you at the item of purchase. For exchange
            / return accepted request(s) (as applicable), once your returned product / item is received and inspected
            by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further.
            If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will
            be processed in accordance with our policies.
          </p>
          <h1 className='font-bold inline-block'>Return and Replacement</h1>
          <p>We have 2 day refund return and replacement policy</p>
          <p>Replacement products will be delivered within 5-7 business days from the date of approval.</p>
          <p>If any refund is processed it will be credited within 5-7 in your bank account</p>
        </div>
      </div>
    </Container>
  );
};

export default ReturnPolicy;
/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white pb-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto mt-6">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-gray-800">
          <div className="w-full h-px bg-gray-200 mb-5" />
  <h3 className="text-xl font-bold">1. Where is Sobha Sienna located?</h3>

  <p>
    <strong>Sobha Sienna</strong> is located in <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink> – a well-connected residential corridor with access to major IT hubs, schools, hospitals, shopping destinations, and key roads.
  </p>

  <h3 className="text-xl font-bold">2. What are the apartment layouts available in Sobha Sienna?</h3>

  <p>
    The Project is planned to offer <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK apartments</strong></IntLink> to suit different family sizes and space needs.
  </p>

  <h3 className="text-xl font-bold">3. What is the total land area of Sobha Sienna?</h3>

  <p>
    <strong>Sobha Sienna</strong> spans about <IntLink href="/master-plan"><strong>25 acres</strong></IntLink> with around <strong>1,400 units</strong>. It is a huge residential township in Sarjapur.
  </p>

  <h3 className="text-xl font-bold">4. When will Sobha Sienna be ready for possession?</h3>

  <p>
    <strong>Sobha Sienna possession</strong> date is <strong>Dec 2032</strong>, subject to the terms of the final agreement, registered project timeline &amp; applicable approvals.
  </p>

  <h3 className="text-xl font-bold">5. Are Vastu based apartment plans available at Sobha Sienna?</h3>

  <p>
    Yes. The apartment plans incorporate <ExtLink href="https://en.wikipedia.org/wiki/Vastu_shastra">Vastu</ExtLink> principles in the overall design, along with practical space planning for modern-day family living.
  </p>

  <h3 className="text-xl font-bold">6. Why is the Sobha Sienna location good for professionals?</h3>

  <p>
    The Sarjapur location offers connectivity to major employment destinations such as the Sarjapur IT corridor, <ExtLink href="https://en.wikipedia.org/wiki/Outer_Ring_Road,_Bangalore">Outer Ring Road</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink>, and <ExtLink href="https://en.wikipedia.org/wiki/Electronic_City">Electronic City</ExtLink>. This gives professionals access to major business and technology hubs in Bangalore.
  </p>

  <h3 className="text-xl font-bold">7. What should buyers look out for before booking an apartment in Sobha Sienna?</h3>

  <p>
    Buyers should check updated <ExtLink href="https://rera.karnataka.gov.in/">RERA details</ExtLink>, approved plans, project specifications, apartment area, payment schedule, agreement for sale, applicable charges and the possession timeline before booking. Confirm final project details and apartment details with the relevant official documentation.
  </p>

  <h3 className="text-xl font-bold">8. What is the starting price of Sobha Sienna?</h3>

  <p>
    The <IntLink href="/price"><strong>Sobha Sienna price</strong></IntLink> starts at <strong>₹1.2 Cr* onwards</strong> for 2 BHK apartments. Prices for 3 and 4 BHK apartments are available on request.
  </p>

  <h3 className="text-xl font-bold">9. Who is the developer of Sobha Sienna?</h3>

  <p>
    Sobha Sienna is developed by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink>, a Bangalore-headquartered real estate developer. Learn more <IntLink href="/about">about Sobha Sienna</IntLink>.
  </p>
</div>
      </div>
    </section>
  );
}
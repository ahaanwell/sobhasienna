/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import DownloadCostSheetActions from "@/components/DownloadCostSheetActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const priceData = [
  { type: "2 BHK",        size: "On Request",    price: "₹ 1.2 Cr* onwards" },
  { type: "3 BHK",        size: "On Request",  price: "On Request" },
  { type: "4 BHK",  size: "On Request",  price: "On Request" },
];

const projectDetails = [
  { label: "Project Name", value: <strong>Sobha Sienna</strong> },
  { label: "Developer", value: <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> },
  { label: "Location", value: <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink> },
  { label: "Project Type", value: "Premium Residential Apartments" },
  { label: "Total Land Area", value: <strong>Approximately 25 Acres</strong> },
  { label: "Configurations", value: <IntLink href="/floor-plan"><strong>2, 3 & 4 BHK</strong></IntLink> },
  { label: "Total Units", value: <strong>Approximately 1,400 (Tentative)</strong> },
  { label: "Starting Price", value: <strong>₹1.2 Cr* onwards (2 BHK)</strong> },
  { label: "Proposed Possession", value: <strong>December 2032</strong> },
];

function PricePage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Sienna Price – 2, 3 & 4 BHK Apartment Cost in Sarjapur, Bangalore
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="text-gray-800">
    The <strong>Sobha Sienna price</strong> starts at <strong>₹1.2 Cr* onwards for 2 BHK apartments</strong>, making it an important consideration for homebuyers evaluating this proposed <IntLink href="/">residential apartment development</IntLink> in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>. Developed by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink>, the project is planned across <strong>approximately 25 acres</strong> and is expected to offer <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK apartments</strong></IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    With <strong>approximately 1,400 residential units</strong> tentatively planned, Sobha Sienna is intended to accommodate different household requirements. The <strong>proposed possession date is December 2032</strong>. Prices for the <strong>3 BHK and 4 BHK apartments are available on request</strong>, and the official unit sizes, booking amount, and payment schedule are yet to be published by the developer.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers should review the final price list and applicable charges before estimating the total acquisition cost or comparing apartment configurations. You can also explore the <IntLink href="/master-plan">Sobha Sienna master plan</IntLink> and <IntLink href="/amenities">amenities</IntLink> to understand what the price includes.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Price List 2026
  </h2>
    <div className="flex flex-col lg:flex-row gap-0 mt-6 ">

<div className="flex-1 overflow-x-auto">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Sobha Sienna apartment types and pricing"
  >
    <thead>
      <tr className="border bg-primary text-white border-gray-200">
        <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map((row, i) => (
        <tr
          key={i}
          className="border-b border-gray-300 hover:bg-gray-50 transition"
        >
          <td className="py-2 px-2 text-center text-black">{row.type}</td>
          <td className="py-2 px-2 text-center text-black">{row.size}</td>
          <td className="py-2 px-2 text-center font-medium text-primary">
            {row.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <p className="mt-2 text-xs text-gray-600">
    *Indicative starting price. Final prices are subject to the developer's official price list.
  </p>
</div>
          <div className="px-4 md:px-0">
            <img
            className="w-full"
            loading="lazy"
            src="/images/costing-details.webp" alt="Sobha Sienna price list and cost sheet for 2, 3 and 4 BHK apartments in Sarjapur" />
            <DownloadCostSheetActions/>
          </div>

        </div>
  <p className="mt-4 text-gray-800">
    The price of an apartment depends on several factors, including its <strong>configuration</strong>, <strong>carpet area</strong>, <strong>floor level</strong>, <strong>orientation</strong>, and applicable project charges. At Sobha Sienna, the proposed availability of <strong>2, 3, and 4 BHK apartments</strong> provides different options for buyers with varying space requirements.
  </p>

  <p className="mt-4 text-gray-800">
    The project's <strong>approximately 25-acre land area</strong> and tentative count of <strong>around 1,400 units</strong> provide an overview of its proposed scale. However, these details do not establish the price of individual apartments.
  </p>

  <p className="mt-4 text-gray-800">
    The final cost should be assessed using the developer's official price sheet, approved apartment dimensions shown in the <IntLink href="/floor-plan">floor plans</IntLink>, and applicable payment terms.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Sobha Sienna Project Details
  </h3>

  <div className="mt-4 overflow-x-auto">
    <table className="w-full border-collapse text-left text-gray-800">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-3 font-semibold">
            Project Specification
          </th>
          <th className="border border-gray-300 px-4 py-3 font-semibold">
            Information
          </th>
        </tr>
      </thead>
      <tbody>
        {projectDetails.map((row) => (
          <tr key={row.label}>
            <td className="border border-gray-300 px-4 py-3">
              {row.label}
            </td>
            <td className="border border-gray-300 px-4 py-3">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Price for 2 BHK Apartments
  </h2>

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna 2 BHK price starts at ₹1.2 Cr* onwards</strong>. The 2 BHK configuration is planned for buyers seeking a two-bedroom apartment with shared living spaces. This option may be relevant to smaller households, young professionals working in the <ExtLink href="https://en.wikipedia.org/wiki/Outer_Ring_Road,_Bangalore">Outer Ring Road</ExtLink> technology corridor, or individuals planning to purchase a residential property for long-term use.
  </p>

  <p className="mt-4 text-gray-800">
    The final price will depend on the apartment's approved size, floor position, layout, and other applicable pricing factors. Buyers should compare the <strong>carpet area</strong> with the <strong>super built-up area</strong> to understand the actual usable space.
  </p>

  <p className="mt-4 text-gray-800">
    Before booking, it is useful to confirm the <strong>base price</strong>, <strong>booking amount</strong>, <strong>payment milestones</strong>, and additional charges associated with the selected apartment.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Price for 3 BHK Apartments
  </h2>

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna 3 BHK price is available on request</strong>. The proposed 3 BHK apartments provide an additional bedroom compared with the 2 BHK configuration. This layout may suit households requiring extra space for children, guests, or a dedicated work area.
  </p>

  <p className="mt-4 text-gray-800">
    The cost of a 3 BHK apartment should be evaluated alongside its internal layout and usable area. A larger advertised apartment size does not automatically indicate a proportionate increase in usable space.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers should review the official <IntLink href="/floor-plan">3 BHK floor plan</IntLink>, carpet area, and configuration-specific price details before comparing available units.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Price for 4 BHK Apartments
  </h2>

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna 4 BHK price is available on request</strong>. The 4 BHK configuration is intended for buyers who require four bedrooms and additional residential space. It may be considered by larger households or those seeking separate rooms for different activities.
  </p>

  <p className="mt-4 text-gray-800">
    The final apartment price will depend on the approved dimensions and unit-specific pricing. Buyers should also account for recurring maintenance costs and other applicable charges when assessing affordability.
  </p>

  <p className="mt-4 text-gray-800">
    A detailed cost comparison can help establish whether the additional space aligns with household requirements and the planned purchase budget.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Factors That Influence Sobha Sienna Apartment Prices
  </h2>

  <p className="mt-4 text-gray-800">
    Apartment pricing is generally determined by multiple property-specific factors. Understanding these elements can help buyers interpret the official price list more accurately.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Apartment Configuration and Area
  </h3>

  <p className="mt-4 text-gray-800">
    The <strong>2, 3, and 4 BHK configurations</strong> have different space requirements. The final apartment area and layout will influence the overall cost.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Location and Connectivity
  </h3>

  <p className="mt-4 text-gray-800">
    The project's <IntLink href="/location">location in Sarjapur</IntLink>, one of the established residential growth areas of <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>, also contributes to its pricing. Proximity to employment hubs, schools, and everyday conveniences generally influences residential property values.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Floor Level and Apartment Position
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Floor level</strong>, <strong>orientation</strong>, and the apartment's position within a residential building may affect unit-specific pricing, depending on the developer's pricing policy.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Base Price and Additional Charges
  </h3>

  <p className="mt-4 text-gray-800">
    The <strong>base apartment price</strong> may not represent the complete amount payable. Buyers should check whether the quoted amount includes applicable parking, clubhouse, maintenance deposits, infrastructure charges, and other costs.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Taxes and Registration Expenses
  </h3>

  <p className="mt-4 text-gray-800">
    Applicable <ExtLink href="https://www.gst.gov.in/">GST</ExtLink>, <strong>stamp duty</strong>, <strong>registration fees</strong>, and statutory charges should be considered separately unless explicitly included in the official quotation. Current stamp duty and registration details for Karnataka are published by the <ExtLink href="https://igr.karnataka.gov.in/">Department of Stamps and Registration, Karnataka</ExtLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Payment Plan and Booking Process
  </h2>

  <p className="mt-4 text-gray-800">
    The payment plan for Sobha Sienna should be confirmed directly through the developer's official sales documentation. The <strong>booking amount</strong>, <strong>instalment structure</strong>, and <strong>payment milestones</strong> are yet to be announced.
  </p>

  <p className="mt-4 text-gray-800">
    Before making a financial commitment, buyers should request a written cost sheet explaining the payment schedule and conditions associated with each instalment. It is also advisable to verify the project's registration on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>, as required under the <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">Real Estate (Regulation and Development) Act, 2016</ExtLink>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Important Details to Verify
  </h3>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li>Initial <strong>booking amount</strong> and applicable terms.</li>
    <li>Agreement execution and <strong>payment milestones</strong>.</li>
    <li>Construction-linked or other payment arrangements.</li>
    <li>Applicable taxes and statutory charges.</li>
    <li>Cancellation and refund conditions.</li>
    <li>Possession-related payments and maintenance deposits.</li>
    <li><strong>RERA registration number</strong> of the project.</li>
  </ul>

  <p className="mt-4 text-gray-800">
    These details can help buyers plan their finances and understand their payment obligations throughout the purchase process.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Total Cost of Buying an Apartment at Sobha Sienna
  </h2>

  <p className="mt-4 text-gray-800">
    The <strong>total acquisition cost</strong> should be calculated using the complete written quotation rather than the base apartment price alone.
  </p>

  <p className="mt-4 text-gray-800">
    For a more accurate estimate, buyers should include the apartment's quoted price, applicable taxes, registration expenses, parking charges where applicable, maintenance deposits, and other disclosed costs.
  </p>

  <p className="mt-4 text-gray-800">
    Since <strong>possession is proposed for December 2032</strong>, buyers should also review the payment schedule, agreement terms, and construction-related milestones before proceeding.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Is Sobha Sienna Price Suitable for Your Budget?
  </h2>

  <p className="mt-4 text-gray-800">
    The suitability of an apartment price depends on household income, available savings, financing requirements, and long-term financial commitments.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers comparing 2, 3, and 4 BHK configurations should assess the <strong>total payable amount</strong> alongside the apartment's usable area and residential requirements.
  </p>

  <p className="mt-4 text-gray-800">
    It is also useful to compare the estimated <ExtLink href="https://en.wikipedia.org/wiki/Equated_monthly_installment">EMI (equated monthly instalment)</ExtLink> on a home loan with existing financial obligations. Lending rates are influenced by the policy repo rate set by the <ExtLink href="https://www.rbi.org.in/">Reserve Bank of India</ExtLink>, so buyers should check current rates with their lender.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Price – Frequently Asked Questions
  </h2>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    1. What is the starting price of Sobha Sienna?
  </h3>
  <p className="mt-2 text-gray-800">
    The <strong>Sobha Sienna price starts at ₹1.2 Cr* onwards</strong> for a 2 BHK apartment. Prices for 3 BHK and 4 BHK apartments are available on request.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    2. Where is Sobha Sienna located?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna is located in <strong>Sarjapur, Bangalore</strong>. See the <IntLink href="/location">Sobha Sienna location</IntLink> page for connectivity details.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    3. What is the land area and total number of units?
  </h3>
  <p className="mt-2 text-gray-800">
    The project is planned across <strong>approximately 25 acres</strong> with <strong>around 1,400 apartments</strong> (tentative).
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    4. When is possession of Sobha Sienna expected?
  </h3>
  <p className="mt-2 text-gray-800">
    Possession of Sobha Sienna is proposed for <strong>December 2032</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    5. What charges are added to the Sobha Sienna apartment price?
  </h3>
  <p className="mt-2 text-gray-800">
    In addition to the base price, buyers should account for GST, stamp duty, registration fees, parking charges, maintenance deposits, and other charges listed in the official cost sheet.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Price – Final Overview
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Sobha Sienna</strong> is a proposed premium residential apartment development by <strong>Sobha Limited</strong> in <strong>Sarjapur, Bangalore</strong>. Planned across <strong>approximately 25 acres</strong>, the project is expected to include <strong>around 1,400 units</strong> across <strong>2, 3, and 4 BHK configurations</strong>, with prices starting at <strong>₹1.2 Cr* onwards</strong> and possession proposed for <strong>December 2032</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    Detailed configuration-wise prices and payment terms are yet to be confirmed. Prospective buyers should obtain the latest price list, approved apartment dimensions, complete cost sheet, and payment schedule directly from the developer before making a purchase decision. Visit the <IntLink href="/">Sobha Sienna home page</IntLink> for a complete project overview.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PricePage;

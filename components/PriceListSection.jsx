/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "2 BHK",        size: "On Request",    price: "₹ 1.2 Cr* onwards" },
  { type: "3 BHK",        size: "On Request",  price: "On Request" },
  { type: "4 BHK",  size: "On Request",  price: "On Request" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Price
        </h2>
        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="space-y-6 text-gray-800 my-6">
  <p>
    The <IntLink href="/price"><strong>Sobha Sienna price</strong></IntLink> starts at <strong>₹1.2 Cr* onwards for 2 BHK apartments</strong>, while <strong>3 and 4 BHK prices are available on request</strong>. Final prices for each configuration will be confirmed when the developer releases the official cost sheet and price list.
  </p>

  <p>
    The final price of an apartment in a project like this will depend on several factors. These include the apartment's size, floor level, tower, view, orientation, parking space, and any other applicable fees. So, buyers shouldn't take any early, unofficial quote as the final price of a property.
  </p>
</div>

        <div className="flex flex-col lg:flex-row gap-0 ">

<div className="flex-1 overflow-x-auto">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Apartment types and pricing"
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
</div>
          <div className="px-4 md:px-0">
            <img 
            className="w-full"
            loading="lazy"
            src="/images/costing-details.webp" alt="Sobha Sienna price list and cost sheet, Sarjapur Bangalore" />
            <DownloadCostSheetActions/>
          </div>

        </div>
        <div className="mt-6 space-y-6">
          <div className="space-y-6 text-gray-800 mt-6">
            <p>
              More details on the ultimate price list are expected when the Project moves into its formal sales stage. This can
include the base cost of the apartment plus other applicable purchase charges.
            </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    What Factors Influence the Final Apartment Price?
  </h2>

  <p>
    Generally, an apartment's price isn't determined solely by its BHK configuration. Apartments with the same number of bedrooms can be priced differently if they differ in size, floor, or position in the tower.
  </p>

  <p>
    For example, a bigger 2 BHK may cost more than a compact 2 BHK. Similarly, a 3 BHK with extra utility space, a bigger balcony or a better orientation can be priced differently from another 3 BHK in the same development.
  </p>

  <p>
    Flooring type can also affect the total cost. Buyers often consider low, mid, and high floors based on their preferences for views, privacy, and accessibility. The final developer price structure will reveal if there are any floor-rise or other location-based charges.
  </p>

  <p>
    Parking provision at the apartment may also affect the total purchase cost. Other fees may include maintenance deposits, clubhouse or infrastructure fees, <ExtLink href="https://igr.karnataka.gov.in/">registration fees</ExtLink>, <ExtLink href="https://www.gst.gov.in/">taxes</ExtLink>, and other statutory charges as may be finalized in the ultimate agreement and according to the applicable rules.
  </p>

  <p>
    Therefore, consider the <strong>Sobha Sienna price</strong> against the entire <IntLink href="/price">cost sheet</IntLink>, not just the advertised base price.
  </p>

  <h3 className="text-xl font-bold">
    2 BHK Apartment
  </h3>

  <p>
    The proposed <strong>2 BHK apartments</strong>, priced from <strong>₹1.2 Cr* onwards</strong>, are likely to be the more compact configuration in <strong>Sobha Sienna</strong>. These homes are ideal for couples, small families and buyers who want a contemporary apartment but don't require the extra space of a 3 or 4 BHK.
  </p>

  <p>
    The final plans will determine the actual distribution of bedrooms, living and dining areas, kitchen, bathrooms, balconies and utility spaces. Buyers should look at carpet area and saleable area, not just the headline apartment size.
  </p>

  <h3 className="text-xl font-bold">
    3 BHK Apartment
  </h3>

  <p>
    The proposed <strong>3 BHK homes</strong> are expected to be a key part of the project's residential offering. Three-bedroom homes offer more flexibility for families that need an extra bedroom for children, parents, guests, or a home office.
  </p>

  <p>
    The real layout will be important here. When the official plans come out, buyers will be able to see whether the third bedroom has an attached bathroom, whether there is a separate utility area, and how the living and dining spaces are configured.
  </p>

  <h3 className="text-xl font-bold">
    4 BHK Apartment
  </h3>

  <p>
    The <strong>4 BHK apartments</strong> are expected to be the most spacious residential designs in the Project. These homes may appeal to larger families and buyers looking for more room and private areas.
  </p>

  <p>
    Be sure to check the final plans for bedroom sizes, balconies, utility space, storage, bathrooms, and the number of parking spaces each unit offers.
  </p>

  <p>
    Apart from the indicative <strong>₹1.2 Cr* starting price for 2 BHK</strong>, the <strong>3 and 4 BHK prices remain on request</strong> until the official price sheet is released. See the <IntLink href="/floor-plan">Sobha Sienna floor plans</IntLink> for layout details.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Which Configuration Suits You Best?
  </h2>

  <p>
    <strong>Sobha Sienna</strong> is planned with <strong>three apartment configurations</strong>, giving buyers options based on their space requirements.
  </p>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Configuration
        </th>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Size
        </th>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Best Suited For
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          2 BHK
        </td>
        <td className="border border-gray-300 px-4 py-3">
          To Be Announced
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Couples and small families looking for a practical home
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-3">
          3 BHK
        </td>
        <td className="border border-gray-300 px-4 py-3">
          To Be Announced
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Families needing an additional bedroom and more living space
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-3">
          4 BHK
        </td>
        <td className="border border-gray-300 px-4 py-3">
          To Be Announced
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Larger families looking for spacious premium residences
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <p>
    While the 2 BHK homes suit smaller families, the 3 BHK apartments offer extra space for kids, guests, or a home office. The 4 BHK configuration has been designed for buyers looking for larger living spaces and more bedrooms.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Cost Sheet, Payment Plan &amp; Offers
  </h2>

  <p>
    The <IntLink href="/price"><strong>Sobha Sienna cost sheet</strong></IntLink> is not yet out. The total cost of the apartment is expected to be provided, along with a breakdown of the base price and any other applicable charges.
  </p>

  <p>
    The developer will also announce the final payment plan. Depending on the project’s launch and construction schedule, the payment structure may include booking and construction-linked installments.
  </p>

  <p>
    Buyers are advised to refer to the official cost sheet for details like
  </p>

  <ul className="list-disc pl-6">
    <li>Base apartment price</li>
    <li>Floor-rise charges</li>
    <li>Parking charges</li>
    <li><ExtLink href="https://www.gst.gov.in/">GST</ExtLink></li>
    <li>Maintenance or corpus charges</li>
    <li>Registration and <ExtLink href="https://igr.karnataka.gov.in/">stamp duty</ExtLink></li>
    <li>Other applicable statutory charges</li>
  </ul>

  <p>
    Launch offers or early-booking benefits, if any, will be as per terms announced by the developer.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
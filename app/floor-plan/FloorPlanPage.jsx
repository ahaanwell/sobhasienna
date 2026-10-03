/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  { label: "Project Name", value: <strong>Sobha Sienna</strong> },
  { label: "Developer", value: <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> },
  { label: "Location", value: <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink> },
  { label: "Total Land Area", value: <strong>Approximately 25 Acres</strong> },
  { label: "Configurations", value: <strong>2, 3 & 4 BHK Apartments</strong> },
  { label: "Total Units", value: <strong>Approximately 1,400 (Tentative)</strong> },
  { label: "Starting Price", value: <IntLink href="/price"><strong>₹1.2 Cr* onwards (2 BHK)</strong></IntLink> },
  { label: "Proposed Possession", value: <strong>December 2032</strong> },
];

function FloorPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Sienna Floor Plan – 2, 3 & 4 BHK Apartment Layouts in Sarjapur, Bangalore
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna floor plan</strong> provides an overview of the proposed residential layouts at this premium <IntLink href="/">apartment project</IntLink> in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>. Developed by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink>, the project is planned across <strong>approximately 25 acres</strong>, with <strong>2, 3, and 4 BHK apartment configurations</strong> designed for different household requirements.
  </p>

  <p className="mt-4 text-gray-800">
    The project is expected to comprise <strong>approximately 1,400 residential units</strong>, although this figure is tentative. The <strong>proposed possession date is December 2032</strong>, and apartment <IntLink href="/price">prices start at ₹1.2 Cr* onwards</IntLink>. The floor plan information helps prospective buyers understand the apartment configurations, space distribution, room arrangements, and practical considerations before evaluating a home.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Floor Plan Overview
  </h2>

  <p className="mt-4 text-gray-800">
    A <ExtLink href="https://en.wikipedia.org/wiki/Floor_plan">floor plan</ExtLink> is an important reference for understanding how an apartment's internal spaces are organised. It illustrates the arrangement of <strong>bedrooms</strong>, <strong>living areas</strong>, <strong>kitchens</strong>, <strong>bathrooms</strong>, <strong>balconies</strong>, and circulation spaces within a residential unit.
  </p>

  <p className="mt-4 text-gray-800">
    At Sobha Sienna, the proposed availability of <strong>2, 3, and 4 BHK apartments</strong> offers different accommodation options. Each configuration is intended to address varying household sizes and space requirements. The position of these apartments within the wider site can be understood from the <IntLink href="/master-plan">Sobha Sienna master plan</IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    The project details currently confirm the apartment configurations but do not specify the final <strong>carpet areas</strong>, <strong>super built-up areas</strong>, or individual room dimensions. Buyers should refer to the developer's officially released floor plans for verified measurements and layout specifications.
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

  <h2 className="mt-6 text-2xl font-semibold text-gray-800">
    Sobha Sienna 2 BHK Floor Plan
  </h2>

  <img
              className="w-full lg:w-1/2 m-auto py-6"
              src="/images/2bhk-floorplan.webp"
              alt="Sobha Sienna 2 BHK apartment floor plan, Sarjapur Bangalore"
              width={720}
              height={400}
              loading="lazy"
            />

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna 2 BHK floor plan</strong> is planned for households seeking a two-bedroom residential arrangement. This layout generally includes <strong>two bedrooms</strong>, a <strong>living and dining area</strong>, a <strong>kitchen</strong>, bathrooms, and associated circulation spaces. The <IntLink href="/price">2 BHK price starts at ₹1.2 Cr* onwards</IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    The arrangement of these rooms determines how effectively residents can use the available floor area. For example, the relationship between the kitchen and dining space can influence everyday convenience, while bedroom positioning affects privacy within the home.
  </p>

  <p className="mt-4 text-gray-800">
    For smaller households, the 2 BHK configuration may provide sufficient accommodation without requiring additional bedrooms. However, buyers should examine the actual dimensions of the living room, bedrooms, kitchen, and balconies before assessing whether the layout meets their requirements.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Important Layout Considerations
  </h3>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li><strong>Bedroom dimensions</strong> and furniture placement.</li>
    <li><strong>Kitchen arrangement</strong> and available working space.</li>
    <li>Separation between private and shared areas.</li>
    <li>Balcony access and <strong>natural light</strong>.</li>
    <li>Bathroom positioning and internal circulation.</li>
  </ul>

  <p className="mt-4 text-gray-800">
    The final apartment plan should be checked for <strong>carpet area</strong> and usable space rather than relying only on the overall advertised apartment size.
  </p>

  <h2 className="mt-6 text-2xl font-semibold text-gray-800">
    Sobha Sienna 3 BHK Floor Plan
  </h2>

  <img
              className="w-full lg:w-1/2 m-auto py-6"
              src="/images/3bhk-floorplan.webp"
              alt="Sobha Sienna 3 BHK apartment floor plan, Sarjapur Bangalore"
              width={720}
              height={400}
              loading="lazy"
            />

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna 3 BHK floor plan</strong> introduces an additional bedroom, offering more flexibility for households with children, extended family members, or a requirement for a separate study or work area. The <IntLink href="/price">3 BHK price is available on request</IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    The <strong>third bedroom</strong> can serve different purposes depending on household needs. It may function as a guest bedroom, children's room, home office, or additional private space.
  </p>

  <p className="mt-4 text-gray-800">
    When reviewing the 3 BHK apartment layouts at Sobha Sienna, buyers should examine whether the additional bedroom is positioned near the other bedrooms or separated from the primary living areas. This arrangement can influence privacy and day-to-day movement within the apartment.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Space Planning and Usability
  </h3>

  <p className="mt-4 text-gray-800">
    The relationship between the <strong>living room</strong>, <strong>dining area</strong>, <strong>kitchen</strong>, and <strong>bedrooms</strong> is an important aspect of a 3 BHK layout. A well-organised arrangement can help residents use shared spaces without interfering with private areas.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers should also compare the dimensions of the third bedroom with the other bedrooms. Room size, wardrobe placement, door clearance, and window positioning can affect how comfortably the space accommodates furniture.
  </p>

  <p className="mt-4 text-gray-800">
    The officially released floor plan will help establish whether the layout supports the intended use of each room.
  </p>

  <h2 className="mt-6 text-2xl font-semibold text-gray-800">
    Sobha Sienna 4 BHK Floor Plan
  </h2>

  <img
              className="w-full lg:w-1/2 m-auto py-6"
              src="/images/4bhk-floorplan.webp"
              alt="Sobha Sienna 4 BHK apartment floor plan, Sarjapur Bangalore"
              width={720}
              height={400}
              loading="lazy"
            />

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna 4 BHK floor plan</strong> is planned for households requiring <strong>four bedrooms</strong> and additional residential space. It may be relevant to larger families, multi-generational households, or buyers who prefer dedicated rooms for guests and home-based activities. The <IntLink href="/price">4 BHK price is available on request</IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    A four-bedroom apartment requires careful consideration of internal circulation and the distribution of shared and private areas. The positioning of bedrooms, bathrooms, kitchen, and living spaces can influence both privacy and practical usability.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    What Buyers Should Examine
  </h3>

  <p className="mt-4 text-gray-800">
    Before selecting a 4 BHK apartment, buyers should review the following details:
  </p>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li>Whether the <strong>primary bedroom</strong> has a clearly defined private area.</li>
    <li>The placement and accessibility of additional bedrooms.</li>
    <li>The relationship between living and dining spaces.</li>
    <li>Kitchen dimensions and storage possibilities.</li>
    <li>Balcony locations and access points.</li>
    <li>Available <strong>carpet area</strong> compared with <strong>super built-up area</strong>.</li>
  </ul>

  <p className="mt-4 text-gray-800">
    These details provide a clearer understanding of how the apartment accommodates everyday activities and changing household requirements.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Understanding the Sobha Sienna Floor Plan Measurements
  </h2>

  <p className="mt-4 text-gray-800">
    Apartment floor plans generally present different area measurements, each serving a specific purpose. Understanding these terms helps buyers compare layouts accurately.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Carpet Area
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Carpet area</strong> refers to the net usable floor area within an apartment, excluding external walls, service shafts, and other excluded areas. It is defined under the <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">Real Estate (Regulation and Development) Act, 2016</ExtLink>, and developers are required to sell apartments on a carpet area basis.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Built-Up Area
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Built-up area</strong> generally includes the carpet area along with the area occupied by internal and external walls and other included structural components.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Super Built-Up Area
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Super built-up area</strong> may include the apartment's built-up area and a proportionate share of common areas such as lobbies, corridors, and <IntLink href="/amenities">amenity spaces</IntLink>, depending on the applicable measurement method.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers should review the area definitions and specifications provided in the official project documents before comparing apartment sizes or calculating the effective cost per square foot. The registered carpet areas of a project can be checked on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> once the project is registered.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    How to Select the Right Sobha Sienna Apartment Layout
  </h2>

  <p className="mt-4 text-gray-800">
    Choosing between <strong>2, 3, and 4 BHK apartments</strong> involves more than comparing the number of bedrooms. The decision should consider household size, furniture requirements, privacy, usable floor area, and long-term accommodation needs.
  </p>

  <p className="mt-4 text-gray-800">
    A <strong>2 BHK layout</strong> may suit buyers prioritising two bedrooms and essential shared spaces. A <strong>3 BHK configuration</strong> provides an additional room for changing household requirements, while a <strong>4 BHK layout</strong> offers four bedrooms for larger households or multiple uses.
  </p>

  <p className="mt-4 text-gray-800">
    It is also useful to review the <strong>orientation</strong> of the apartment, window placement, <ExtLink href="https://en.wikipedia.org/wiki/Natural_ventilation">natural ventilation</ExtLink>, balcony access, and the position of service areas. These factors can influence how the home functions beyond its stated size.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Floor Plan – Frequently Asked Questions
  </h2>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    1. What floor plans are available at Sobha Sienna?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna offers <strong>2 BHK, 3 BHK and 4 BHK apartment</strong> floor plans, with <strong>approximately 1,400 units</strong> (tentative) planned in total.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    2. What is the carpet area of Sobha Sienna apartments?
  </h3>
  <p className="mt-2 text-gray-800">
    The final carpet areas and room dimensions are yet to be released. Buyers should verify them in the developer's official floor plans and RERA registration.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    3. What should buyers check in the Sobha Sienna floor plan?
  </h3>
  <p className="mt-2 text-gray-800">
    Buyers should check the carpet area, room dimensions, natural light, ventilation, balcony access, privacy and the apartment's orientation, and confirm them against the official floor plan drawings.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    4. When is possession of Sobha Sienna expected?
  </h3>
  <p className="mt-2 text-gray-800">
    Possession of Sobha Sienna is proposed for <strong>December 2032</strong>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Floor Plan – Final Overview
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Sobha Sienna</strong> is a proposed residential apartment development by <strong>Sobha Limited</strong> in <strong>Sarjapur, Bangalore</strong>, planned across <strong>approximately 25 acres</strong>. Its proposed <strong>2, 3, and 4 BHK configurations</strong> address different residential space requirements, with <strong>approximately 1,400 units</strong> currently indicated as a tentative project estimate.
  </p>

  <p className="mt-4 text-gray-800">
    The <strong>proposed possession date is December 2032</strong>. As detailed apartment dimensions and final layout drawings have not been provided in the available project information, buyers should verify the approved floor plans, carpet areas, specifications, and configuration-wise availability directly through official project documentation before making a purchase decision. See the <IntLink href="/price">Sobha Sienna price list</IntLink> and <IntLink href="/location">location details</IntLink> to complete your evaluation.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;

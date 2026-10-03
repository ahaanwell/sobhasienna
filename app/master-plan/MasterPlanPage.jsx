/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  { label: "Project Name", value: <strong>Sobha Sienna</strong> },
  { label: "Developer", value: <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> },
  { label: "Location", value: <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink> },
  { label: "Project Type", value: "Premium Residential Apartments" },
  { label: "Total Land Area", value: <strong>Approximately 25 Acres</strong> },
  { label: "Apartment Configurations", value: <IntLink href="/floor-plan"><strong>2, 3 & 4 BHK</strong></IntLink> },
  { label: "Total Units", value: <strong>Approximately 1,400 (Tentative)</strong> },
  { label: "Starting Price", value: <IntLink href="/price"><strong>₹1.2 Cr* onwards (2 BHK)</strong></IntLink> },
  { label: "Proposed Possession", value: <strong>December 2032</strong> },
];

function MasterPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Master Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Sienna Master Plan – 25 Acre Site Layout in Sarjapur, Bangalore
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="text-gray-800">
    The <strong>Sobha Sienna master plan</strong> provides an overview of the proposed <IntLink href="/">residential development</IntLink> by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>. Planned across <strong>approximately 25 acres</strong>, the project is expected to accommodate <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK apartments</strong></IntLink> within a large residential community.
  </p>

  <p className="mt-4 text-gray-800">
    The development is currently estimated to include <strong>approximately 1,400 residential units</strong>, although the total unit count is tentative. The <strong>proposed possession date is December 2032</strong>, and <IntLink href="/price">prices start at ₹1.2 Cr* onwards</IntLink>. Understanding the master plan helps prospective buyers evaluate the overall land allocation, residential arrangement, internal movement, and relationship between different development components.
  </p>

  <p className="mt-4 text-gray-800">
    The final master plan and detailed site drawings should be reviewed once officially released to confirm the exact positioning of buildings, open spaces, <IntLink href="/amenities">amenities</IntLink>, access roads, and other project features.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Master Plan Overview
  </h2>
  <img
              className="w-full lg:w-1/2 m-auto py-6"
              src="/images/master-plan.webp"
              alt="Sobha Sienna master plan and site layout, Sarjapur Bangalore"
              width={720}
              height={400}
              loading="lazy"
            />
  <p className="mt-4 text-gray-800">
    A residential master plan, also known as a <ExtLink href="https://en.wikipedia.org/wiki/Site_plan">site plan</ExtLink>, illustrates how a development is organised across its available land. It typically identifies <strong>residential blocks</strong>, <strong>internal roads</strong>, <strong>entry and exit points</strong>, <strong>landscaped areas</strong>, <strong>common facilities</strong>, and circulation routes.
  </p>

  <p className="mt-4 text-gray-800">
    For Sobha Sienna, the proposed <strong>25-acre land area</strong> provides the overall planning boundary for the residential project. The development is intended to accommodate multiple apartment configurations, including <strong>2, 3, and 4 BHK homes</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    The master plan is useful for understanding the relationship between residential buildings and shared spaces. It also helps buyers examine the overall arrangement of the community rather than focusing only on individual <IntLink href="/floor-plan">apartment floor plans</IntLink>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Sobha Sienna Key Project Details
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
    Land Distribution in the Sobha Sienna Master Plan
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Land distribution</strong> is an important element of residential project planning. It determines how the available site area is organised for apartment buildings, access routes, shared facilities, landscaping, and other development requirements.
  </p>

  <p className="mt-4 text-gray-800">
    At Sobha Sienna, the proposed <strong>25-acre site</strong> forms the basis for planning the residential community. However, the exact allocation of land between buildings, open areas, internal roads, and common facilities has not been specified in the available project details.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers should therefore avoid assuming a particular percentage of open space or a fixed number of residential blocks until the official master plan is published. Land use in the Bangalore region is governed by development plans prepared under the <ExtLink href="https://bmrda.karnataka.gov.in/">Bangalore Metropolitan Region Development Authority (BMRDA)</ExtLink> and its local planning authorities.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Residential Development Area
  </h3>

  <p className="mt-4 text-gray-800">
    The project is planned to include <strong>approximately 1,400 apartments</strong> across <strong>2, 3, and 4 BHK configurations</strong>. The final building arrangement will determine how these homes are distributed throughout the development.
  </p>

  <p className="mt-4 text-gray-800">
    The placement of residential blocks can influence access to shared spaces, internal movement, and the overall organisation of the community. The official site plan will help buyers understand these relationships more clearly.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Residential Layout and Building Arrangement
  </h2>

  <p className="mt-4 text-gray-800">
    The residential layout explains how apartment buildings are positioned within the project boundary. It provides a broader view of the development than an individual <IntLink href="/floor-plan">floor plan</IntLink>, which focuses on the internal arrangement of a single apartment.
  </p>

  <p className="mt-4 text-gray-800">
    For Sobha Sienna, the proposed apartment mix includes <strong>three configurations</strong> designed for different household requirements. The final master plan will establish the location and distribution of these residential units within the site.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Understanding the Apartment Configuration
  </h3>

  <p className="mt-4 text-gray-800">
    The <strong>2 BHK apartments</strong> are intended for households requiring two bedrooms and shared living spaces. The <strong>3 BHK configuration</strong> provides an additional bedroom, while the <strong>4 BHK option</strong> accommodates households seeking more residential space.
  </p>

  <p className="mt-4 text-gray-800">
    The master plan may help buyers identify the location of different residential blocks once the configuration-wise distribution is confirmed. This information can be considered alongside individual floor plans and the <IntLink href="/price">Sobha Sienna price list</IntLink> when evaluating apartment options.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Internal Roads and Movement Planning
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Internal circulation</strong> is a key consideration in residential master planning. It covers the routes used by residents, visitors, service vehicles, and emergency access within the development.
  </p>

  <p className="mt-4 text-gray-800">
    The final Sobha Sienna site layout should be reviewed to understand the positioning of <strong>entry and exit points</strong>, <strong>internal roads</strong>, <strong>pedestrian pathways</strong>, and connections between residential buildings and common areas.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Access and Circulation Considerations
  </h3>

  <p className="mt-4 text-gray-800">
    Buyers reviewing the master plan should examine:
  </p>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li>The location of the <strong>main entrance and exit</strong>.</li>
    <li>The arrangement of internal access roads.</li>
    <li>The distance between residential buildings and shared facilities.</li>
    <li>Pedestrian movement within the development.</li>
    <li>Vehicle circulation and designated access areas.</li>
    <li><strong>Emergency and service access</strong> provisions.</li>
  </ul>

  <p className="mt-4 text-gray-800">
    These details can help residents understand how movement is organised across the property and how different sections of the development are connected.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Open Spaces and Common Areas
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Open spaces</strong> and <strong>common areas</strong> contribute to the overall layout of a residential community. Depending on the approved design, these areas may include landscaped sections, recreational spaces, pedestrian zones, and shared facilities.
  </p>

  <p className="mt-4 text-gray-800">
    The available project information confirms the proposed land area but does not specify the final open-space percentage or the exact <IntLink href="/amenities">amenities planned for Sobha Sienna</IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    The official master plan should be consulted to establish the location, dimensions, and accessibility of these spaces. Buyers can also examine whether residential buildings have convenient access to common areas and how these spaces are distributed throughout the development.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    How to Read the Sobha Sienna Master Plan
  </h2>

  <p className="mt-4 text-gray-800">
    A master plan becomes more useful when buyers understand the information represented in its drawings. Different symbols, labels, and boundaries identify specific elements of the proposed development, following general principles of <ExtLink href="https://en.wikipedia.org/wiki/Urban_planning">urban planning</ExtLink>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Important Details to Check
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Project boundary:</strong> Identifies the total development area and the limits of the residential site.
  </p>

  <p className="mt-4 text-gray-800">
    <strong>Residential blocks:</strong> Shows the placement of apartment buildings and their relationship to other development components.
  </p>

  <p className="mt-4 text-gray-800">
    <strong>Internal circulation:</strong> Indicates access roads, pedestrian routes, and movement connections.
  </p>

  <p className="mt-4 text-gray-800">
    <strong>Common facilities:</strong> Identifies shared spaces and amenities included in the approved layout.
  </p>

  <p className="mt-4 text-gray-800">
    <strong>Open areas:</strong> Shows landscaped and other designated open spaces, where specified.
  </p>

  <p className="mt-4 text-gray-800">
    <strong>Access points:</strong> Identifies entry, exit, and other designated access locations.
  </p>

  <p className="mt-4 text-gray-800">
    These details help buyers assess the site's organisation and understand how individual apartments fit within the larger residential development. The approved layout of a registered project can also be checked on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Master Plan and Project Development Timeline
  </h2>

  <p className="mt-4 text-gray-800">
    Sobha Sienna is proposed as a premium residential apartment project by <strong>Sobha Limited</strong> in <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink>. The development is planned across <strong>approximately 25 acres</strong>, with an estimated <strong>1,400 units</strong> across 2, 3, and 4 BHK configurations.
  </p>

  <p className="mt-4 text-gray-800">
    The <strong>proposed possession date is December 2032</strong>. As the project progresses, buyers should verify the latest approved site layout, building arrangements, project specifications, and development schedule through official documentation.
  </p>

  <p className="mt-4 text-gray-800">
    Any changes to the proposed land allocation, residential configuration, or common facilities should be assessed using the latest published plans rather than preliminary project information.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Master Plan – Frequently Asked Questions
  </h2>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    1. What is the land area of Sobha Sienna?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna is planned across <strong>approximately 25 acres</strong> in <strong>Sarjapur, Bangalore</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    2. How many apartments are planned in the Sobha Sienna master plan?
  </h3>
  <p className="mt-2 text-gray-800">
    The project is expected to include <strong>approximately 1,400 apartments</strong> (tentative) across 2, 3 and 4 BHK configurations.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    3. What should buyers check in the Sobha Sienna master plan?
  </h3>
  <p className="mt-2 text-gray-800">
    Buyers should check the project boundary, placement of residential blocks, internal roads, entry and exit points, open spaces and common facilities, and confirm them against the officially approved layout.
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
    Sobha Sienna Master Plan – Final Overview
  </h2>

  <p className="mt-4 text-gray-800">
    The <strong>Sobha Sienna master plan</strong> is the primary reference for understanding the proposed organisation of this <strong>25-acre residential development in Sarjapur, Bangalore</strong>. It will help buyers examine residential building placement, internal circulation, access points, and the distribution of shared spaces.
  </p>

  <p className="mt-4 text-gray-800">
    With <strong>approximately 1,400 units</strong> tentatively planned across <strong>2, 3, and 4 BHK configurations</strong>, the project is intended to accommodate different household requirements. Prices start at <strong>₹1.2 Cr* onwards</strong>, and the <strong>proposed possession date is December 2032</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    Since detailed land-use allocations, tower arrangements, open-space percentages, and amenity locations have not been confirmed in the available project information, buyers should refer to the latest official master plan and approved project documents for accurate planning details. Visit the <IntLink href="/">Sobha Sienna home page</IntLink> for a complete project overview.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MasterPlanPage;

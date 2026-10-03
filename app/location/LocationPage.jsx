/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  { label: "Project Name", value: <strong>Sobha Sienna</strong> },
  { label: "Developer", value: <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> },
  { label: "Location", value: <strong>Sarjapur, Bangalore, Karnataka</strong> },
  { label: "Total Land Area", value: <IntLink href="/master-plan"><strong>Approximately 25 Acres</strong></IntLink> },
  { label: "Configurations", value: <IntLink href="/floor-plan"><strong>2, 3 & 4 BHK Apartments</strong></IntLink> },
  { label: "Total Units", value: <strong>Approximately 1,400 (Tentative)</strong> },
  { label: "Starting Price", value: <IntLink href="/price"><strong>₹1.2 Cr* onwards (2 BHK)</strong></IntLink> },
  { label: "Proposed Possession", value: <strong>December 2032</strong> },
];

function LocationPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Sienna Location – Sarjapur, Bangalore
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="text-gray-800">
    The <strong>Sobha Sienna location</strong> places this proposed <IntLink href="/">residential apartment development</IntLink> in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore"><strong>Bangalore</strong></ExtLink>, an area considered by homebuyers evaluating residential opportunities in the city. Developed by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink>, the project is planned across <strong>approximately 25 acres</strong> and is expected to offer <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK apartments</strong></IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    With <strong>approximately 1,400 units</strong> tentatively planned, <IntLink href="/price">prices starting at ₹1.2 Cr* onwards</IntLink>, and a <strong>proposed possession date of December 2032</strong>, Sobha Sienna is intended to accommodate different household requirements. Understanding the location involves examining residential suitability, daily travel needs, future development possibilities, and the factors that may influence long-term property ownership.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Location Overview
  </h2>

  <img
              className="w-full lg:w-1/2 m-auto py-6"
              src="/images/map.webp"
              alt="Sobha Sienna location map, Sarjapur Bangalore"
              width={720}
              height={400}
              loading="lazy"
            />

  <p className="mt-4 text-gray-800">
    <strong>Sarjapur</strong> is the designated location of Sobha Sienna, a proposed premium residential apartment project in Bangalore. Sarjapur lies in the <ExtLink href="https://en.wikipedia.org/wiki/Anekal_taluk">Anekal taluk</ExtLink> of <ExtLink href="https://en.wikipedia.org/wiki/Bangalore_Urban_district">Bangalore Urban district</ExtLink>, in south-east Bangalore. The project's <IntLink href="/master-plan">approximately 25-acre land area</IntLink> provides the setting for a residential development planned with multiple apartment configurations.
  </p>

  <p className="mt-4 text-gray-800">
    For prospective buyers, location assessment should extend beyond the project boundary. It should include the surrounding residential environment, <strong>accessibility to workplaces</strong>, availability of <strong>essential services</strong>, and the convenience of everyday travel.
  </p>

  <p className="mt-4 text-gray-800">
    The proposed development timeline also makes future planning relevant. Buyers considering <strong>possession in December 2032</strong> should evaluate how their residential requirements may change over the coming years.
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
    Why Sarjapur Is a Residential Location to Consider
  </h2>

  <p className="mt-4 text-gray-800">
    Choosing a home involves balancing present-day convenience with future household requirements. <strong>Sarjapur</strong> is the location identified for Sobha Sienna, making its residential environment and accessibility important considerations during the buying process.
  </p>

  <p className="mt-4 text-gray-800">
    The area is linked to the city by <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur_Road">Sarjapur Road</ExtLink>, which connects towards the <ExtLink href="https://en.wikipedia.org/wiki/Outer_Ring_Road,_Bangalore">Outer Ring Road</ExtLink> technology corridor. Employment hubs such as <ExtLink href="https://en.wikipedia.org/wiki/Electronic_City">Electronic City</ExtLink> and <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink> are also among the destinations residents of south-east Bangalore commonly travel to. Actual travel times should be checked using the intended route and time of day.
  </p>

  <p className="mt-4 text-gray-800">
    The suitability of a residential location also depends on personal priorities. Families may focus on access to <strong>schools and daily services</strong>, while working professionals may place greater importance on <strong>commuting requirements</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Residential Suitability for Different Buyers
  </h3>

  <p className="mt-4 text-gray-800">
    The proposed <strong>2, 3, and 4 BHK configurations</strong> at Sobha Sienna provide different accommodation options within the same development.
  </p>

  <p className="mt-4 text-gray-800">
    A <strong>2 BHK apartment</strong> may be considered by smaller households, while a <strong>3 BHK layout</strong> offers an additional bedroom for changing family needs. The <strong>4 BHK configuration</strong> provides more rooms for larger households or buyers requiring dedicated spaces for work and guests. Compare the layouts on the <IntLink href="/floor-plan">Sobha Sienna floor plan</IntLink> page.
  </p>

  <p className="mt-4 text-gray-800">
    The choice should be based on household size, usable apartment area, budget, and expected residential needs rather than configuration alone.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Connectivity and Everyday Accessibility
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Connectivity</strong> is one of the practical factors buyers should assess when evaluating the Sobha Sienna location. A residential address becomes more convenient when regular destinations can be reached through manageable travel routes.
  </p>

  <p className="mt-4 text-gray-800">
    Before purchasing, buyers should identify their primary commuting destinations and examine the available road connections, public transport options, and typical journey times. Bus routes are operated by <ExtLink href="https://mybmtc.karnataka.gov.in/">BMTC</ExtLink>, current and planned metro lines are published by <ExtLink href="https://english.bmrc.co.in/">Namma Metro (BMRCL)</ExtLink>, and air travel is served by <ExtLink href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport">Kempegowda International Airport</ExtLink>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Important Connectivity Factors
  </h3>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li>Daily <strong>travel time to the workplace</strong>.</li>
    <li>Accessibility of <strong>schools</strong> and educational institutions.</li>
    <li>Distance to <strong>hospitals</strong> and healthcare services.</li>
    <li>Availability of grocery stores and essential retail.</li>
    <li>Road conditions and traffic during peak hours.</li>
    <li>Access to <strong>public transportation</strong>, where available.</li>
  </ul>

  <p className="mt-4 text-gray-800">
    These factors should be verified using current local information. Future improvements to connectivity may influence convenience, but proposed infrastructure should not be treated as operational until confirmed.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Future Development Potential of Sarjapur
  </h2>

  <p className="mt-4 text-gray-800">
    The future residential suitability of Sarjapur will depend on how the surrounding area develops over time. For buyers considering a home with a <strong>proposed possession date of December 2032</strong>, evaluating possible changes in infrastructure, services, and residential activity is relevant.
  </p>

  <p className="mt-4 text-gray-800">
    Future development may include improvements to transport accessibility, expansion of essential services, and additional residential or commercial activity. However, the timing, scale, and completion of such developments require independent verification.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Infrastructure and Accessibility Outlook
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Infrastructure improvements</strong> can affect how residents travel between their homes and important destinations. Better road connections or additional public transport options, if implemented, may provide greater flexibility for daily commuting.
  </p>

  <p className="mt-4 text-gray-800">
    Buyers should review officially announced infrastructure projects, their implementation status, and expected completion timelines. Regional plans for the Bangalore area are published by the <ExtLink href="https://bmrda.karnataka.gov.in/">Bangalore Metropolitan Region Development Authority (BMRDA)</ExtLink>. This helps distinguish confirmed developments from preliminary proposals.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Growth of Supporting Services
  </h3>

  <p className="mt-4 text-gray-800">
    As residential areas develop, demand for supporting services may increase. These can include <strong>educational facilities</strong>, <strong>healthcare services</strong>, supermarkets, restaurants, and other everyday conveniences.
  </p>

  <p className="mt-4 text-gray-800">
    The availability of such services should be assessed through actual operating locations rather than assumed future supply. For a homebuyer, proximity to functioning facilities is often more immediately relevant than general development expectations.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Long-Term Residential Considerations for Homebuyers
  </h2>

  <p className="mt-4 text-gray-800">
    A property purchase involves both present requirements and future responsibilities. The proposed completion timeline of Sobha Sienna makes it useful for buyers to consider their expected living arrangements several years ahead.
  </p>

  <p className="mt-4 text-gray-800">
    Families should assess whether their preferred apartment configuration will remain suitable as household needs change. Working professionals should consider possible changes in workplace location and commuting patterns.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Evaluating Future Residential Needs
  </h3>

  <p className="mt-4 text-gray-800">
    The <strong>25-acre project</strong> is tentatively planned for <strong>approximately 1,400 residential units</strong>. Buyers can review the final approved <IntLink href="/master-plan">master plan</IntLink> to understand the arrangement of residential buildings, common areas, and access points.
  </p>

  <p className="mt-4 text-gray-800">
    Other important considerations include apartment orientation, usable floor area, maintenance arrangements, parking provisions, on-site <IntLink href="/amenities">amenities</IntLink>, and the availability of essential services within the surrounding area.
  </p>

  <p className="mt-4 text-gray-800">
    These details help establish whether the property is suitable for long-term occupation rather than relying solely on its location or proposed development scale. Buyers should also verify the project's registration on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Is Sobha Sienna Location Suitable for Your Home?
  </h2>

  <p className="mt-4 text-gray-800">
    The suitability of Sobha Sienna depends on how its <strong>Sarjapur location</strong> aligns with an individual's residential priorities. Buyers seeking <strong>2, 3, or 4 BHK apartments</strong> can compare the proposed configurations with their household requirements and future space needs.
  </p>

  <p className="mt-4 text-gray-800">
    The project may be considered by families planning a long-term residence, professionals evaluating their commuting requirements, and buyers assessing residential property options in Bangalore.
  </p>

  <p className="mt-4 text-gray-800">
    Before making a decision, prospective buyers should inspect the actual site, verify nearby operational facilities, assess daily travel routes, and review the project's approved documents.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Location – Frequently Asked Questions
  </h2>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    1. Where is Sobha Sienna located?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna is located in <strong>Sarjapur, Bangalore</strong>, Karnataka.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    2. Which developer is developing Sobha Sienna?
  </h3>
  <p className="mt-2 text-gray-800">
    The project is developed by <strong>Sobha Limited</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    3. How large is the Sobha Sienna project?
  </h3>
  <p className="mt-2 text-gray-800">
    The development is planned across <strong>approximately 25 acres</strong> with <strong>around 1,400 apartments</strong> (tentative) in 2, 3 and 4 BHK configurations.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    4. When is possession of Sobha Sienna expected?
  </h3>
  <p className="mt-2 text-gray-800">
    Possession is proposed for <strong>December 2032</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    5. How should buyers evaluate the Sobha Sienna location?
  </h3>
  <p className="mt-2 text-gray-800">
    Buyers should examine the approach roads, daily commuting routes, nearby schools, hospitals and essential services, public transport availability, and actual travel times at peak hours.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Location – Final Overview
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Sobha Sienna</strong> is a proposed residential apartment development by <strong>Sobha Limited</strong> in <strong>Sarjapur, Bangalore</strong>. Planned across <strong>approximately 25 acres</strong>, the project is expected to include <strong>around 1,400 units</strong> across <strong>2, 3, and 4 BHK configurations</strong>, with prices starting at <strong>₹1.2 Cr* onwards</strong> and possession proposed for <strong>December 2032</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    For homebuyers, the location assessment should consider current accessibility, essential services, household requirements, and the status of future infrastructure developments. Evaluating these factors alongside the project's approved specifications can help buyers make an informed residential decision. See the <IntLink href="/price">Sobha Sienna price list</IntLink> or visit the <IntLink href="/">home page</IntLink> for a complete project overview.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LocationPage;

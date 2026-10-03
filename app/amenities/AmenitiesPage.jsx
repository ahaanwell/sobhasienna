/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  { label: "Project Name", value: <strong>Sobha Sienna</strong> },
  { label: "Developer", value: <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> },
  { label: "Location", value: <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink> },
  { label: "Total Land Area", value: <IntLink href="/master-plan"><strong>Approximately 25 Acres</strong></IntLink> },
  { label: "Configurations", value: <IntLink href="/floor-plan"><strong>2, 3 & 4 BHK Apartments</strong></IntLink> },
  { label: "Total Units", value: <strong>Approximately 1,400 (Tentative)</strong> },
  { label: "Starting Price", value: <IntLink href="/price"><strong>₹1.2 Cr* onwards (2 BHK)</strong></IntLink> },
  { label: "Proposed Possession", value: <strong>December 2032</strong> },
  { label: "Amenity Schedule", value: "Awaiting Official Release" },
];

function AmenitiesPage() {

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Amenities"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Sienna Amenities – Lifestyle Facilities in Sarjapur, Bangalore
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="text-gray-800">
    The <strong>Sobha Sienna amenities</strong> are an important consideration for homebuyers evaluating this proposed <IntLink href="/">residential apartment development</IntLink> in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>. Developed by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink>, the project is planned across <strong>approximately 25 acres</strong> and is expected to feature <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK apartments</strong></IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    With <strong>approximately 1,400 residential units</strong> tentatively planned, <IntLink href="/price">prices starting at ₹1.2 Cr* onwards</IntLink>, and <strong>possession proposed for December 2032</strong>, the development is intended to accommodate different household requirements. Its amenity planning will play a role in supporting <strong>recreation</strong>, <strong>fitness</strong>, <strong>social interaction</strong>, and <strong>everyday convenience</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    The final amenity schedule has not been provided in the available project details. The following facilities represent premium residential amenity categories buyers may look for in a Sobha development. Their inclusion, location, specifications, and availability at Sobha Sienna should be verified through the official project brochure and approved plans.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Amenities Overview
  </h2>

  <img
              className="w-full lg:w-1/2 m-auto py-6"
              src="/images/amenities.webp"
              alt="Sobha Sienna amenities and lifestyle facilities, Sarjapur Bangalore"
              width={720}
              height={400}
              loading="lazy"
            />

  <p className="mt-4 text-gray-800">
    Residential amenities are shared facilities designed to support activities beyond individual apartment living. These may include <strong>fitness spaces</strong>, <strong>recreational facilities</strong>, <strong>landscaped areas</strong>, <strong>indoor activity rooms</strong>, and <strong>community gathering spaces</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    For a development planned across <strong>approximately 25 acres</strong>, the arrangement of amenities is an important part of the overall residential layout shown in the <IntLink href="/master-plan">Sobha Sienna master plan</IntLink>. Their location, accessibility, capacity, and maintenance requirements can influence how residents use the common areas.
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
    Fitness and Wellness Amenities at Sobha Sienna
  </h2>

  <p className="mt-4 text-gray-800">
    Fitness facilities provide residents with dedicated spaces for physical activity without requiring every activity to take place inside their apartments. Buyers evaluating Sobha Sienna can look for the following premium <strong>fitness and wellness features</strong> in the final amenity schedule.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Gymnasium and Exercise Facilities
  </h3>

  <p className="mt-4 text-gray-800">
    A modern <ExtLink href="https://en.wikipedia.org/wiki/Gym">gymnasium</ExtLink> may include <strong>cardiovascular equipment</strong>, <strong>strength-training machines</strong>, free weights, and designated exercise areas. Equipment variety, usable floor space, ventilation, and maintenance arrangements are important considerations.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Yoga and Meditation Area
  </h3>

  <p className="mt-4 text-gray-800">
    A dedicated <ExtLink href="https://en.wikipedia.org/wiki/Yoga">yoga</ExtLink> or meditation space can provide an environment for stretching, breathing exercises, and individual wellness activities. Yoga practice is also promoted by India's <ExtLink href="https://ayush.gov.in/">Ministry of AYUSH</ExtLink>. Its usability depends on available space, ventilation, and accessibility.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Swimming Pool
  </h3>

  <p className="mt-4 text-gray-800">
    A <strong>swimming pool</strong> is commonly considered among premium residential recreational facilities. Buyers should verify whether the proposed development includes a pool, its dimensions, depth arrangements, operating hours, and applicable safety provisions.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Jogging and Walking Tracks
  </h3>

  <p className="mt-4 text-gray-800">
    Dedicated <strong>walking or jogging tracks</strong> can support regular outdoor activity. Their length, surface quality, lighting, and separation from vehicle movement are useful details to examine in the approved site plan.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sports and Recreation Amenities
  </h2>

  <p className="mt-4 text-gray-800">
    Sports facilities provide opportunities for residents to participate in recreational activities within the residential community. Depending on the approved design, premium apartment developments may include <strong>indoor or outdoor sports areas</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Indoor Games and Activity Rooms
  </h3>

  <p className="mt-4 text-gray-800">
    Indoor recreation spaces may accommodate activities such as <strong>table tennis</strong>, <strong>carrom</strong>, <strong>chess</strong>, or other board games. Buyers should check the final facility list, room capacity, equipment, and booking arrangements.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Outdoor Sports Facilities
  </h3>

  <p className="mt-4 text-gray-800">
    Possible outdoor sports provisions include <strong>multipurpose courts</strong> or designated play areas. The actual sports facilities at Sobha Sienna should be confirmed through official project documentation rather than assumed from amenities available at other developments.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Children's Play Area
  </h3>

  <p className="mt-4 text-gray-800">
    A dedicated <strong>children's play area</strong> can provide space for age-appropriate recreational activities. Important considerations include equipment safety, suitable flooring, visibility, and separation from vehicle circulation.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Clubhouse and Community Amenities
  </h2>

  <p className="mt-4 text-gray-800">
    A <strong>clubhouse</strong> can serve as a shared indoor destination for recreation, gatherings, and community activities. Its usefulness depends on the facilities provided, available capacity, operating rules, and maintenance arrangements.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Multipurpose Hall
  </h3>

  <p className="mt-4 text-gray-800">
    A <strong>multipurpose hall</strong> may accommodate community meetings, celebrations, and organised activities. Buyers should review its approximate capacity, booking policies, and whether usage involves additional charges.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Indoor Leisure Spaces
  </h3>

  <p className="mt-4 text-gray-800">
    Indoor leisure areas may include <strong>lounges</strong>, <strong>games rooms</strong>, or shared activity spaces. These facilities can support social interaction among residents while providing additional common areas beyond individual apartments.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Community Gathering Areas
  </h3>

  <p className="mt-4 text-gray-800">
    Designated gathering spaces can support informal interaction and resident activities. Their location and accessibility are relevant considerations when reviewing the overall <IntLink href="/master-plan">master plan</IntLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Outdoor and Landscape Amenities
  </h2>

  <p className="mt-4 text-gray-800">
    Outdoor spaces contribute to the organisation and usability of a residential development. Within the proposed <strong>25-acre Sobha Sienna site</strong>, the final landscape plan will clarify how outdoor areas are distributed around residential buildings and shared facilities.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Landscaped Gardens and Green Spaces
  </h3>

  <p className="mt-4 text-gray-800">
    <strong>Landscaped gardens</strong> may provide seating, walking spaces, and outdoor recreation opportunities. Buyers should examine the actual landscape allocation, planting plan, maintenance provisions, and accessibility. Sustainable features such as <ExtLink href="https://en.wikipedia.org/wiki/Rainwater_harvesting">rainwater harvesting</ExtLink> are also worth checking, as Bangalore's water utility <ExtLink href="https://bwssb.karnataka.gov.in/">BWSSB</ExtLink> sets rainwater harvesting requirements for buildings in the city.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Seating and Relaxation Zones
  </h3>

  <p className="mt-4 text-gray-800">
    Outdoor seating areas can provide places for residents to spend time outside their apartments. Their usability depends on shade, location, lighting, and proximity to residential blocks.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Open-Air Activity Spaces
  </h3>

  <p className="mt-4 text-gray-800">
    Designated outdoor activity areas may support informal recreation and community interaction. The approved plan should clarify their location and intended use.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Family-Friendly and Everyday Convenience Amenities
  </h2>

  <p className="mt-4 text-gray-800">
    Amenities also serve practical household requirements, particularly in residential developments accommodating different apartment configurations.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Senior Citizen Seating Areas
  </h3>

  <p className="mt-4 text-gray-800">
    Dedicated <strong>senior citizen seating areas</strong> can provide accessible outdoor spaces for older residents. Buyers should check pathway surfaces, seating arrangements, shade, and convenient access.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Convenience and Service Areas
  </h3>

  <p className="mt-4 text-gray-800">
    Depending on the final project design, common facilities may include designated service areas, visitor facilities, and organised utility spaces. Their exact provisions should be verified in the official specifications.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Security and Access Management
  </h3>

  <p className="mt-4 text-gray-800">
    Residential security provisions may include <strong>controlled entry points</strong>, <strong>visitor management</strong>, <strong>surveillance systems</strong>, and designated access routes. Buyers should confirm the actual security specifications and operational arrangements, along with fire safety provisions approved by the <ExtLink href="https://ksfes.karnataka.gov.in/">Karnataka State Fire and Emergency Services</ExtLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    How to Evaluate Sobha Sienna Amenities
  </h2>

  <p className="mt-4 text-gray-800">
    The value of residential amenities depends on more than the number of facilities listed in a brochure. Buyers should examine their <strong>practical usability</strong>, <strong>maintenance requirements</strong>, <strong>accessibility</strong>, and suitability for the expected resident population.
  </p>

  <p className="mt-4 text-gray-800">
    With <strong>approximately 1,400 units</strong> tentatively planned, facility capacity and usage arrangements are relevant considerations. A buyer should review whether shared spaces are appropriately sized for the anticipated community and whether recurring maintenance charges are clearly explained in the <IntLink href="/price">cost sheet</IntLink>.
  </p>

  <p className="mt-4 text-gray-800">
    It is also useful to check which amenities are included in the approved project plan, which are available at possession, and whether any facilities are subject to additional charges or usage restrictions. Amenities promised in a registered project can be checked on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Amenities – Frequently Asked Questions
  </h2>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    1. What amenities are planned at Sobha Sienna?
  </h3>
  <p className="mt-2 text-gray-800">
    The official amenity schedule is yet to be released. Buyers can expect to evaluate premium categories such as <strong>fitness and wellness</strong>, <strong>sports and recreation</strong>, <strong>clubhouse facilities</strong>, <strong>landscaped spaces</strong> and <strong>security</strong>, subject to confirmation in the official brochure.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    2. Where is Sobha Sienna located?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna is located in <strong>Sarjapur, Bangalore</strong>. See the <IntLink href="/location">location page</IntLink> for connectivity details.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    3. How large is the Sobha Sienna project?
  </h3>
  <p className="mt-2 text-gray-800">
    The project is planned across <strong>approximately 25 acres</strong> with <strong>around 1,400 apartments</strong> (tentative) in 2, 3 and 4 BHK configurations.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    4. When is possession of Sobha Sienna expected?
  </h3>
  <p className="mt-2 text-gray-800">
    Possession is proposed for <strong>December 2032</strong>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Amenities – Final Overview
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Sobha Sienna</strong> is a proposed premium residential apartment project by <strong>Sobha Limited</strong> in <strong>Sarjapur, Bangalore</strong>. Planned across <strong>approximately 25 acres</strong>, it is expected to include <strong>around 1,400 units</strong> in <strong>2, 3, and 4 BHK configurations</strong>, with prices starting at <strong>₹1.2 Cr* onwards</strong> and possession proposed for <strong>December 2032</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    Fitness facilities, recreational spaces, clubhouse provisions, landscaped areas, children's play facilities, and community amenities are important categories for buyers to evaluate. However, the final inclusion and specifications of these facilities must be confirmed through the official Sobha Sienna amenity schedule, brochure, and approved project documents before purchase. Visit the <IntLink href="/">Sobha Sienna home page</IntLink> for a complete project overview.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AmenitiesPage;

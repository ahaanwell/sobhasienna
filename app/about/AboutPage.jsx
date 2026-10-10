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
];

function AboutPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"About"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            About Sobha Sienna – Premium Apartments by Sobha Limited in Sarjapur
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="text-gray-800">
    Welcome to the <strong>Sobha Sienna project information site</strong>. This portal brings together key details about <IntLink href="/"><strong>Sobha Sienna</strong></IntLink>, a proposed premium residential development by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>, to help homebuyers research the project in one place.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    About Sobha Sienna
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Sobha Sienna</strong> is planned across <strong>approximately 25 acres</strong> in <IntLink href="/location">Sarjapur, south-east Bangalore</IntLink>. The project is expected to offer <strong>around 1,400 units</strong> in <IntLink href="/floor-plan"><strong>2, 3 and 4 BHK configurations</strong></IntLink>, with <IntLink href="/price">prices starting at ₹1.2 Cr* onwards</IntLink> and <strong>possession proposed for December 2032</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    Detailed information on the <IntLink href="/master-plan">master plan</IntLink>, <IntLink href="/amenities">amenities</IntLink> and <IntLink href="/bangalore">living in Bangalore</IntLink> is available across this website.
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
    About Sobha Limited
  </h2>

  <p className="mt-4 text-gray-800">
    <ExtLink href="https://en.wikipedia.org/wiki/Sobha_(company)"><strong>Sobha Limited</strong></ExtLink> is a real estate developer headquartered in <strong>Bangalore</strong>. The company is known for its <strong>backward-integrated model</strong>, in which much of the design, engineering, construction and interiors work is handled in-house, giving it close control over build quality and delivery.
  </p>

  <p className="mt-4 text-gray-800">
    Bangalore is Sobha's largest market, with residential projects across the east, south-east and north of the city. You can compare Sobha Sienna with other <IntLink href="/bangalore">top Sobha projects in Bangalore</IntLink>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    About This Website
  </h2>

  <p className="mt-4 text-gray-800">
    This website is an <strong>information portal managed by a RERA-authorised real estate agent</strong>. It is <strong>not the official website of Sobha Limited</strong>. Our aim is to present project information clearly so buyers can understand prices, layouts, location and amenities before speaking to the developer.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    How We Can Help
  </h3>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li>Sharing the latest <IntLink href="/price">price list and cost sheet</IntLink>.</li>
    <li>Providing brochures, <IntLink href="/floor-plan">floor plans</IntLink> and project documents.</li>
    <li>Arranging <strong>site visits</strong> in Sarjapur.</li>
    <li>Answering questions on booking, payment plans and home loans.</li>
  </ul>

  <p className="mt-4 text-gray-800">
    Prices, specifications and timelines on this website are indicative and may change. Buyers should verify the project's registration on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> and confirm all details with the developer before booking. To speak with our team, visit the <IntLink href="/contact">contact page</IntLink>.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutPage;

/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";
import { DetailsTable, ProjectsComparison, TopProjectsList } from "@/components/TopSobhaProjects";

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

function BangalorePage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Bangalore"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Sienna Bangalore – Living in Bengaluru & Top Sobha Projects
          </h1>
          <DownloadActions/>
          <div className="mt-6 space-y-6">
            <div>
  <p className="text-gray-800">
    <ExtLink href="https://en.wikipedia.org/wiki/Bangalore"><strong>Bangalore (Bengaluru)</strong></ExtLink>, the capital of <ExtLink href="https://en.wikipedia.org/wiki/Karnataka">Karnataka</ExtLink>, is one of India's most sought-after cities to live and work in. Known as the <strong>"Silicon Valley of India"</strong>, it combines a thriving technology economy with a pleasant climate, respected educational institutions, and a large choice of residential neighbourhoods.
  </p>

  <p className="mt-4 text-gray-800">
    This page explains what makes Bangalore a strong residential destination, how <IntLink href="/"><strong>Sobha Sienna</strong></IntLink> in <strong>Sarjapur</strong> fits into the city, and how it compares with the <strong>top 5 Sobha Group projects in Bangalore</strong>.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    About Bangalore – India's Garden City and Technology Capital
  </h2>

  <p className="mt-4 text-gray-800">
    Bangalore was founded in the 16th century by <ExtLink href="https://en.wikipedia.org/wiki/Kempe_Gowda_I">Kempe Gowda I</ExtLink>, and was long known as the <strong>"Garden City"</strong> for its parks and tree-lined avenues. Located on the <ExtLink href="https://en.wikipedia.org/wiki/Deccan_Plateau">Deccan Plateau</ExtLink> at an elevation of around 900 metres, the city enjoys a <strong>moderate climate throughout the year</strong>, one of the reasons many families choose to settle here.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Economy and Employment
  </h3>

  <p className="mt-4 text-gray-800">
    Bangalore is India's leading <strong>information technology hub</strong>, home to a large number of global technology companies, start-ups and research centres. Major employment corridors include the <ExtLink href="https://en.wikipedia.org/wiki/Outer_Ring_Road,_Bangalore">Outer Ring Road</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink> and <ExtLink href="https://en.wikipedia.org/wiki/Electronic_City">Electronic City</ExtLink>. The city is also the headquarters of the <ExtLink href="https://www.isro.gov.in/">Indian Space Research Organisation (ISRO)</ExtLink> and has a strong aerospace and biotechnology presence.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Education and Healthcare
  </h3>

  <p className="mt-4 text-gray-800">
    The city hosts premier institutions such as the <ExtLink href="https://iisc.ac.in/">Indian Institute of Science (IISc)</ExtLink>, along with a wide network of schools, colleges and multi-speciality hospitals. This makes Bangalore well suited to <strong>families planning long-term residence</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Connectivity and Infrastructure
  </h3>

  <p className="mt-4 text-gray-800">
    Bangalore is served by <ExtLink href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport">Kempegowda International Airport</ExtLink>, the expanding <ExtLink href="https://english.bmrc.co.in/">Namma Metro</ExtLink> network, and city buses operated by <ExtLink href="https://mybmtc.karnataka.gov.in/">BMTC</ExtLink>. Ongoing road and metro projects continue to improve connectivity across residential growth areas in the east, south-east and north of the city.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Popular Residential Areas in Bangalore
  </h3>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li><strong>East Bangalore</strong> – Whitefield, Marathahalli and Hoskote, close to major IT parks.</li>
    <li><strong>South-East Bangalore</strong> – <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur">Sarjapur</ExtLink>, Sarjapur Road and Electronic City, popular with technology professionals.</li>
    <li><strong>North Bangalore</strong> – Hennur and surrounding areas, with access towards the airport.</li>
  </ul>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna – A New Sobha Address in Sarjapur, Bangalore
  </h2>

  <p className="mt-4 text-gray-800">
    <strong>Sobha Sienna</strong> is a proposed premium residential project by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> in <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink>. Planned across <strong>approximately 25 acres</strong>, it is expected to offer <strong>around 1,400 units</strong> in <IntLink href="/floor-plan"><strong>2, 3 and 4 BHK configurations</strong></IntLink>, with <IntLink href="/price">prices starting at ₹1.2 Cr* onwards</IntLink> and <strong>possession proposed for December 2032</strong>.
  </p>

  <p className="mt-4 text-gray-800">
    Sarjapur's position in south-east Bangalore gives residents access towards the Outer Ring Road and Electronic City employment corridors. Explore the <IntLink href="/master-plan">master plan</IntLink> and <IntLink href="/amenities">amenities</IntLink> to learn more about the project.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    Sobha Sienna Project Details
  </h3>

  <DetailsTable rows={projectDetails.map((row) => [row.label, row.value])} />
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    About Sobha Group in Bangalore
  </h2>

  <p className="mt-4 text-gray-800">
    <ExtLink href="https://en.wikipedia.org/wiki/Sobha_(company)"><strong>Sobha Limited</strong></ExtLink> is a Bangalore-headquartered real estate developer known for its <strong>backward-integrated model</strong>, in which much of the design, construction and interiors work is handled in-house. Bangalore is the company's largest market, with residential projects across the east, south-east and north of the city.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Top 5 Sobha Group Projects in Bangalore
  </h2>

  <p className="mt-4 text-gray-800">
    Alongside <strong>Sobha Sienna</strong>, here are five other <strong>Sobha projects in Bangalore</strong> that homebuyers frequently compare.
  </p>

  <TopProjectsList />
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Projects in Bangalore – Quick Comparison
  </h2>

  <ProjectsComparison />
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Projects in Bangalore – Frequently Asked Questions
  </h2>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    1. Where is Sobha Sienna located in Bangalore?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna is located in <strong>Sarjapur, south-east Bangalore</strong>.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    2. What is the starting price of Sobha Sienna?
  </h3>
  <p className="mt-2 text-gray-800">
    Sobha Sienna prices start at <strong>₹1.2 Cr* onwards</strong> for a 2 BHK apartment. 3 and 4 BHK prices are available on request.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    3. Which are the top Sobha projects in Bangalore?
  </h3>
  <p className="mt-2 text-gray-800">
    Popular Sobha projects in Bangalore include <strong>Sobha One World</strong>, <strong>Sobha Liora</strong>, <strong>Sobha Hennur</strong>, <strong>Sobha Neopolis</strong> and <strong>Sobha Madison Heights</strong>, along with the new <strong>Sobha Sienna</strong> in Sarjapur.
  </p>

  <h3 className="mt-6 text-xl font-semibold text-gray-800">
    4. Why is Bangalore a good city to buy a home?
  </h3>
  <p className="mt-2 text-gray-800">
    Bangalore offers a strong technology job market, a moderate climate, reputed educational institutions, an expanding metro network and a wide choice of residential neighbourhoods.
  </p>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Sobha Sienna Bangalore – Final Overview
  </h2>

  <p className="mt-4 text-gray-800">
    Bangalore's technology economy, pleasant climate and growing infrastructure continue to make it one of India's leading residential markets. Within this city, <strong>Sobha Sienna</strong> brings a <strong>25-acre</strong>, <strong>~1,400-unit</strong> Sobha community to <strong>Sarjapur</strong>, with <strong>2, 3 and 4 BHK apartments from ₹1.2 Cr*</strong> and <strong>possession proposed for December 2032</strong>. Visit the <IntLink href="/">Sobha Sienna home page</IntLink> or check the <IntLink href="/price">latest price list</IntLink> to take the next step.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default BangalorePage;

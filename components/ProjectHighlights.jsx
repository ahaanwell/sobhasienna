/* eslint-disable react/no-unescaped-entities */

import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { ExtLink, IntLink } from "./SeoLinks";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ 1.2 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "On Request",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "25 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "1400 Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Floor Structure",
    value: "On Request",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "On Request",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sobha Group",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "Dec 2032",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sobha Sienna project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">
    Sobha Sienna Bangalore: Where Modern Homes Meet Prime Sarjapur Living
  </h2>

  <p>
    <strong>Sobha Sienna</strong> is a premium apartment project set to be built in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore"><strong>Bangalore</strong></ExtLink>. The Project will span about <strong>25 acres</strong> and include a mix of <IntLink href="/floor-plan"><strong>2-, 3-, and 4-BHK apartments</strong></IntLink>. Sobha Sienna is planned to have about <strong>1,400 units</strong> and will be a large residential development for families seeking spacious homes in one of Bangalore's famous employment and residential corridors.
  </p>

  <p>
    <ExtLink href="https://www.sobha.com/"><strong>Sobha</strong></ExtLink> is proposing the project around high-end city living, with living areas, green spaces, and lifestyle services all in one place. The suggested layout gives buyers several options based on price, family size, and room needs.
  </p>

  <p>
    Based on the information we have so far, <strong>Sobha Sienna</strong> is projected to have a planned ownership timeline of <strong>December 2032</strong>. We are still in the early stages of the Project, so some information may change as it goes along. For example, the final apartment sizes, tower details, floor-by-floor layouts, <IntLink href="/price">prices</IntLink>, and RERA registration information may all change.
  </p>

  <p>
    Sobha Sienna aims to create a place to live where people can access daily living services without leaving the community for every activity. The size of the piece of land also determines how it can be developed, including landscaping areas, internal roads, leisure areas, and shared services.
  </p>

  <p>
    Different types of buyers may be interested in the planned <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK layouts</strong></IntLink>. A 2 BHK home might suit small families and single people, while a 3 BHK home can give families who need more space extra rooms. People who want bigger homes with more private and shared living spaces are likely to be interested in the 4 BHK flats.
  </p>

  <p>
    Another important point is that the project is in <IntLink href="/location"><strong>Sarjapur</strong></IntLink>. Sarjapur and the surrounding areas have become major residential hubs in southeast Bangalore. These areas are close to workplaces, schools, hospitals, shopping malls, and other urban infrastructure. Sobha says <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur_Road">Sarjapur Road</ExtLink> is becoming a more popular place to live because of nearby jobs and social facilities.
  </p>

  <p>
    So, the Project shouldn't be looked at in isolation, but in the context of the Sarjapur home market as a whole.
  </p>

  <p>
    Right now, buyers should also be able to tell the difference between information that is just a guess about a project and information that will become official once the Project is approved and documented. Current information says the Project will have about <strong>1,400 units</strong>, a <strong>25-acre plot of land</strong>, and will be ready for move-in in <strong>December 2032</strong>. After approvals and the Project is officially registered on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>, the final numbers may change.
  </p>
</div>
      </div>
    </section>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

const topProjects = [
  {
    name: "Sobha One World",
    intro: (
      <>
        <strong>Sobha One World</strong> is a large themed apartment township located off <ExtLink href="https://en.wikipedia.org/wiki/Hoskote">Hoskote</ExtLink> in East Bangalore, opposite the Hoskote Toll Plaza. Spread across <strong>350 acres</strong>, it is planned with <strong>3,484 Vaastu-aligned units</strong> in 1, 2, 3 and 4 BHK variants, with prices from <strong>₹1.09 Cr onwards</strong>.
      </>
    ),
    details: [
      ["Location", "Off Hoskote, East Bangalore (Opposite Hoskote Toll Plaza)"],
      ["Project Type", "Luxury Themed Apartments"],
      ["Total Land Area", "350 Acres"],
      ["Metro Access", "Kadugudi-Whitefield Metro Station"],
      ["Unit Variants", "1, 2, 3 & 4 BHK Apartments"],
      ["Total Units", "3,484 Vaastu-aligned Units"],
      ["Towers & Floors", "3B + GF + 46"],
      ["Starting Price", "₹1.09 Cr Onwards"],
      ["RERA", "Awaiting Approval (Pre-launch Phase)"],
      ["Possession", "2031 Onwards (Tentative)"],
    ],
  },
  {
    name: "Sobha Liora",
    intro: (
      <>
        <strong>Sobha Liora</strong> is a luxury residential project at Immadihalli in <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink>, Bangalore. Planned on <strong>7 acres</strong> with <strong>80% open space</strong>, it offers around <strong>420 units</strong> of 3, 3.5 and 4 BHK apartments across 4 towers, with possession in <strong>December 2030</strong>.
      </>
    ),
    details: [
      ["Location", "Whitefield, Immadihalli, Bangalore"],
      ["Project Type", "Luxury Residential Apartments"],
      ["Status", "Pre-Launch"],
      ["Land Area", "7 Acres"],
      ["Total Units", "420 Units Approx."],
      ["Configurations", "3, 3.5 & 4 BHK Apartments"],
      ["Towers & Floors", "4 Towers | 2B + G + 17 Floors"],
      ["Open Space", "80% Open Space"],
      ["Starting Price", "On Request"],
      ["Approvals", "RERA & BBMP Approved"],
      ["Possession", "December 2030"],
      ["Developer", "Sobha Group"],
    ],
  },
  {
    name: "Sobha Hennur",
    intro: (
      <>
        <strong>Sobha Hennur</strong> is a large-scale development on Hennur Main Road in North Bangalore. The project spans <strong>45 acres</strong>, with <strong>Phase 1 covering approximately 17 acres</strong>, and is planned with <strong>4,400+ units</strong> of 2, 3, 3.5 and 4 BHK apartments priced from <strong>₹2.40 Cr onwards</strong>.
      </>
    ),
    details: [
      ["Location", "Hennur Main Road, North Bangalore"],
      ["Project Status", "Pre-Launch"],
      ["RERA Status", "Approval under process"],
      ["Total Development Area", "45 Acres"],
      ["Phase 1", "Approximately 17 Acres"],
      ["Total Units", "4,400+"],
      ["Configurations", "2, 3, 3.5 & 4 BHK Apartments"],
      ["Apartment Sizes", "1,500 – 2,230 Sq.Ft."],
      ["Starting Price", "₹2.40 Cr Onwards"],
      ["Possession", "Expected by 2030"],
      ["Developer", "SOBHA Limited"],
    ],
  },
  {
    name: "Sobha Neopolis",
    intro: (
      <>
        <strong>Sobha Neopolis</strong> is a Greek-inspired luxury apartment project on Panathur Road, off the <ExtLink href="https://en.wikipedia.org/wiki/Marathahalli">Marathahalli</ExtLink>–Outer Ring Road stretch. It covers <strong>25.86 acres</strong> with <strong>1,875 apartments</strong> in 19 high-rise towers and about <strong>78% open space</strong>, with prices from <strong>₹95 Lakhs*</strong> and possession in <strong>December 2027</strong>.
      </>
    ),
    details: [
      ["Location", "Panathur Road, Off Marathahalli-ORR, Bengaluru 560087"],
      ["Project Type", "Luxury Residential Apartments"],
      ["Theme", "Greek-inspired Architecture"],
      ["Total Land Area", "25.86 Acres"],
      ["Total Units", "1,875 Apartments"],
      ["Towers", "19 High-rise Towers"],
      ["Structure", "2 Basements + Ground + 18 Floors"],
      ["Open Space", "Approximately 78%"],
      ["Starting Price", "₹95 Lakhs*"],
      ["Status", "New Launch"],
      ["Possession", "December 2027"],
      ["RERA No.", "PRM/KA/RERA/1251/446/PR/200923/006269"],
      ["Developer", "Sobha Limited"],
    ],
  },
  {
    name: "Sobha Madison Heights",
    intro: (
      <>
        <strong>Sobha Madison Heights</strong> is a <strong>33-acre</strong> township on Main Hosur Road in the Attibele Industrial Area, near <ExtLink href="https://en.wikipedia.org/wiki/Electronic_City">Electronic City</ExtLink>. It features <strong>1,120 units</strong> in 42-storey high-rises, with 1, 2, 3 and 4 BHK apartments from 754 to 2,846 sq. ft. and prices starting at <strong>₹70 Lakhs</strong>.
      </>
    ),
    details: [
      ["Location", "Electronic City, Main Hosur Road, Attibele Industrial Area, Bengaluru 562107"],
      ["Township Area", "33 Acres"],
      ["Total Units", "1,120"],
      ["Towers", "42-Storeyed High-Rises"],
      ["Apartment Variants", "1, 2, 3 & 4 BHK"],
      ["Super Built-Up Area", "754 – 2,846 sq.ft."],
      ["Starting Price", "₹70 Lakhs"],
      ["RERA No.", "PRM/KA/RERA/1251/308/PR/230125/007420 || 007421"],
    ],
  },
];

const comparison = [
  { name: "Sobha Sienna", location: "Sarjapur", area: "~25 Acres", units: "~1,400", price: "₹1.2 Cr*", possession: "Dec 2032" },
  { name: "Sobha One World", location: "Off Hoskote", area: "350 Acres", units: "3,484", price: "₹1.09 Cr", possession: "2031 onwards" },
  { name: "Sobha Liora", location: "Whitefield", area: "7 Acres", units: "~420", price: "On Request", possession: "Dec 2030" },
  { name: "Sobha Hennur", location: "Hennur Main Road", area: "45 Acres", units: "4,400+", price: "₹2.40 Cr", possession: "By 2030" },
  { name: "Sobha Neopolis", location: "Panathur Road", area: "25.86 Acres", units: "1,875", price: "₹95 Lakhs*", possession: "Dec 2027" },
  { name: "Sobha Madison Heights", location: "Electronic City", area: "33 Acres", units: "1,120", price: "₹70 Lakhs", possession: "Not specified" },
];

export function DetailsTable({ rows }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-left text-gray-800 text-sm md:text-base">
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
          {rows.map(([label, value]) => (
            <tr key={label}>
              <td className="border border-gray-300 px-4 py-3">{label}</td>
              <td className="border border-gray-300 px-4 py-3 [overflow-wrap:anywhere]">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The five project write-ups, each with an h3 and a details table. */
export function TopProjectsList() {
  return topProjects.map((project, i) => (
    <div key={project.name}>
      <h3 className="mt-8 text-xl font-semibold text-gray-800">
        {i + 1}. {project.name}
      </h3>
      <p className="mt-4 text-gray-800">{project.intro}</p>
      <DetailsTable rows={project.details} />
    </div>
  ));
}

/** Side-by-side comparison of Sobha Sienna and the five projects, plus the verification note. */
export function ProjectsComparison() {
  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm md:text-base">
          <thead>
            <tr className="border bg-primary text-white border-gray-200">
              <th className="py-2 px-2 font-bold text-left">Project</th>
              <th className="py-2 px-2 font-bold text-left">Location</th>
              <th className="py-2 px-2 font-bold text-left">Land Area</th>
              <th className="py-2 px-2 font-bold text-left">Units</th>
              <th className="py-2 px-2 font-bold text-left">Starting Price</th>
              <th className="py-2 px-2 font-bold text-left">Possession</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.name} className="border-b border-gray-300 hover:bg-gray-50 transition">
                <td className="py-2 px-2 font-semibold text-gray-800">{row.name}</td>
                <td className="py-2 px-2 text-gray-800">{row.location}</td>
                <td className="py-2 px-2 text-gray-800">{row.area}</td>
                <td className="py-2 px-2 text-gray-800">{row.units}</td>
                <td className="py-2 px-2 text-primary font-medium">{row.price}</td>
                <td className="py-2 px-2 text-gray-800">{row.possession}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-800">
        Project details are indicative and subject to change. Buyers should verify RERA registration on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> and confirm prices and specifications with the developer before booking.
      </p>
    </>
  );
}

/** Home page section. */
export default function TopSobhaProjects() {
  return (
    <section
      id="top-sobha-projects"
      aria-labelledby="top-sobha-projects-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="top-sobha-projects-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Top 5 Sobha Group Projects in Bangalore
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <p className="text-gray-800">
          Alongside <strong>Sobha Sienna</strong> in <IntLink href="/location"><strong>Sarjapur</strong></IntLink>, <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> is developing several other residential projects across <ExtLink href="https://en.wikipedia.org/wiki/Bangalore"><strong>Bangalore</strong></ExtLink>. Here are five <strong>Sobha projects in Bangalore</strong> that homebuyers frequently compare.
        </p>

        <TopProjectsList />

        <h3 className="mt-10 text-xl font-semibold text-gray-800">
          Sobha Projects in Bangalore – Quick Comparison
        </h3>

        <ProjectsComparison />

        <p className="mt-4 text-gray-800">
          Read more about <IntLink href="/bangalore">living in Bangalore and top Sobha projects</IntLink>.
        </p>
      </div>
    </section>
  );
}

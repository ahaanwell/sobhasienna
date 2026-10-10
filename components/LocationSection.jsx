/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import Link from "next/link";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124474.70438536095!2d77.788921!3d12.853963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72e11fe62b7f%3A0x90fb58b42c41430f!2sSarjapura%2C%20Bengaluru%2C%20Karnataka%20562125!5e0!3m2!1sen!2sin!4v1790876519496!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white py-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location and Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 my-6">
  <p>
    <strong>Sobha Sienna</strong> is situated in <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur</strong></ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Bangalore"><strong>Bangalore</strong></ExtLink>, a well developed residential and technology corridor in Southeast Bangalore. The location is close to major roads, employment centers, schools, hospitals, shopping destinations and other everyday amenities.
  </p>

  <p>
    Sarjapur has become a preferred residential destination for professionals working across the <ExtLink href="https://en.wikipedia.org/wiki/Outer_Ring_Road,_Bangalore">Outer Ring Road</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Electronic_City">Electronic City</ExtLink> and the Sarjapur IT corridor. Its road network connects the area to key parts of East and South Bangalore, and the neighborhood has developed a strong social infrastructure ecosystem.
  </p>
</div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sobha Sienna location map — Sarjapur, Bangalore"
              aria-label="Google Maps showing Sobha Sienna location in Sarjapur, Bangalore"
            />
          </div>

          <Link
            href="/location"
            aria-label="Know more about Sobha Sienna location in Sarjapur, Bangalore"
            className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>
        <div className="mt-6 space-y-6">
          <div className="space-y-6 text-gray-800">
  <h3 className="text-xl font-bold">
    Key Location Highlights
  </h3>

  <p>
    <strong>Sarjapur Road:</strong> Sobha Sienna is in the Sarjapur residential corridor and is well connected to all the major roads.
  </p>

  <p>
    <strong>Carmelaram Railroad Station:</strong> About 8–10 km from the Sarjapur Road belt, a major corridor.
  </p>

  <p>
    <strong>Proposed Sarjapur/Metro Connectivity:</strong> Proposed <ExtLink href="https://english.bmrc.co.in/">Namma Metro</ExtLink> connectivity is likely to improve public transport access to the locality.
  </p>

  <p>
    <strong>Metro area around Dommasandra:</strong> The metro alignment around Dommasandra is proposed to be around 3-7 km away from different parts of the Sarjapur corridor.
  </p>

  <p>
    <strong>Outer Ring Road:</strong> ~13-15 km from the deeper Sarjapur belt, with access to <ExtLink href="https://en.wikipedia.org/wiki/Bellandur">Bellandur</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Marathahalli">Marathahalli</ExtLink>, and the major IT parks.
  </p>

  <p>
    <strong><ExtLink href="https://en.wikipedia.org/wiki/Wipro">Wipro</ExtLink> SEZ:</strong> About 7-10 km from various residential pockets of Sarjapur.
  </p>

  <p>
    <strong>RGA Tech Park:</strong> Located 8- 10 km from the larger Sarjapur road corridor.
  </p>

  <p>
    <strong>Electronic City:</strong> Roughly 18–22 km, depending on the route and exact starting point.
  </p>

  <p>
    <strong>Whitefield:</strong> 15–20 km via the connecting road network.
  </p>

  <p>
    <strong><ExtLink href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport">Kempegowda International Airport</ExtLink>:</strong> 45- 50 km by road (depending on the route taken)
  </p>

  <p>
    <strong>Schools:</strong> Several reputed schools and international institutions are located in the wider Sarjapur area.
  </p>

  <p>
    <strong>Hospitals:</strong> Multi-specialty and local healthcare centers are available around Sarjapur Road and nearby areas.
  </p>

  <p>
    These are indicative distances for the Sarjapur corridor and may differ depending on the final project access point and route.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Sobha Sienna Connectivity at a Glance
  </h2>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Connectivity / Destination
        </th>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Approx. Distance
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Sarjapur Main Road</td>
        <td className="border border-gray-300 px-4 py-3">Immediate access</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Carmelaram Railway Station</td>
        <td className="border border-gray-300 px-4 py-3">8–10 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Proposed Dommasandra Metro Station</td>
        <td className="border border-gray-300 px-4 py-3">3–7 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">NH 44 / Hosur Road</td>
        <td className="border border-gray-300 px-4 py-3">8–12 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Outer Ring Road</td>
        <td className="border border-gray-300 px-4 py-3">13–15 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Wipro SEZ</td>
        <td className="border border-gray-300 px-4 py-3">7–10 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">RGA Tech Park</td>
        <td className="border border-gray-300 px-4 py-3">8–10 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">RMZ Ecoworld</td>
        <td className="border border-gray-300 px-4 py-3">12–15 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Embassy TechVillage</td>
        <td className="border border-gray-300 px-4 py-3">12–15 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Electronic City</td>
        <td className="border border-gray-300 px-4 py-3">18–22 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Whitefield</td>
        <td className="border border-gray-300 px-4 py-3">15–20 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">ITPL</td>
        <td className="border border-gray-300 px-4 py-3">18–22 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Kempegowda International Airport</td>
        <td className="border border-gray-300 px-4 py-3">45–50 km</td>
      </tr>
    </tbody>
  </table>
  </div>

  <h3 className="text-xl font-bold">
    Road Connectivity
  </h3>

  <p>
    One of the biggest advantages of the Sarjapur location is the road connectivity. <ExtLink href="https://en.wikipedia.org/wiki/Sarjapur"><strong>Sarjapur Main Road</strong></ExtLink> is the area's main artery, linking residential neighborhoods to the Outer Ring Road and other major corridors.
  </p>

  <p>
    The road network connects to Dommasandra, Varthur, Carmelaram, Bellandur, Whitefield and Electronic City. Connectivity to the southern side of Bangalore is through <ExtLink href="https://en.wikipedia.org/wiki/National_Highway_44_(India)">NH 44</ExtLink> and Hosur Road. The ORR connects the residents to major employment hubs in East Bangalore.
  </p>

  <p>
    For <strong>Sobha Sienna</strong> residents, this means they have several route options available to reach their destination. Someone working at RGA Tech Park can use the Sarjapur corridor, while someone traveling toward Bellandur or RMZ Ecoworld can use the ORR. Electronic City is connected by the southern road network.
  </p>

  <h3 className="text-xl font-bold">
    Rail &amp; Metro Connectivity
  </h3>

  <p>
    Public transport connectivity is an important factor in Sarjapur's future growth. Carmelaram Railroad Station is one of the major railway stations serving the Sarjapur Road area, usually located about 8-10 km from the broader residential corridor. It is yet another travel option for the people moving to different parts of Bangalore.
  </p>

  <p>
    The proposed extension of the <ExtLink href="https://en.wikipedia.org/wiki/Namma_Metro">Namma Metro</ExtLink> network toward Sarjapur is also expected to enhance connectivity to the area. Once operational, the proposed stations in the Dommasandra and Sarjapur corridor are expected to improve access to public transport.
  </p>

  <p>
    <strong>Key transit points include:</strong>
  </p>

  <ul className="list-disc pl-6">
    <li>Carmelaram Railway Station – approximately 8–10 km</li>
    <li>Proposed Dommasandra Metro Station – approximately 3–7 km depending on the project access point</li>
    <li>NH 44 / Hosur Road – approximately 8–12 km</li>
    <li>Outer Ring Road – approximately 13–15 km</li>
  </ul>

  <p>
    The metro should be considered a future connectivity advantage, while the existing road and railway network already serves the locality.
  </p>

  <h3 className="text-xl font-bold">
    Connectivity to Major IT Hubs
  </h3>

  <p>
    Sarjapur is an attractive choice for professionals because of its proximity to many large technology and business centers.
  </p>

  <p>
    Wipro SEZ and RGA Tech Park are prominent employment destinations in the Sarjapur corridor. The ORR also connects to business campuses such as RMZ Ecoworld, Embassy TechVillage, Pritech Park, and many others.
  </p>

  <p>
    This proximity makes the location perfect for professionals who want to minimize cross-city travel for their daily commute.
  </p>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">
          IT / Business Hub
        </th>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Approx. Distance
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Wipro SEZ</td>
        <td className="border border-gray-300 px-4 py-3">7–10 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">RGA Tech Park</td>
        <td className="border border-gray-300 px-4 py-3">8–10 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">RMZ Ecoworld</td>
        <td className="border border-gray-300 px-4 py-3">12–15 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Embassy TechVillage</td>
        <td className="border border-gray-300 px-4 py-3">12–15 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Pritech Park</td>
        <td className="border border-gray-300 px-4 py-3">13–16 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Prestige Tech Park</td>
        <td className="border border-gray-300 px-4 py-3">14–17 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Electronic City</td>
        <td className="border border-gray-300 px-4 py-3">18–22 km</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Whitefield ITPL</td>
        <td className="border border-gray-300 px-4 py-3">18–22 km</td>
      </tr>
    </tbody>
  </table>
  </div>

  <h3 className="text-xl font-bold">
    Education Infrastructure
  </h3>

  <p>
    The Sarjapur corridor has emerged as an important education zone with schools offering <ExtLink href="https://www.cbse.gov.in/">CBSE</ExtLink>, <ExtLink href="https://cisce.org/">ICSE</ExtLink>, <ExtLink href="https://www.ibo.org/">IB</ExtLink> and international boards. Several established institutions are based in the wider neighborhood.
  </p>

  <p>
    You can reach Indus International School, Oakridge International School, Greenwood High International School, TISB, and other schools from different places in the Sarjapur belt. Exact distances vary depending on where you are on Sarjapur Road.
  </p>

  <p>
    <strong>Important schools in the surrounding area include:</strong>
  </p>

  <ul className="list-disc pl-6">
    <li>Indus International School</li>
    <li>Oakridge International School</li>
    <li>The International School Bangalore</li>
    <li>Greenwood High International School</li>
    <li>Silver Oaks International School</li>
    <li>Inventure Academy</li>
    <li>Global Indian International School</li>
    <li>New Oxford High School</li>
  </ul>

  <p>
    The concentration of schools makes Sarjapur a practical location for families with school-going children.
  </p>

  <h3 className="text-xl font-bold">
    Healthcare Facilities
  </h3>

  <p>
    Another big plus of the Sarjapur corridor is its healthcare infrastructure. Residents here have connectivity to hospitals and medical centers on Sarjapur Road, Dommasandra, and the ORR belt.
  </p>

  <p>
    Depending on the exact location, residents can access hospitals such as Spandana Hospital, Manipal Hospitals, Motherhood Hospital, Apollo facilities, and Sakra World Hospital from the wider Sarjapur area.
  </p>

  <p>
    The surrounding residential areas also have clinics, pharmacies, and neighborhood healthcare centers to cater to day-to-day medical needs, in addition to the larger hospitals.
  </p>

  <h3 className="text-xl font-bold">
    Daily convenience &amp; shopping
  </h3>

  <p>
    <strong>Sobha Sienna</strong> residents can avail of an increasing number of retail and daily-use facilities around Sarjapur Road. Supermarkets, local shops, restaurants, cafes, banks, pharmacies and other services are dotted along the residential corridor.
  </p>

  <p>
    D-Mart and Decathlon are popular retail destinations around Sarjapur, while larger shopping and entertainment options are available toward Whitefield and the ORR.
  </p>

  <p>
    <strong>Retail and lifestyle destinations include:</strong>
  </p>

  <ul className="list-disc pl-6">
    <li>D-Mart</li>
    <li>Decathlon Sarjapur Road</li>
    <li>Market Square Mall</li>
    <li>Nexus Whitefield</li>
    <li>Brookfield retail zone</li>
    <li>Phoenix Marketcity</li>
    <li>Restaurants and cafes along Sarjapur Road</li>
  </ul>

  <p>
    It gives residents the convenience of both daily shopping and larger retail destinations without having to travel to central Bangalore.
  </p>

  <h3 className="text-xl font-bold">
    Connectivity Whitefield
  </h3>

  <p>
    <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore"><strong>Whitefield</strong></ExtLink> is one of Bangalore's major IT and residential hubs and remains an important destination from Sarjapur.
  </p>

  <p>
    The road network through <ExtLink href="https://en.wikipedia.org/wiki/Varthur">Varthur</ExtLink> and the ORR leads to Whitefield and <ExtLink href="https://en.wikipedia.org/wiki/International_Tech_Park,_Bangalore">ITPL</ExtLink>. The distance from different parts of Sarjapur is around 15-20 km, depending on the route taken.
  </p>

  <p>
    This connectivity benefits professionals working in Whitefield and families who want access to the area's schools, malls, hospitals, and entertainment facilities.
  </p>

  <h3 className="text-xl font-bold">
    Connectivity to Electronic City
  </h3>

  <p>
    Sarjapur also connects to <strong>Electronic City</strong> through the southern road network, another major employment hub.
  </p>

  <p>
    The distance is around 18-22 km from the larger Sarjapur corridor, but the actual distance traveled will depend on the project location and the route taken. This connectivity is especially significant for people working in the southern IT corridor, as Electronic City houses big tech companies and employment campuses.
  </p>

  <h3 className="text-xl font-bold">
    Airport Link
  </h3>

  <p>
    The <strong>Kempegowda International Airport</strong> is located in North Bangalore and is approximately <strong>45-50 km</strong> away from the larger Sarjapur corridor by road.
  </p>

  <p>
    So, traveling to the airport is a longer trip across the city than to nearby business and residential destinations. However, the road network allows access toward the airport via Bangalore's major arterial roads and highway connections.
  </p>

  <h3 className="text-xl font-bold">
    Sarjapur as a Residential Hub
  </h3>

  <p>
    <strong>Sarjapur</strong> is a well-established residential market because of its mix of employment opportunities and social infrastructure. The area is full of premium apartments, gated communities, villas and plotted developments.
  </p>

  <p>
    Its biggest strength is its connectivity to multiple employment corridors. It isn't dependent on a single business district; residents have access to Sarjapur's IT corridor, ORR, Whitefield, and Electronic City.
  </p>

  <p>
    Schools and hospitals draw families, enhancing the residential appeal. For working professionals, proximity to major technology parks can make daily commuting more convenient.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Sobha Sienna Location Advantages
  </h2>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">Location Factor</th>
        <th className="border border-gray-300 px-4 py-3 text-left">Advantage for Residents</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Sarjapur Address</td>
        <td className="border border-gray-300 px-4 py-3">Established residential and technology corridor</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Road Network</td>
        <td className="border border-gray-300 px-4 py-3">Easy access to major South-East Bangalore routes</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Railway</td>
        <td className="border border-gray-300 px-4 py-3">Carmelaram Railway Station within the wider corridor</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Metro</td>
        <td className="border border-gray-300 px-4 py-3">Proposed metro connectivity towards Sarjapur/ Dommasandra</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">IT Parks</td>
        <td className="border border-gray-300 px-4 py-3">Wipro SEZ and RGA Tech Park within the Sarjapur belt</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">ORR Access</td>
        <td className="border border-gray-300 px-4 py-3">Connection to Bellandur and major business parks</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Education</td>
        <td className="border border-gray-300 px-4 py-3">Multiple reputed schools and international institutions</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Healthcare</td>
        <td className="border border-gray-300 px-4 py-3">Hospitals and medical centres across Sarjapur and ORR</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Shopping</td>
        <td className="border border-gray-300 px-4 py-3">Supermarkets, malls, restaurants and lifestyle destinations</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Whitefield</td>
        <td className="border border-gray-300 px-4 py-3">Connected through the eastern road network</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Electronic City</td>
        <td className="border border-gray-300 px-4 py-3">Accessible through southern Bangalore routes</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Airport</td>
        <td className="border border-gray-300 px-4 py-3">Connected through Bangalore&apos;s wider road network</td>
      </tr>
    </tbody>
  </table>
  </div>

  <h2 className="text-2xl font-bold">
    Why the Sarjapur Location Works for Sobha Sienna
  </h2>

  <p>
    The <IntLink href="/location">location</IntLink> gives <strong>Sobha Sienna</strong> an address in one of Bangalore&apos;s active residential corridors. Sarjapur is well connected to employment hubs and home to schools, healthcare facilities, retail outlets, and everyday conveniences, making it a preferred choice for end users and families.
  </p>

  <p>
    The existing road network remains the main connectivity advantage, with railroad and proposed metro infrastructure offering additional options. Wipro SEZ, RGA Tech Park, the ORR business belt, Whitefield, and Electronic City are all part of the wider connectivity network, and residents can stay connected to many key parts of Bangalore.
  </p>

  <p>
    <strong>Sobha Sienna Sarjapur</strong> offers the advantage of living in a growing residential neighborhood while staying connected to the city&apos;s major work, education, healthcare, and lifestyle destinations for buyers seeking a premium apartment in Southeast Bangalore.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Why Invest in Sobha Sienna?
  </h2>

  <p>
    <strong>Sobha Sienna</strong> is a premium residential project situated in <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink>. It spans around <strong>25 acres</strong> and offers <IntLink href="/floor-plan"><strong>2, 3, and 4 BHK apartments</strong></IntLink>, with <IntLink href="/price">prices from ₹1.2 Cr* onwards</IntLink>. The Project is located in one of Southeast Bangalore&apos;s established residential and employment corridors, with connectivity to major IT hubs, schools, hospitals, retail destinations, and key roads.
  </p>

  <p>
    The investment case for Sobha Sienna is tied to its Sarjapur location, premium apartment configurations, large project scale, Vastu-compliant planning, proposed possession timeline, and access to Bangalore&apos;s major employment zones.
  </p>

  <h3 className="text-xl font-bold">1. Strategic Sarjapur Location</h3>

  <p>
    Location is one of the most important factors supporting a residential property&apos;s investment potential, and Bangalore&apos;s Sarjapur has become a prominent residential corridor.
  </p>

  <p>
    <strong>Connectivity:</strong> The area is well connected to key parts of the city, including the Outer Ring Road, Bellandur, Whitefield, Electronic City, and the larger Sarjapur IT corridor. This provides access to a large employment catchment for the Project.
  </p>

  <p>
    <strong>The main locational advantages are</strong>
  </p>

  <ul className="list-disc pl-6">
    <li>Connectivity to Sarjapur Road and other major arterial roads</li>
    <li>Connectivity toward Outer Ring Rd</li>
    <li>Reach Whitefield &amp; East Bangalore</li>
    <li>Connectivity to Electronic City</li>
    <li>Various schools and hospitals throughout the area</li>
    <li>Established nearby residential communities</li>
    <li>Increasing commercial and retail infrastructure</li>
  </ul>

  <p>
    One of the most important things for investors is that the city has multiple employment hubs, as residential demand in a locality is usually supported by nearby workplaces.
  </p>

  <h3 className="text-xl font-bold">2. Access to Major IT and Job Hubs</h3>

  <p>
    Sarjapur is surrounded by some of Bangalore&apos;s important technology and business hubs. RGA Tech Park, Wipro&apos;s Sarjapur campus, the IT belt of Outer Ring Road, Whitefield and Electronic City are part of the wider employment catchment.
  </p>

  <p>
    This opens the possibility for a broader range of residential tenants. Professionals working in different parts of Southeast and East Bangalore can consider Sarjapur depending upon their workplace and commuting requirements.
  </p>

  <p>
    Given the property&apos;s rental potential and its connectivity to several employment zones, it further reduces dependence on a single office district.
  </p>

  <h3 className="text-xl font-bold">3. Premium 2, 3 and 4 BHK Configuration Mix</h3>

  <p>
    Sobha Sienna offers <strong>2, 3 and 4 BHK apartments</strong>, allowing the project to cater to different family requirements.
  </p>

  <p>
    This configuration mix can also support different buyer and tenant segments.
  </p>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">Configuration</th>
        <th className="border border-gray-300 px-4 py-3 text-left">Potential Buyer / Tenant Segment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">2 BHK</td>
        <td className="border border-gray-300 px-4 py-3">Couples, small families and working professionals</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">3 BHK</td>
        <td className="border border-gray-300 px-4 py-3">Growing families looking for additional space</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">4 BHK</td>
        <td className="border border-gray-300 px-4 py-3">Larger families and buyers seeking premium residences</td>
      </tr>
    </tbody>
  </table>
  </div>

  <p>
    Multiple configurations give investors more flexibility in selecting a property that fits their budget and target segment.
  </p>

  <h3 className="text-xl font-bold">4. Large Residential Development, 25 Acres</h3>

  <p>
    The proposed <IntLink href="/master-plan"><strong>25-acre land parcel</strong></IntLink> provides <strong>Sobha Sienna</strong> with a sizeable development footprint. Larger residential projects can support greater internal planning, landscaped areas, community facilities and lifestyle amenities than a compact apartment development.
  </p>

  <p>
    The benefit for buyers extends beyond the apartment itself. The overall project environment, internal facilities, and residential community can be important factors in choosing a home or rental property.
  </p>

  <p>
    Depending on the final project plan and approvals, the proposed <strong>1,400 or so units</strong> would also create a large residential community.
  </p>

  <h3 className="text-xl font-bold">5. Luxury Residential Positioning</h3>

  <p>
    First, Sobha Sienna is a premium residential apartment project, not a basic housing project. This positioning appeals to buyers looking for modern homes in an established residential corridor of Bangalore.
  </p>

  <p>
    The combination of a premium developer brand, a larger land parcel, multiple apartment configurations, and planned lifestyle infrastructure gives the Project a broader residential proposition.
  </p>

  <p>
    The premium segment also gives investors access to buyers and tenants who want more than basic accommodation. When a property enters the rental or resale market, factors like apartment layout, amenities, security, open spaces, and community facilities can shape its appeal.
  </p>

  <h3 className="text-xl font-bold">6. Vastu-Friendly Apartment Planning</h3>

  <p>
    <ExtLink href="https://en.wikipedia.org/wiki/Vastu_shastra">Vastu</ExtLink> principles are incorporated in the design approach of <strong>Sobha Sienna</strong> apartment layouts. This can be a significant factor for homebuyers in India, particularly families looking for Vastu-oriented residences.
  </p>

  <p>
    Beyond Vastu planning, the layouts focus on practical space use, defined living areas, and comfortable movement within the apartment.
  </p>

  <p>
    As a result, the houses combine traditional planning preferences with contemporary residential requirements.
  </p>

  <h3 className="text-xl font-bold">7. Strong Social Infrastructure in and around Sarjapur</h3>

  <p>
    The location of an investment property is more than simply the distance from offices. Schools, hospitals, shopping hubs and everyday services also influence residential demand.
  </p>

  <p>
    Sarjapur has developed a wide network of social infrastructure, including schools, healthcare facilities, supermarkets, restaurants, and retail destinations across the corridor.
  </p>

  <p>
    The surrounding infrastructure is:
  </p>

  <ul className="list-disc pl-6">
    <li>Renowned Schools &amp; Global Institutions</li>
    <li>Multi-speciality hospitals</li>
    <li>Daily need stores and supermarkets</li>
    <li>Shopping and entertainment venues</li>
    <li>Restaurants and cafés</li>
    <li>Banking and financial services</li>
    <li>Local health care and service providers</li>
  </ul>

  <p>
    This infrastructure supports end-user demand and the area&apos;s overall residential character.
  </p>

  <h3 className="text-xl font-bold">8. Connection to Serve Future Demand</h3>

  <p>
    The Sarjapur corridor continues to attract attention because of its road and public transport infrastructure. The locality is well connected to major parts of Southeast Bangalore through existing roads, and proposed metro connectivity could add another public transport option in the future.
  </p>

  <p>
    Infrastructure should not be seen as an assurance of future returns, but as one component of the property&apos;s overall investment case from an investor&apos;s perspective. Proposed projects are subject to timing and execution changes.
  </p>

  <p>
    But the existing connectivity already gives Sarjapur access to key employment and residential zones.
  </p>

  <h3 className="text-xl font-bold">9. Both End-Use and Investment Grade</h3>

  <p>
    Sobha Sienna appeals to both those who want to live in the property and those who are eyeing it primarily as an investment.
  </p>

  <p>
    For end-users, the appeal is the apartment configurations, Vastu-oriented planning, amenities, and Sarjapur&apos;s social infrastructure.
  </p>

  <p>
    For investors, the points to consider are:
  </p>

  <ul className="list-disc pl-6">
    <li>Location and connections</li>
    <li>Size and layout of apartment</li>
    <li>Cost of purchase</li>
    <li>Projected rental demand</li>
    <li>Costs of ownership and maintenance</li>
    <li>Future resale needs</li>
    <li>Project completion schedule</li>
    <li>Legal and RERA status</li>
    <li>Sarjapur property prices are similar</li>
  </ul>

  <p>
    This makes the Project relevant to different sorts of property buyers rather than being restricted to one investment profile.
  </p>

  <h3 className="text-xl font-bold">10. Developer Brand Established</h3>

  <p>
    The <ExtLink href="https://en.wikipedia.org/wiki/Sobha_(company)"><strong>Sobha</strong></ExtLink> tag is an important consideration for buyers looking at a premium residential project in Sobha Sienna.
  </p>

  <p>
    A developer&apos;s reputation can affect buyers&apos; confidence, construction expectations, and the property&apos;s positioning in the local residential market. But investors must still verify the project’s approvals, <ExtLink href="https://rera.karnataka.gov.in/">RERA details</ExtLink>, specifications, construction progress, and final contractual terms before deciding to buy.
  </p>

  <h3 className="text-xl font-bold">
    Investment Factors at a Glance
  </h3>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">Investment Factor</th>
        <th className="border border-gray-300 px-4 py-3 text-left">Sobha Sienna Advantage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Location</td>
        <td className="border border-gray-300 px-4 py-3">Sarjapur, South-East Bangalore</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Land Area</td>
        <td className="border border-gray-300 px-4 py-3">Approx. 25 acres</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Configurations</td>
        <td className="border border-gray-300 px-4 py-3">2, 3 and 4 BHK</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Project Type</td>
        <td className="border border-gray-300 px-4 py-3">Premium Residential Apartments</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Developer</td>
        <td className="border border-gray-300 px-4 py-3">Sobha</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Employment Connectivity</td>
        <td className="border border-gray-300 px-4 py-3">Sarjapur IT corridor, ORR, Whitefield and Electronic City</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Social Infrastructure</td>
        <td className="border border-gray-300 px-4 py-3">Schools, hospitals, retail and daily conveniences</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Planning</td>
        <td className="border border-gray-300 px-4 py-3">Vastu-focused apartment layouts</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Project Scale</td>
        <td className="border border-gray-300 px-4 py-3">Approx. 1,400 units, tentative</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Proposed Possession</td>
        <td className="border border-gray-300 px-4 py-3">December 2032</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-3">Buyer Segment</td>
        <td className="border border-gray-300 px-4 py-3">
          End-users, families and property investors
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    A Project Positioned for Bangalore&apos;s Growing Residential Corridors
  </h2>

  <p>
    Sobha Sienna offers a combination of many things that investors generally look at while evaluating a residential property – location, connectivity, project scale, apartment configuration, developer profile, and surrounding infrastructure.
  </p>

  <p>
    The Sarjapur address offers proximity to key employment hubs, while the surrounding locality offers schools, hospitals, retail and other everyday amenities. The Project offers a mix of 2, 3 and 4 BHKs to cater to different segments of the premium residential market.
  </p>

  <p>
    At the same time, investors should evaluate the final <IntLink href="/price">price</IntLink>, payment schedule, applicable charges, RERA registration, construction progress, and prevailing rental and resale rates before committing capital. These factors will determine if the property fits an individual&apos;s investment objectives.
  </p>

  <p>
    Overall, <strong>Sobha Sienna</strong>&apos;s investment proposition centres on its <strong>Sarjapur location</strong>, premium residential positioning, and planned development across <strong>approximately 25 acres</strong>, offering buyers a mix of residential comfort and access to one of Bangalore&apos;s key employment corridors.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Bangalore</h2>
  <img
              className="w-full"
              src="/images/bangalore.webp"
              alt="Bangalore city skyline, home of Sobha Sienna"
              loading="lazy"
            />
  <p>
    <ExtLink href="https://en.wikipedia.org/wiki/Bangalore"><strong>Bangalore</strong></ExtLink>, the capital of <ExtLink href="https://en.wikipedia.org/wiki/Karnataka">Karnataka</ExtLink>, is a major center of technology and employment in India. Read more about <IntLink href="/bangalore">living in Bangalore and top Sobha projects</IntLink>. The city has become a major metropolitan market, with residential communities across the north, south, east, and southeast.
  </p>

  <p>
    <strong>Sobha Sienna at Sarjapur</strong> is proposed for the city&apos;s southeast growth corridor.
  </p>

  <h3 className="text-xl font-bold">Bangalore as a Residential Market</h3>

  <p>
    Residential offerings in Bangalore include a diverse selection of apartments, villas, plotted developments and independent homes.
  </p>

  <p>
    The city&apos;s tech sector, business services, educational institutions, and growing job opportunities are bolstering demand.
  </p>

  <p>
    Bangalore has different parts that cater to different buyer needs. North Bangalore has good airport and industrial connectivity, east Bangalore is well connected to Whitefield and related employment areas and southeast Bangalore has Sarjapur, Bellandur and Electronic City.
  </p>

  <p>
    Sobha Sienna is located in the south-eastern residential area.
  </p>

  <h3 className="text-xl font-bold">East and Southeast Bangalore Connectivity</h3>

  <p>
    The Sarjapur locality is linked to many well-developed areas of the city.
  </p>

  <p>
    Whitefield is a major technology and residential hub in eastern Bangalore. Bellandur and Marathahalli link Sarjapur to the Outer Ring Road employment corridor.
  </p>

  <p>
    To the south is yet another major employment zone known as Electronic City.
  </p>

  <p>
    This matters for households with workplaces in more than one technology corridor.
  </p>

  <h3 className="text-xl font-bold">Public Transportation</h3>

  <p>
    Bangalore public transport options include <ExtLink href="https://mybmtc.karnataka.gov.in/">BMTC buses</ExtLink>, <ExtLink href="https://english.bmrc.co.in/">Namma Metro</ExtLink> services and other forms of city transportation. Metro connectivity has spread to many parts of the city, and more corridors are proposed and developed over time.
  </p>

  <p>
    Verify the nearest metro station and future connectivity for Sobha Sienna from the final project location, and the status of transport projects at the time of purchase.
  </p>

  <h3 className="text-xl font-bold">Airport Connectivity</h3>

  <p>
    Kempegowda International Airport is located in North Bangalore. To reach the airport from Sarjapur, you have to cross much of the city so that travel time can vary greatly depending on traffic.
  </p>

  <p>
    For residents who travel regularly for work, consider the road route and anticipated peak-hour travel time separately from the straight-line distance.
  </p>

  <h3 className="text-xl font-bold">Business and IT Hubs</h3>

  <p>
    The city&apos;s technology sector spans several corridors. Many professionals work in commercial hubs like Whitefield, Outer Ring Road, and Electronic City.
  </p>

  <p>
    Sarjapur is well connected to many of these employment hubs, allowing residents to stay connected.
  </p>

  <p>
    This employment connectivity is a key factor supporting residential development in the wider Sarjapur Road area.
  </p>

  <h3 className="text-xl font-bold">Social Infrastructure &amp; Lifestyles</h3>

  <p>
    Bangalore has plenty of lifestyle infrastructure, including malls, Restaurants, Entertainment, Schools, hospitals, and Recreation.
  </p>

  <p>
    Sarjapur has developed its own social infrastructure, while larger retail and entertainment destinations are available from other parts of southeast Bangalore.
  </p>

  <p>
    This mix of internal amenities and surrounding urban infrastructure can offer a variety of options for recreation and daily needs for residents of a large residential project such as Sobha Sienna.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}

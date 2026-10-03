/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/2bhk-floorplan.webp",
    alt: "Sobha Sienna 2 BHK floor plan, Sarjapur Bangalore",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3bhk-floorplan.webp",
    alt: "Sobha Sienna 3 BHK floor plan, Sarjapur Bangalore",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/4bhk-floorplan.webp",
    alt: "Sobha Sienna 4 BHK floor plan, Sarjapur Bangalore",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 my-6">
          <p>
            <IntLink href="/floor-plan"><strong>Sobha Sienna floor plans</strong></IntLink> are available in <strong>2, 3 and 4 BHK apartments</strong>. This gives homebuyers a wide range of choices based on their space requirements. The layouts feature comfortable circulation, practical room placement, and efficient use of available space. The layouts strike a good balance between private and common spaces.
          </p>
        </div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Sobha Sienna floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-6 mt-6">
          <div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Sobha Sienna Configuration
  </h2>

  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Configuration
        </th>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Apartment Type
        </th>
        <th className="border border-gray-300 px-4 py-3 text-left">
          Key Layout Focus
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-3">
          2 BHK
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Premium Apartment
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Efficient planning for comfortable family living
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-3">
          3 BHK
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Premium Apartment
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Extra bedroom space with balanced common areas
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-3">
          4 BHK
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Premium Apartment
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Larger layout with greater flexibility and privacy
        </td>
      </tr>
    </tbody>
  </table>
  </div>

  <h2 className="text-2xl font-bold">
    Floor Plan Highlights
  </h2>

  <p>
    Key highlights of the <strong>Sobha Sienna floor plans</strong> include
  </p>

  <ol className="list-decimal pl-6">
    <li>2, 3 and 4 BHK apartment configurations</li>
    <li><ExtLink href="https://en.wikipedia.org/wiki/Vastu_shastra">Vastu</ExtLink>-focused home planning</li>
    <li>Efficient use of available floor space</li>
    <li>Clearly defined living and private areas</li>
    <li>Spacious bedrooms and functional room layouts</li>
    <li>Well-planned kitchen and utility areas</li>
    <li>Balcony spaces connected to the main living areas</li>
    <li>Practical layouts designed for modern family living</li>
  </ol>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Thoughtful Home Planning with Vastu and Space Efficiency
  </h2>

  <p>
    At <strong>Sobha Sienna</strong>, floor plans blend <ExtLink href="https://en.wikipedia.org/wiki/Vastu_shastra">Vastu</ExtLink>-based planning with practical space utilization. The layouts create a logical flow between the home's areas while ensuring comfortable everyday movement. The living, dining, kitchen, and bedroom areas are clearly separated into common and private zones.
  </p>

  <p>
    Sobha Sienna floor plans combine Vastu-based planning, practical room layouts, and modern residential requirements. The Project offers <strong>2, 3, and 4 BHK options</strong> to cater to buyers with different needs for space and flexibility.
  </p>

  <p>
    Vastu is significant in the planning of Sobha Sienna homes. The apartment layouts are designed with Vastu principles and modern space requirements in mind. It combines traditional planning ideas with practical residential design.
  </p>

  <p>
    Every part of the apartment is functional, and the floor plans support this. The living, dining, kitchen and bedroom areas are designed to create a natural flow within the home. The layouts clearly separate common and private areas, helping families manage day-to-day routines more efficiently.
  </p>

  <h3 className="text-xl font-bold">
    2 BHK Floor Plan
  </h3>

  <p>
    <strong>Sobha Sienna 2 BHK apartments</strong>, priced from <strong>₹1.2 Cr* onwards</strong>, are for buyers who want a comfortable home with well-placed essential spaces. It has two bedrooms, plus living, dining, kitchen, and other supporting areas.
  </p>

  <p>
    The design emphasizes the living area as the main place for family and guests. Bedrooms are arranged for privacy, and the kitchen and utility areas are set up for everyday use. The overall 2 BHK configuration makes it a good option for smaller families and buyers looking for a well-organized home.
  </p>

  <h3 className="text-xl font-bold">
    3 BHK Floor Plan
  </h3>

  <p>
    The <strong>3 BHK flats</strong> offer extra space for larger bedrooms and more room for daily activities for families who want more space. The layout offers three bedrooms, generous common areas and the supporting spaces for a comfortable life.
  </p>

  <p>
    The extra bedroom can also serve as a guest room, children's room, or home office. The living areas are separated from the bedrooms for privacy, while the common areas feel open and connected.
  </p>

  <h3 className="text-xl font-bold">
    4 BHK Floor Plan
  </h3>

  <p>
    For those who want a larger layout, <strong>4 BHK apartments</strong> are available. Prices for 3 and 4 BHK homes are on the <IntLink href="/price">Sobha Sienna price list</IntLink>. These homes have four bedrooms, making them more flexible for larger families or those who want more personal space or multi-purpose rooms.
  </p>

  <p>
    The larger layout lets you use different areas of the home for specific purposes. Bedrooms can be designed for family members or guests, with additional space used as a study, work area, or other private space, depending on the family's requirements.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
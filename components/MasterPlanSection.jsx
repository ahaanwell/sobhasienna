/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 my-6">
  <p>
    The <IntLink href="/master-plan"><strong>Sobha Sienna master plan</strong></IntLink> is envisioned over <strong>25 acres</strong> in <IntLink href="/location"><strong>Sarjapur, Bangalore</strong></IntLink>. The generous plot of land creates space for residential towers, circulation, open spaces, landscaped areas, and communal amenities.
  </p>

  <p>
    The final master plan will likely show the location of the residential towers, entry and exit points, internal roads, pedestrian areas, landscaped spaces, recreational facilities, the clubhouse, and other community infrastructure.
  </p>
</div>
        <div className="max-w-2xl mx-auto">
          <div
          
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Sobha Sienna master plan, Sarjapur Bangalore"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>
        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">
    Master Plan Highlights
  </h2>

  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong>25-acre development</strong>: The Sobha Sienna project is planned on about 25 acres, accommodating residential towers, landscaped areas, and community facilities.
    </li>
    <li>
      <strong>2, 3 and 4 BHK Apartments:</strong> The master plan will include different apartment layouts to meet different family needs.
    </li>
    <li>
      <strong>Approximately 1,400 units:</strong> The Project will include approximately 1,400 units.
    </li>
    <li>
      <strong>Planned open spaces:</strong> The development will likely include landscaped and open areas within the residential community.
    </li>
    <li>
      <strong>Internal roads &amp; pathways:</strong> Internal circulation will connect the residential towers to the entrance, parking &amp; common facilities.
    </li>
    <li>
      <strong>Lifestyle amenities:</strong> Recreational and community amenities will be integrated within the development for the residents.
    </li>
    <li>
      <strong>Residential tower planning</strong>: The final layout will illustrate the placement of the apartment towers and their relationship to open spaces and amenities.
    </li>
  </ul>

  <p>
    The <ExtLink href="https://en.wikipedia.org/wiki/Site_plan">master plan</ExtLink> is particularly important for understanding how available land is distributed. A large residential development needs a clear plan of internal movement so that residents can reach their towers, parking areas, and amenities without moving unnecessarily through residential zones.
  </p>

  <p>
    Tower placement can also shape the experience of individual apartments. The final layout may determine whether homes closer to amenity areas have easier access to recreational facilities, or if apartments further away provide a quieter setting.
  </p>

  <p>
    Open spaces are also to be an important part of the plan. Landscaping could include lawns, tree-lined walkways, gardens and outdoor activity areas. The exact percentage of open space and the location of such areas should be checked against the approved master plan if available.
  </p>

  <p>
    The Project will also provide an internal road network for resident vehicles, visitor movement and emergency access. Pedestrian routes can be separated and dedicated to walking areas, apart from vehicle movement.
  </p>

  <h3 className="text-xl font-bold">
    Entry and Internal Movement
  </h3>

  <p>
    The main entrance is expected to link the Project to the surrounding road network. Security and access management will be important in a development of <strong>approximately 1,400 homes</strong>.
  </p>

  <p>
    Internal roads would link the entrance with the various residential towers, parking areas and amenity zones. Visitors are usually required to enter through designated access points rather than directly into residential areas.
  </p>

  <p>
    The final plan should also specify visitor parking, service access and emergency vehicle movement.
  </p>

  <h3 className="text-xl font-bold">
    Green Spaces
  </h3>

  <p>
    The development will include a <strong>25-acre residential site</strong> with scope for landscaped areas. Green spaces will be located around recreational facilities, internal roads, and residential blocks.
  </p>

  <p>
    The final master plan will determine the precise landscaping strategy. Buyers should look for details of parks, lawns, gardens, shaded walking paths and outdoor sitting areas when the official plan is published.
  </p>

  <h3 className="text-xl font-bold">
    Clubhouse Community Spaces
  </h3>

  <p>
    Premium residential developments usually offer indoor and outdoor facilities in a common amenity zone. The information given has not yet officially detailed the exact <IntLink href="/amenities">facilities at Sobha Sienna</IntLink>.
  </p>

  <p>
    The final master plan should show the clubhouse location and its relationship to the residential towers.
  </p>

  <p>
    This is useful for buyers because the distance from a home to the clubhouse can affect everyday access. Some residents might prefer to be away from busier areas, while families might want quick access to children's play areas, fitness facilities, swimming pools, or community halls.
  </p>
</div>
      </div>
    </section>
  );
}
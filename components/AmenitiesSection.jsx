import { IntLink, ExtLink } from "./SeoLinks";

const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "./images/gym.svg",    alt: "Gymnasium" },
  { id: 2,  name: "Swimming Pool",       image: "./images/swm.svg",    alt: "Swimming Pool" },
  { id: 3,  name: "Yoga Pavilion",       image: "./images/yoga.svg",   alt: "Yoga Pavilion" },
  { id: 4,  name: "Video Door Phone",    image: "./images/videos.svg", alt: "Video Door Phone" },
  { id: 5,  name: "Kids Activity Zone",  image: "./images/kids.svg",   alt: "Kids Activity Zone" },
  { id: 6,  name: "Mini Theater",        image: "./images/mine.svg",   alt: "Mini Theater" },
  { id: 7,  name: "Aerobics Room",       image: "./images/tennis.svg", alt: "Aerobics Room" },
  { id: 8,  name: "Indoor Games Room",   image: "./images/chess.svg",  alt: "Indoor Games Room" },
  { id: 9,  name: "Club House",          image: "./images/disco-ball.svg", alt: "Club House" },
  { id: 10, name: "Dance/Music",         image: "./images/dance.svg",  alt: "Dance/Music" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "./images/cctv.svg",   alt: "24/7 CCTV Monitoring" },
  { id: 12, name: "Jogging Track",       image: "./images/jog.svg",    alt: "Jogging Track" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sobha Sienna amenities"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-gray-800 mt-6">
  <p>
    The <IntLink href="/amenities"><strong>facilities at Sobha Sienna</strong></IntLink> are likely to play a significant role in establishing the Project as a premium residential destination. However, the final list of amenities is not yet available in the project details.
  </p>

  <p>
    So the final list will have to be revised once the developer releases the official brochure and approved amenity plan.
  </p>

  <p>
    A large residential development usually requires amenities for different age groups. A <strong>clubhouse</strong> can serve as the indoor hub for community, while outdoor spaces can offer opportunities for walking, recreation and children&apos;s play.
  </p>

  <h3 className="text-xl font-bold">Club House</h3>

  <p>
    The clubhouse is expected to be a center for social and recreational activity within the development.
  </p>

  <p>
    The final plan for the clubhouse may include indoor recreation rooms, fitness facilities, community spaces and other resident amenities. Kindly cross-check the exact size and amenities list with the official project documents.
  </p>

  <h3 className="text-xl font-bold">Fitness Facilities</h3>

  <p>
    A premium residential development may include a <ExtLink href="https://en.wikipedia.org/wiki/Gym"><strong>gymnasium</strong></ExtLink> or dedicated fitness area. These facilities allow residents to work out in the community rather than going off-site to a gym.
  </p>

  <p>
    The final amenities plan will determine size and equipment provided.
  </p>

  <p>
    Outdoor fitness areas may also be provided as part of the final landscape design.
  </p>

  <h3 className="text-xl font-bold">Swimming Pool</h3>

  <p>
    A <ExtLink href="https://en.wikipedia.org/wiki/Swimming_pool"><strong>swimming pool</strong></ExtLink> is among the most frequented recreational amenities in luxury apartment communities.
  </p>

  <p>
    If incorporated, the pool zone in <strong>Sobha Sienna</strong> can be segregated for recreation and relaxation. The final plan should specify whether it includes a children&apos;s pool or other pool-related amenities.
  </p>

  <h3 className="text-xl font-bold">Play Areas for Children</h3>

  <p>
    A residential project can include large, family-oriented apartments with dedicated <strong>children&apos;s play areas</strong>.
  </p>

  <p>
    These spaces can offer children a designated outdoor area in the community. The final landscaping plan should clearly show the location and equipment.
  </p>

  <h3 className="text-xl font-bold">Landscaped Areas</h3>

  <p>
    Landscape is a critical part of the overall design of a <IntLink href="/master-plan"><strong>25-acre project</strong></IntLink>.
  </p>

  <p>
    Open lawns, gardens, shaded paths and outdoor seating areas can offer residents places to spend time outside their apartments.
  </p>

  <p>
    Exact green area and landscaping percentage to be confirmed upon availability of approved master plan.
  </p>

  <h3 className="text-xl font-bold">Indoor Activities</h3>

  <p>
    Indoor facilities can be advantageous when weather conditions make outdoor activities less feasible.
  </p>

  <p>
    Facilities could include indoor games rooms, table tennis, multi-purpose rooms, or community rooms. But these cannot be cited as confirmed Sobha Sienna amenities until they are part of the official list.
  </p>

  <h3 className="text-xl font-bold">Sports Facilities</h3>

  <p>
    If the final land allocation allows, the Project could include outdoor sports areas.
  </p>

  <p>
    Premium apartment communities may offer amenities such as badminton, basketball, tennis or other recreational areas.
  </p>

  <p>
    The final amenity brochure will determine the actual facilities offered at Sobha Sienna.
  </p>

  <h3 className="text-xl font-bold">Walking and Recreation Areas</h3>

  <p>
    Walking paths can connect residential towers to gardens and common facilities.
  </p>

  <p>
    If the Project is large enough the pedestrian movement within the Project will make the community easier to navigate without vehicles.
  </p>

  <h3 className="text-xl font-bold">Safety</h3>

  <p>
    There is likely to be security infrastructure included in the residential development. Apartment communities of this scale typically use controlled entry, security personnel, and visitor management.
  </p>

  <p>
    The final specifications must state exactly what security systems and monitoring facilities are to be employed.
  </p>

  <h3 className="text-xl font-bold">Parking &amp; Transportation</h3>

  <p>
    Parking provision will also interest purchasers. The final project plan shall indicate the number of parking spaces per apartment type.
  </p>

  <p>
    Also check the parking location relative to residential towers, and visitor parking.
  </p>

  <h3 className="text-xl font-bold">Power Backup</h3>

  <p>
    Power backup may be provided for common facilities and essential building services. The final project specifications must indicate the scope of backup for individual apartments and common areas.
  </p>

  <h3 className="text-xl font-bold">All-ages amenities</h3>

  <p>
    One benefit of a large residential community is that it can offer spaces for different age groups.
  </p>

  <p>
    Children can have play areas, adults can use fitness, <ExtLink href="https://en.wikipedia.org/wiki/Yoga">yoga</ExtLink> and sports facilities and senior residents can benefit from quieter landscaped or seating areas.
  </p>

  <p>
    It remains to be seen in the final <strong>Sobha Sienna amenity plan</strong> how these requirements will be addressed.
  </p>
</div>
      </div>
    </section>
  );
}
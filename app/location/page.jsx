import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import LocationPage from "./LocationPage";

const PATH = "/location";
const TITLE = "Sobha Sienna Location | Sarjapur, Bangalore – Map & Connectivity";
const DESCRIPTION =
  "Sobha Sienna location: Sarjapur, Bangalore. 25-acre project by Sobha Limited with ~1,400 2, 3 & 4 BHK apartments from ₹1.2 Cr*. Map, connectivity & nearby hubs.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna location",
    "Sobha Sienna address",
    "Sobha Sienna location map",
    "Sobha Sienna Sarjapur",
    "Sobha Sienna Sarjapur Road",
    "Sobha Sienna connectivity",
    "Sobha Limited Sarjapur",
    "apartments in Sarjapur Bangalore",
    "new launch apartments Sarjapur Road",
    "2, 3 and 4 BHK apartments Sarjapur",
  ],
  images: [{ ...IMAGES.map, alt: "Sobha Sienna location map, Sarjapur Bangalore" }],
});

const FAQS = [
  ["Where is Sobha Sienna located?", "Sobha Sienna is located in Sarjapur, Bangalore, Karnataka."],
  ["Which developer is developing Sobha Sienna?", "The project is developed by Sobha Limited."],
  ["How large is the Sobha Sienna project?", "The development is planned across approximately 25 acres with around 1,400 apartments (tentative) in 2, 3 and 4 BHK configurations."],
  ["When is possession of Sobha Sienna expected?", "Possession is proposed for December 2032."],
  ["How should buyers evaluate the Sobha Sienna location?", "Buyers should examine the approach roads, daily commuting routes, nearby schools, hospitals and essential services, public transport availability, and actual travel times at peak hours."],
];

const schema = pageSchema({ path: PATH, name: "Location", title: TITLE, description: DESCRIPTION, image: IMAGES.map.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <LocationPage />
      <BlogSection/>
    </>
  );
}

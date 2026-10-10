import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesPage from "./AmenitiesPage";

const PATH = "/amenities";
const TITLE = "Sobha Sienna Amenities | Sarjapur Bangalore | Clubhouse & Lifestyle Facilities";
const DESCRIPTION =
  "Explore Sobha Sienna amenities in Sarjapur, Bangalore, a premium 25-acre residential project with clubhouse, fitness, sports and landscaped spaces for approximately 1,400 homes.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna amenities",
    "Sobha Sienna clubhouse",
    "Sobha Sienna swimming pool",
    "Sobha Sienna gym",
    "Sobha Sienna facilities",
    "Sobha Sienna Sarjapur",
    "Sobha Limited Sarjapur amenities",
    "apartment amenities Sarjapur Bangalore",
    "gated community amenities Sarjapur",
  ],
  images: [{ ...IMAGES.amenities, alt: "Sobha Sienna amenities and lifestyle facilities, Sarjapur Bangalore" }],
});

const FAQS = [
  ["What amenities are planned at Sobha Sienna?", "The official amenity schedule is yet to be released. Buyers can expect to evaluate premium categories such as fitness and wellness, sports and recreation, clubhouse facilities, landscaped spaces and security, subject to confirmation in the official brochure."],
  ["Where is Sobha Sienna located?", "Sobha Sienna is located in Sarjapur, Bangalore."],
  ["How large is the Sobha Sienna project?", "The project is planned across approximately 25 acres with around 1,400 apartments (tentative) in 2, 3 and 4 BHK configurations."],
  ["When is possession of Sobha Sienna expected?", "Possession is proposed for December 2032."],
];

const schema = pageSchema({ path: PATH, name: "Amenities", title: TITLE, description: DESCRIPTION, image: IMAGES.amenities.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}

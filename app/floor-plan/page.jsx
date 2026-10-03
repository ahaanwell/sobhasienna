import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import FloorPlanPage from "./FloorPlanPage";

const PATH = "/floor-plan";
const TITLE = "Sobha Sienna Floor Plan | 2, 3 & 4 BHK Layouts in Sarjapur";
const DESCRIPTION =
  "Sobha Sienna floor plan: 2, 3 & 4 BHK apartment layouts by Sobha Limited in Sarjapur, Bangalore. 25 acres, ~1,400 units, from ₹1.2 Cr*, possession Dec 2032.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna floor plan",
    "Sobha Sienna 2 BHK floor plan",
    "Sobha Sienna 3 BHK floor plan",
    "Sobha Sienna 4 BHK floor plan",
    "Sobha Sienna unit plan",
    "Sobha Sienna apartment layout",
    "Sobha Sienna carpet area",
    "Sobha Sienna Sarjapur",
    "Sobha Limited Sarjapur floor plan",
    "2, 3 and 4 BHK floor plan Sarjapur Bangalore",
  ],
  images: [{ ...IMAGES.floorPlan3, alt: "Sobha Sienna 3 BHK apartment floor plan, Sarjapur Bangalore" }],
});

const FAQS = [
  ["What floor plans are available at Sobha Sienna?", "Sobha Sienna offers 2 BHK, 3 BHK and 4 BHK apartment floor plans, with approximately 1,400 units (tentative) planned in total."],
  ["What is the carpet area of Sobha Sienna apartments?", "The final carpet areas and room dimensions are yet to be released. Buyers should verify them in the developer's official floor plans and RERA registration."],
  ["What should buyers check in the Sobha Sienna floor plan?", "Buyers should check the carpet area, room dimensions, natural light, ventilation, balcony access, privacy and the apartment's orientation, and confirm them against the official floor plan drawings."],
  ["When is possession of Sobha Sienna expected?", "Possession of Sobha Sienna is proposed for December 2032."],
];

const schema = pageSchema({ path: PATH, name: "Floor Plan", title: TITLE, description: DESCRIPTION, image: IMAGES.floorPlan3.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}

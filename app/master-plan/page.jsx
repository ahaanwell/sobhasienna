import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import MasterPlanPage from "./MasterPlanPage";

const PATH = "/master-plan";
const TITLE = "Sobha Sienna Master Plan | Sarjapur Bangalore | 25-Acre Site Layout";
const DESCRIPTION =
  "Explore the Sobha Sienna master plan in Sarjapur, Bangalore, a premium 25-acre residential layout with approximately 1,400 homes in 2, 3 & 4 BHK apartments.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna master plan",
    "Sobha Sienna site plan",
    "Sobha Sienna site layout",
    "Sobha Sienna land area",
    "Sobha Sienna 25 acres",
    "Sobha Sienna total units",
    "Sobha Sienna open space",
    "Sobha Sienna Sarjapur",
    "Sobha Limited Sarjapur master plan",
    "residential master plan Sarjapur Bangalore",
  ],
  images: [{ ...IMAGES.masterPlan, alt: "Sobha Sienna master plan and site layout, Sarjapur Bangalore" }],
});

const FAQS = [
  ["What is the land area of Sobha Sienna?", "Sobha Sienna is planned across approximately 25 acres in Sarjapur, Bangalore."],
  ["How many apartments are planned in the Sobha Sienna master plan?", "The project is expected to include approximately 1,400 apartments (tentative) across 2, 3 and 4 BHK configurations."],
  ["What should buyers check in the Sobha Sienna master plan?", "Buyers should check the project boundary, placement of residential blocks, internal roads, entry and exit points, open spaces and common facilities, and confirm them against the officially approved layout."],
  ["When is possession of Sobha Sienna expected?", "Possession of Sobha Sienna is proposed for December 2032."],
];

const schema = pageSchema({ path: PATH, name: "Master Plan", title: TITLE, description: DESCRIPTION, image: IMAGES.masterPlan.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}

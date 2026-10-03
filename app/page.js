import { HOME_DESCRIPTION, HOME_TITLE, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AboutSObhaLimited from "@/components/AboutSobhaLimited";
import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import EMICalculator from "@/components/Emicalculator";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import RERAApprovals from "@/components/ReraApprovals";
import TopHospitals from "@/components/TopHospitals";
import TopSchools from "@/components/TopSchools";
import TopShoppingMalls from "@/components/TopShoppingMalls";
import TopSobhaProjects from "@/components/TopSobhaProjects";
const KEYWORDS = [
  "Sobha Sienna",
  "Sobha Sienna Sarjapur",
  "Sobha Sienna Bangalore",
  "Sobha Sienna price",
  "Sobha Sienna floor plan",
  "Sobha Sienna master plan",
  "Sobha Sienna amenities",
  "Sobha Sienna location",
  "Sobha Sienna reviews",
  "Sobha Sienna brochure",
  "Sobha Limited Sarjapur",
  "apartments in Sarjapur Bangalore",
  "2, 3 and 4 BHK apartments Sarjapur",
];

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  keywords: KEYWORDS,
});

const FAQS = [
  [
    "Where is Sobha Sienna located?",
    "Sobha Sienna is located in Sarjapur, Bangalore – a well-connected residential corridor with access to major IT hubs, schools, hospitals, shopping destinations, and key roads."
  ],
  [
    "What are the apartment layouts available in Sobha Sienna?",
    "The Project is planned to offer 2, 3, and 4 BHK apartments to suit different family sizes and space needs."
  ],
  [
    "What is the total land area of Sobha Sienna?",
    "Sobha Sienna spans about 25 acres with around 1,400 units. It is a huge residential township in Sarjapur."
  ],
  [
    "When will Sobha Sienna be ready for possession?",
    "Sobha Sienna possession date is Dec 2032, subject to the terms of the final agreement, registered project timeline and applicable approvals."
  ],
  [
    "Are Vastu based apartment plans available at Sobha Sienna?",
    "Yes. The apartment plans incorporate Vastu principles in the overall design, along with practical space planning for modern-day family living."
  ],
  [
    "Why is the Sobha Sienna location good for professionals?",
    "The Sarjapur location offers connectivity to major employment destinations such as the Sarjapur IT corridor, Outer Ring Road, Whitefield, and Electronic City."
  ],
  [
    "What should buyers look out for before booking an apartment in Sobha Sienna?",
    "Buyers should check updated RERA details, approved plans, project specifications, apartment area, payment schedule, agreement for sale, applicable charges and the possession timeline before booking."
  ],
  [
    "What is the starting price of Sobha Sienna?",
    "The Sobha Sienna price starts at ₹1.2 Cr* onwards for 2 BHK apartments. Prices for 3 and 4 BHK apartments are available on request."
  ],
  [
    "Who is the developer of Sobha Sienna?",
    "Sobha Sienna is developed by Sobha Limited, a Bangalore-headquartered real estate developer."
  ]
];

const homeSchema = pageSchema({
  path: "/",
  name: "Home",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  faqs: FAQS,
  extra: [
    {
      "@type": "ItemList",
      name: "Top Sobha Projects in Bangalore",
      itemListElement: ["Sobha One World", "Sobha Liora", "Sobha Hennur", "Sobha Neopolis", "Sobha Madison Heights"].map(
        (name, i) => ({ "@type": "ListItem", position: i + 1, name })
      ),
    },
  ],
});

export default function Home() {
  return (
    <>
    <JsonLd data={homeSchema} />
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <EMICalculator/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <RERAApprovals/>
    <AboutSObhaLimited/>
    <TopSobhaProjects/>
    <TopSchools/>
    <TopHospitals/>
    <TopShoppingMalls/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}

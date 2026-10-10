import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PricePage from "./PricePage";

const PATH = "/price";
const TITLE = "Sobha Sienna Price | Sarjapur Bangalore | 2, 3 & 4 BHK Price List & Cost Sheet";
const DESCRIPTION =
  "Check the Sobha Sienna price in Sarjapur, Bangalore, a premium 25-acre project with approximately 1,400 homes. View the 2, 3 & 4 BHK price list, cost sheet and payment plan.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna price",
    "Sobha Sienna price list",
    "Sobha Sienna 2 BHK price",
    "Sobha Sienna 3 BHK price",
    "Sobha Sienna 4 BHK price",
    "Sobha Sienna cost sheet",
    "Sobha Sienna payment plan",
    "Sobha Sienna Sarjapur price",
    "Sobha Limited Sarjapur",
    "apartment price Sarjapur Bangalore",
    "new launch apartments Sarjapur",
  ],
  images: [{ ...IMAGES.costSheet, alt: "Sobha Sienna price list and cost sheet for 2, 3 and 4 BHK apartments in Sarjapur" }],
});

const FAQS = [
  ["What is the starting price of Sobha Sienna?", "The Sobha Sienna price starts at ₹1.2 Cr* onwards for a 2 BHK apartment. Prices for 3 BHK and 4 BHK apartments are available on request."],
  ["Where is Sobha Sienna located?", "Sobha Sienna is located in Sarjapur, Bangalore."],
  ["What is the land area and total number of units?", "The project is planned across approximately 25 acres with around 1,400 apartments (tentative)."],
  ["When is possession of Sobha Sienna expected?", "Possession of Sobha Sienna is proposed for December 2032."],
  ["What charges are added to the Sobha Sienna apartment price?", "In addition to the base price, buyers should account for GST, stamp duty, registration fees, parking charges, maintenance deposits, and other charges listed in the official cost sheet."],
];

const schema = pageSchema({ path: PATH, name: "Price", title: TITLE, description: DESCRIPTION, image: IMAGES.costSheet.url, faqs: FAQS });

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <PricePage />
      <BlogSection/>
    </>
  );
}

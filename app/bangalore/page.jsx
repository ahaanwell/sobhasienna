import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import BangalorePage from "./BangalorePage";

const PATH = "/bangalore";
const TITLE = "Sobha Sienna Bangalore | Top 5 Sobha Projects in Bangalore";
const DESCRIPTION =
  "Discover Bangalore and Sobha Sienna, Sarjapur – 25 acres, ~1,400 units from ₹1.2 Cr*. Compare top Sobha projects: One World, Liora, Hennur, Neopolis, Madison Heights.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna Bangalore",
    "Sobha projects in Bangalore",
    "top Sobha projects Bangalore",
    "Sobha new launch Bangalore",
    "Sobha One World",
    "Sobha Liora",
    "Sobha Hennur",
    "Sobha Neopolis",
    "Sobha Madison Heights",
    "living in Bangalore",
    "apartments in Sarjapur Bangalore",
  ],
  images: [{ ...IMAGES.banner, alt: "Sobha Sienna, Sarjapur Bangalore" }],
});

const TOP_PROJECTS = [
  "Sobha One World",
  "Sobha Liora",
  "Sobha Hennur",
  "Sobha Neopolis",
  "Sobha Madison Heights",
];

const FAQS = [
  ["Where is Sobha Sienna located in Bangalore?", "Sobha Sienna is located in Sarjapur, south-east Bangalore."],
  ["What is the starting price of Sobha Sienna?", "Sobha Sienna prices start at ₹1.2 Cr* onwards for a 2 BHK apartment. 3 and 4 BHK prices are available on request."],
  ["Which are the top Sobha projects in Bangalore?", "Popular Sobha projects in Bangalore include Sobha One World, Sobha Liora, Sobha Hennur, Sobha Neopolis and Sobha Madison Heights, along with the new Sobha Sienna in Sarjapur."],
  ["Why is Bangalore a good city to buy a home?", "Bangalore offers a strong technology job market, a moderate climate, reputed educational institutions, an expanding metro network and a wide choice of residential neighbourhoods."],
];

const schema = pageSchema({
  path: PATH,
  name: "Bangalore",
  title: TITLE,
  description: DESCRIPTION,
  faqs: FAQS,
  extra: [
    {
      "@type": "ItemList",
      name: "Top Sobha Projects in Bangalore",
      itemListElement: TOP_PROJECTS.map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
    },
    {
      "@type": "City",
      name: "Bangalore",
      alternateName: "Bengaluru",
      sameAs: "https://en.wikipedia.org/wiki/Bangalore",
      containedInPlace: { "@type": "State", name: "Karnataka" },
    },
  ],
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <BangalorePage />
      <BlogSection/>
    </>
  );
}

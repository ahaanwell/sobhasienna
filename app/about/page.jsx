import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AboutPage from "./AboutPage";

const PATH = "/about";
const TITLE = "About Sobha Sienna | Sobha Limited Project in Sarjapur, Bangalore";
const DESCRIPTION =
  "About Sobha Sienna by Sobha Limited – a proposed 25-acre, ~1,400-unit project in Sarjapur, Bangalore with 2, 3 & 4 BHK apartments from ₹1.2 Cr*, possession Dec 2032.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "about Sobha Sienna",
    "Sobha Sienna Sarjapur",
    "Sobha Limited",
    "Sobha Limited Bangalore",
    "Sobha Sienna project details",
    "Sobha new launch Sarjapur",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "About",
  title: TITLE,
  description: DESCRIPTION,
  type: "AboutPage",
  extra: [
    {
      "@type": "Organization",
      name: "Sobha Limited",
      url: "https://www.sobha.com/",
      sameAs: ["https://en.wikipedia.org/wiki/Sobha_Limited"],
    },
  ],
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <AboutPage />
    </>
  );
}

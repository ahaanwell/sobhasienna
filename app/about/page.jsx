import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AboutPage from "./AboutPage";

const PATH = "/about";
const TITLE = "About Sobha Sienna | Sarjapur Bangalore | Sobha Limited Project";
const DESCRIPTION =
  "About Sobha Sienna by Sobha Limited in Sarjapur, Bangalore, a premium 25-acre residential project featuring 2, 3 & 4 BHK apartments with approximately 1,400 homes.";

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
      sameAs: ["https://en.wikipedia.org/wiki/Sobha_(company)"],
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

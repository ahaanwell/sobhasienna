import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import DisclaimerPage from "./DisclaimerPage";

const PATH = "/disclaimer";
const TITLE = "Disclaimer | Sobha Sienna Project Information Site";
const DESCRIPTION =
  "Disclaimer for www.sobhasienna.com – an information portal by a RERA-authorised agent. Prices, plans and images of Sobha Sienna, Sarjapur are indicative and may change.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["Sobha Sienna disclaimer", "sobhasienna.com disclaimer", "Sobha Sienna RERA agent"],
});

const schema = pageSchema({
  path: PATH,
  name: "Disclaimer",
  title: TITLE,
  description: DESCRIPTION,
  withProject: false,
  dateModified: "2026-10-02",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <DisclaimerPage />
    </>
  );
}

import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import DisclaimerPage from "./DisclaimerPage";

const PATH = "/disclaimer";
const TITLE = "Disclaimer | Sobha Sienna Sarjapur Bangalore";
const DESCRIPTION =
  "Disclaimer for www.sobhasienna.com, an information portal by a RERA-authorised agent. Plans, images and project details of Sobha Sienna, Sarjapur are indicative.";

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

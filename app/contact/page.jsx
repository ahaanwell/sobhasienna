import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import ContactPage from "./ContactPage";

const PATH = "/contact";
const TITLE = "Contact Sobha Sienna | Enquiry & Site Visit, Sarjapur Bangalore";
const DESCRIPTION =
  "Contact us for Sobha Sienna, Sarjapur Bangalore – price list, floor plans, brochure and site visits. 2, 3 & 4 BHK from ₹1.2 Cr*. Call or WhatsApp +91 83174 52005.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Sienna contact",
    "Sobha Sienna contact number",
    "Sobha Sienna site visit",
    "Sobha Sienna enquiry",
    "Sobha Sienna brochure",
    "Sobha Sienna Sarjapur",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Contact",
  title: TITLE,
  description: DESCRIPTION,
  type: "ContactPage",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <ContactPage />
    </>
  );
}

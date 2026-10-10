import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const PATH = "/privacy-policy";
const TITLE = "Privacy Policy | Sobha Sienna Sarjapur Bangalore";
const DESCRIPTION =
  "Read how www.sobhasienna.com collects, uses and protects your name, phone number and email when you enquire about Sobha Sienna, Sarjapur Bangalore.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["Sobha Sienna privacy policy", "sobhasienna.com privacy", "Sobha Sienna data protection"],
});

const schema = pageSchema({
  path: PATH,
  name: "Privacy Policy",
  title: TITLE,
  description: DESCRIPTION,
  withProject: false,
  dateModified: "2026-10-02",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <PrivacyPolicyPage />
    </>
  );
}

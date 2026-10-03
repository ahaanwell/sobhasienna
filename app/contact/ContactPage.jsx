/* eslint-disable react/no-unescaped-entities */
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE = "+918317452005";
const PHONE_DISPLAY = "+91 83174 52005";
const WHATSAPP_LINK =
  "https://wa.me/918317452005?text=Hi!%20I%27m%20Interested%20In%20Sobha%20Sienna%20Please%20Share%20Details.";
const MAP_EMBED_URL = "https://www.google.com/maps?q=Sarjapur,+Bangalore,+Karnataka&output=embed";

const contactCards = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    text: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    text: "Chat with our team",
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Project Location",
    text: "Sarjapur, Bangalore, Karnataka 562125",
    href: "/location",
  },
];

function ContactPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Contact"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Contact Sobha Sienna – Enquiry & Site Visit, Sarjapur Bangalore
          </h1>

          <p className="mt-6 text-gray-800 text-center max-w-3xl mx-auto">
            Interested in <IntLink href="/"><strong>Sobha Sienna</strong></IntLink> by <ExtLink href="https://www.sobha.com/"><strong>Sobha Limited</strong></ExtLink> in <strong>Sarjapur, Bangalore</strong>? Get in touch for the latest <IntLink href="/price">price list</IntLink>, <IntLink href="/floor-plan">floor plans</IntLink>, brochure, or to <strong>book a site visit</strong>.
          </p>

          {/* Contact cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactCards.map(({ icon: Icon, title, text, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-md transition"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl">
                  <Icon />
                </span>
                <span className="font-semibold text-gray-800">{title}</span>
                <span className="text-sm text-gray-600">{text}</span>
              </a>
            ))}
          </div>

          {/* Form + map */}
          <div className="mt-10 flex flex-col lg:flex-row gap-6 items-stretch">
            <LeadForm />
            <div className="flex-1 min-h-[380px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sobha Sienna location map — Sarjapur, Bangalore"
              />
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Why Contact Us About Sobha Sienna?
  </h2>

  <p className="mt-4 text-gray-800">
    Our team can help you with up-to-date information on <strong>Sobha Sienna</strong>, a proposed premium residential project planned across <strong>approximately 25 acres</strong> with <strong>around 1,400 units</strong> of <strong>2, 3 and 4 BHK apartments</strong>. Prices start at <strong>₹1.2 Cr* onwards</strong>, with <strong>possession proposed for December 2032</strong>.
  </p>

  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
    <li>Latest <IntLink href="/price">price list and cost sheet</IntLink> for 2, 3 and 4 BHK apartments.</li>
    <li>Configuration-wise <IntLink href="/floor-plan">floor plans</IntLink> and the project <IntLink href="/master-plan">master plan</IntLink>.</li>
    <li>Details of planned <IntLink href="/amenities">amenities</IntLink> and <IntLink href="/location">location connectivity</IntLink>.</li>
    <li>Scheduling a <strong>site visit</strong> in Sarjapur.</li>
    <li>Guidance on booking, payment plans and home loan options.</li>
  </ul>
</div>
<div>
  <h2 className="text-2xl font-semibold text-gray-800">
    Before You Book
  </h2>

  <p className="mt-4 text-gray-800">
    We recommend that buyers verify the project's registration on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> and confirm final prices, specifications and payment terms with the developer before making a booking. You can also compare Sobha Sienna with other <IntLink href="/bangalore">Sobha projects in Bangalore</IntLink>.
  </p>

  <p className="mt-4 text-sm text-gray-600">
    This website is an information portal managed by a RERA-authorised real estate agent and is not the official website of Sobha Limited.
  </p>
</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactPage;

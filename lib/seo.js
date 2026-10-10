export const SITE_URL = "https://www.sobhasienna.com";
export const SITE_NAME = "Sobha Sienna";

export const HOME_TITLE = "Sobha Sienna | Sarjapur Bangalore | 2, 3 & 4 BHK Apartments, Pre-Launch Offers & Reviews";
export const HOME_DESCRIPTION =
  "Explore Sobha Sienna in Sarjapur, Bangalore, a premium 25-acre residential project featuring 2, 3 & 4 BHK apartments with approximately 1,400 thoughtfully designed homes.";

// Real pixel sizes of the files in /public/images (some .webp files are PNG/JPEG inside).
export const IMAGES = {
  banner: { url: `${SITE_URL}/images/banners/sobhasienna.webp`, width: 2400, height: 1080 },
  costSheet: { url: `${SITE_URL}/images/costing-details.webp`, width: 320, height: 174 },
  floorPlan2: { url: `${SITE_URL}/images/2bhk-floorplan.webp` },
  floorPlan3: { url: `${SITE_URL}/images/3bhk-floorplan.webp`, width: 320, height: 247 },
  floorPlan4: { url: `${SITE_URL}/images/4bhk-floorplan.webp` },
  masterPlan: { url: `${SITE_URL}/images/master-plan.webp`, width: 772, height: 434 },
  map: { url: `${SITE_URL}/images/map.webp`, width: 733, height: 346 },
  amenities: { url: `${SITE_URL}/images/amenities.webp`, width: 1272, height: 709 },
  bangalore: { url: `${SITE_URL}/images/bangalore.webp`, width: 600, height: 350 },
  logo: { url: `${SITE_URL}/images/logo.webp`, width: 204, height: 247 },
};

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROJECT_ID = `${SITE_URL}/#project`;

export const pageUrl = (path = "/") => `${SITE_URL}${path === "/" ? "/" : path}`;

/**
 * Full Next.js metadata for a page. `images` is a list of IMAGES entries with an `alt`.
 */
export function buildMetadata({ title, description, path, keywords = [], images = [], type = "website" }) {
  const url = pageUrl(path);
  // Social cards need ~1200px+ images, so smaller page images go after the large banner.
  const banner = { ...IMAGES.banner, alt: "Sobha Sienna, Sarjapur Bangalore" };
  const large = images.filter((img) => (img.width || 0) >= 1200);
  const small = images.filter((img) => (img.width || 0) < 1200);
  const ogImages = [...large, banner, ...small].filter(
    (img, i, all) => all.findIndex((o) => o.url === img.url) === i
  );

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: ogImages,
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImages[0].url],
    },
    category: "Real Estate",
  };
}

export const organizationNode = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: pageUrl("/"),
  logo: { "@type": "ImageObject", ...IMAGES.logo },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8317452005",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Kannada"],
  },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: pageUrl("/"),
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

export const projectNode = {
  "@type": "ApartmentComplex",
  "@id": PROJECT_ID,
  name: "Sobha Sienna",
  description: HOME_DESCRIPTION,
  url: pageUrl("/"),
  image: [IMAGES.banner.url, IMAGES.masterPlan.url, IMAGES.amenities.url],
  numberOfAccommodationUnits: "1400",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sarjapur",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "562125",
    addressCountry: "IN",
  },
  containedInPlace: { "@type": "City", name: "Bangalore" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "12000000",
    offerCount: "3",
    availability: "https://schema.org/PreOrder",
    url: pageUrl("/price"),
  },
};

export function breadcrumbNode(path, name) {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") }];
  if (path !== "/") items.push({ "@type": "ListItem", position: 2, name, item: pageUrl(path) });
  return { "@type": "BreadcrumbList", "@id": `${pageUrl(path)}#breadcrumb`, itemListElement: items };
}

export function webPageNode({ path, name, description, image = IMAGES.banner.url, type = "WebPage", about = true, dateModified }) {
  const url = pageUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: image },
    ...(about ? { about: { "@id": PROJECT_ID } } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function faqNode(path, faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl(path)}#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/**
 * Standard JSON-LD graph for a page: WebPage + breadcrumb + project (+ FAQ and any extra nodes).
 */
export function pageSchema({ path, name, title, description, image, faqs, type, withProject = true, dateModified, extra = [] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({ path, name: title, description, image, type, about: withProject, dateModified }),
      breadcrumbNode(path, name),
      ...(withProject ? [projectNode] : []),
      ...(faqs?.length ? [faqNode(path, faqs)] : []),
      ...extra,
    ],
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

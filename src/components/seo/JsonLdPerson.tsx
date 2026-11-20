import { PERSONAL_INFO } from "@/data/portfolio-data";

export function JsonLdPerson() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    url: "https://chandra.dev",
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.whatsapp,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.instagram,
    ],
    knowsAbout: [
      "Web Development",
      "Frontend Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Search Engine Optimization (SEO)",
      "Web Performance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

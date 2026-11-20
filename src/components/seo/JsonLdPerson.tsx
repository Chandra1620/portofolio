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
      addressLocality: "Indramayu",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    sameAs: [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.instagram,
    ],
    knowsAbout: [
      "Fullstack Web Development",
      "Mobile App Development",
      "Laravel",
      "PHP",
      "Flutter",
      "Dart",
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "RESTful API",
      "Role-Based Access Control (RBAC)",
      "OneSignal",
      "Firebase Cloud Messaging",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

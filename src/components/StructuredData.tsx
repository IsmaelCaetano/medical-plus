import { SITE_CONFIG } from "@/data/site-config";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "Service" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

export function StructuredData({ type, data = {} }: StructuredDataProps) {
  let schema: Record<string, unknown> = {};

  if (type === "Organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.legalName,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/brand/medicalplus-logo-horizontal.png`,
      description: SITE_CONFIG.description,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: `+${SITE_CONFIG.contact.phoneRaw}`,
          contactType: "customer service",
          contactOption: "TollFree",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "ES",
        addressCountry: "BR",
      },
      ...data,
    };
  } else if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      inLanguage: "pt-BR",
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
      ...data,
    };
  } else if (type === "BreadcrumbList") {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      ...data,
    };
  } else if (type === "Service") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Espírito Santo",
      },
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

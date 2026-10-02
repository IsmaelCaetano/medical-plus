import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";
import { SITE_CONFIG } from "@/data/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#83AB49",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Medical Plus | Equipamentos Médicos e Assistência Técnica",
    template: "%s | Medical Plus",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "equipamentos médicos",
    "equipamentos hospitalares",
    "móveis hospitalares",
    "assistência técnica de ultrassom",
    "manutenção de ultrassom",
    "assistência técnica de raio X",
    "manutenção de raio X",
    "assistência técnica de mamógrafo",
    "manutenção de mamógrafo",
    "densitômetro ósseo",
    "tomografia computadorizada",
    "gel para ultrassom",
    "aquecedor de gel",
    "Carbogel",
    "Levita móveis hospitalares",
    "Fujifilm Healthcare",
    "Espírito Santo",
    "Vitória ES",
  ],
  authors: [{ name: SITE_CONFIG.contact.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/brand/favicon-192.png", sizes: "192x192" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    title: "Medical Plus | Equipamentos Médicos e Assistência Técnica",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/brand/medicalplus-logo-horizontal.png`,
        width: 1200,
        height: 630,
        alt: "Medical Plus Equipamentos Médico-Hospitalares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Plus | Equipamentos Médicos e Assistência Técnica",
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/brand/medicalplus-logo-horizontal.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-brand-textMain bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

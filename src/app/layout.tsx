import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://manju1303.github.io/Nexavora-Technologies";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nexavora Technologies — Custom Software & AI Systems",
  description:
    "Engineering-led software studio based in Kallakurichi, Tamil Nadu. We build custom software, web applications, and AI integrations for hospitals, colleges, and growing businesses across India.",
  keywords: [
    "Nexavora Technologies",
    "custom software development India",
    "AI solutions Tamil Nadu",
    "hospital management systems",
    "college ERP software",
    "Kallakurichi software company",
    "web application development",
  ],
  authors: [{ name: "Manjunath", url: siteUrl }],
  creator: "Nexavora Technologies",
  publisher: "Nexavora Technologies",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Nexavora Technologies — Custom Software & AI Systems",
    description:
      "Engineering-led software studio building reliable custom software, web applications, and AI systems for healthcare, education, and businesses across India.",
    siteName: "Nexavora Technologies",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Nexavora Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexavora Technologies — Custom Software & AI Systems",
    description:
      "Engineering-led software studio building reliable custom software, web applications, and AI systems for healthcare, education, and businesses across India.",
    images: [`${siteUrl}/logo.png`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexavora Technologies",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  founder: {
    "@type": "Person",
    name: "Manjunath",
    jobTitle: "Founder & Engineering Lead",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kallakurichi",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Manju1303",
    "https://www.linkedin.com/in/manjunath-manjunath-248594352",
    "https://www.instagram.com/mjx_1303",
  ],
  description:
    "Custom software development, AI systems, and digital infrastructure studio based in Kallakurichi, Tamil Nadu, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

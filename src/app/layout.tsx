import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexavora.com"),
  title: "Nexavora Technologies | Building Smart Digital Solutions",
  description: "Nexavora Technologies is a premium, futuristic IT company based in Kallakurichi, Tamil Nadu, specializing in custom Software Development, AI Solutions, ERP Systems, SaaS Platforms, Cloud Solutions, and Mobile App Development. Leading digital transformation with next-gen architectures.",
  keywords: "Nexavora Technologies, Software Development Kallakurichi, AI Solutions Tamil Nadu, ERP Systems, SaaS Platforms, Web Development Kallakurichi, Mobile Apps, Cloud Solutions, digital transformation, Tamil Nadu tech startup, Manjunath CEO",
  authors: [{ name: "Manjunath", url: "https://nexavora.com" }],
  creator: "Nexavora Technologies",
  publisher: "Nexavora Technologies",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexavora.com",
    title: "Nexavora Technologies | Building Smart Digital Solutions",
    description: "Futuristic software, AI, ERP, and SaaS solutions engineered for high performance, scalability, and premium experiences.",
    siteName: "Nexavora Technologies",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Nexavora Technologies Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexavora Technologies | Building Smart Digital Solutions",
    description: "Futuristic software, AI, ERP, and SaaS solutions engineered for high performance, scalability, and premium experiences.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-dark text-text-primary antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

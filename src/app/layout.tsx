import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexavaro Technologies | Building Smart Digital Solutions",
  description: "Nexavaro Technologies is a premium, futuristic IT company specializing in custom Software Development, AI Solutions, ERP Systems, SaaS Platforms, Cloud Solutions, and Mobile App Development. Leading digital transformation with next-gen architectures.",
  keywords: "Nexavaro Technologies, Software Development, AI Solutions, ERP Systems, SaaS Platforms, Web Development, Mobile Apps, Cloud Solutions, digital transformation, Silicon Valley tech, Manjunath CEO",
  authors: [{ name: "Manjunath", url: "https://nexavaro.com" }],
  creator: "Nexavaro Technologies",
  publisher: "Nexavaro Technologies",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexavaro.com",
    title: "Nexavaro Technologies | Building Smart Digital Solutions",
    description: "Futuristic software, AI, ERP, and SaaS solutions engineered for high performance, scalability, and premium experiences.",
    siteName: "Nexavaro Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexavaro Technologies | Building Smart Digital Solutions",
    description: "Futuristic software, AI, ERP, and SaaS solutions engineered for high performance, scalability, and premium experiences.",
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

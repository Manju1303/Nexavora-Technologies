import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#040817] text-white selection:bg-[#00E5FF] selection:text-[#040817]">
      {/* ── Global Cinematic Looping Ambient Video Background for Entire Website ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover object-center brightness-[0.70] contrast-[1.15] opacity-65"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
        />
        {/* Global Atmospheric Veil for Legibility across all sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040817]/40 via-[#040817]/70 to-[#040817]/90 pointer-events-none" />
      </div>

      <Header />
      <main className="relative z-10 min-h-screen">
        <Hero />
        <Services />
        <Work />
        <Industries />
        <Process />
        <About />
        <Approach />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

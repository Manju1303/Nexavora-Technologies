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
    <>
      <Header />
      <main className="min-h-screen">
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
    </>
  );
}

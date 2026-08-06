import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
 
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Industries />
        <Projects />
        <TechStack />
        <WhyChooseUs />
        <CoreValues />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


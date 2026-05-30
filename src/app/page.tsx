import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
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
        <Industries />
        <Projects />
        <TechStack />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

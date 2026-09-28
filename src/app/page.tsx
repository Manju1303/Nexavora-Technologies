import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import InteractiveArchitecture from "@/components/InteractiveArchitecture";
import GlobalEdgeTelemetry from "@/components/GlobalEdgeTelemetry";
import Services from "@/components/Services";
import ProjectEstimator from "@/components/ProjectEstimator";
import Projects from "@/components/Projects";
import Industries from "@/components/Industries";
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
        <Clients />
        <About />
        <InteractiveArchitecture />
        <GlobalEdgeTelemetry />
        <Services />
        <ProjectEstimator />
        <Projects />
        <Industries />
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

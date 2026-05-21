import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-bg relative overflow-x-hidden">
      {/* Dynamic Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About/Philosophy Section */}
      <About />

      {/* Services Showcase */}
      <Services />

      {/* Portfolio Gallery with Filterable Tabs */}
      <Portfolio />

      {/* Interactive Process Sequence */}
      <Process />

      {/* Testimonials Quotes Carousel */}
      <Testimonials />

      {/* Accordion FAQ Panel */}
      <Faq />

      {/* Sleek Commission Form */}
      <Contact />

      {/* Atelier Editorial Footer */}
      <Footer />
    </main>
  );
}

import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Header from "../components/Header";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import HeroSection from "../components/Hero";
import Parallax from "../components/Skills";
import ProjectsSection from "../components/Projects";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <Parallax/>
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

import Header from "../components/Header";
import AboutSection from "../components/Sections/About";
import ContactSection from "../components/Sections/Contact";
import HeroSection from "../components/Sections/Hero";
import Parallax from "../components/Sections/Skills";
import ProjectsSection from "../components/Sections/Projects";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Parallax/>
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

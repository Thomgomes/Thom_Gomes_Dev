import Section from "../components/Sections";
import AboutSection from "../components/Sections/About";
import ContactSection from "../components/Sections/Contact";
import HeroSection from "../components/Sections/Hero";
import ProjectsSection from "../components/Sections/Projects";

export default function HomePage() {
  return (
    <div className="mx-3">
      <HeroSection />
      <Section>Parallax</Section>
      <ProjectsSection />
      <Section>Parallax</Section>
      <AboutSection />
      <Section>Parallax</Section>
      <ContactSection />
    </div>
  );
}

import Header from "../containers/Header";
import Section from "../containers/Section";

export default function HomePage() {
  return (
    <>
      <Section id="Início">
        <Header />
      </Section>
      <Section>Parallax</Section>
      <Section id="Sobre Mim">Sobre Mim</Section>
      <Section>Parallax</Section>
      <Section id="Projetos">Projetos</Section>
      <Section>Parallax</Section>
      <Section id="Contato">Contato</Section>
    </>
  );
}

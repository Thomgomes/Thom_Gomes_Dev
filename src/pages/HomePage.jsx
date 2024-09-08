import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import Section from "../containers/Section";

export default function HomePage() {
  return (
    <>
      <header className="">
        <ThemeToggle />
      </header>
      <main className="">
        <h1>Hello, World!</h1>
        Adicione seu conteúdo aqui
      </main>
      <Link to="/404">404</Link>
      <Section>Inicial</Section>
      <Section>Parallax</Section>
      <Section>Sobre Mim</Section>
      <Section>Parallax</Section>
      <Section>Projetos</Section>
      <Section>Parallax</Section>
      <Section>Contato</Section>
    </>
  );
}

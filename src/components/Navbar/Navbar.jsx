import { Link } from "react-router-dom";
import ThemeToggle from "../../ThemeToggle";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre Mim</Link>
        </li>
        <li>
          <Link to="/contact">Projetos</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <ThemeToggle />
      <Sidebar/>
    </nav>
  );
}

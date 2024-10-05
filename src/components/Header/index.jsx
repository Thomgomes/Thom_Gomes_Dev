import Thomty from "../../assets/thomty.gif";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-4 bg-slate-900">
      <a
        href="https://github.com/Thomgomes"
        target="_blank"
        className="flex items-center"
      >
        <img src={Thomty} alt="Thomty" className="h-20 w-20border-2" />
        <span className="text-2xl">Thom Dev</span>
      </a>
      <Navbar />
    </header>
  );
}

import Thomty from "../assets/thomty.gif"
import Navbar from "../components/Navbar/Navbar";

export default function Header() {
  return (
        <header className="flex justify-between items-center pt-4">
            <a href="https://github.com/Thomgomes" target="_blank" className="flex items-center">
                <img src={Thomty} alt="Thomty" className="h-20 w-20border-2"/>
                <span>Thom Dev</span>
            </a>
            <Navbar/>
        </header>
    //   {/* <header className="">
    //     <ThemeToggle />
    //   </header>
    //   <main className="">
    //     <h1>Hello, World!</h1>
    //     Adicione seu conteúdo aqui
    //   </main>
    //   <Link to="/404">404</Link> */}
  );
}

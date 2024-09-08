import Links from "../Links/Links";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex">
        <Links divClass="flex gap-4" liClass="text-lg transition duration-300 ease-in-out hover:text-blue-500 p-1 border-b border-transparent hover:border-blue-500" aClass=""/>
      </ul>
      <Sidebar />
    </nav>
  );
}

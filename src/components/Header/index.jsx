import { motion } from "framer-motion";
import Thomty from "../../assets/thomty.gif";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const HeaderVariants = {
    inital: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={`z-[10] fixed w-screen transition-all duration-300 ease-in-out ${navColour ? "h-24 dark:bg-Claro_Primario/20 bg-Escuro_Primario/20" : "h-32"}`}>
      <motion.nav
        className="relative xl:container mx-auto"
        variants={HeaderVariants}
        initial="inital"
        animate="animate"
      >
        <motion.div
          className={`w-full absolute flex justify-between items-center lg:pl-6 lg:pr-12 pr-6 transition-all duration-300 ease-in-out ${
            navColour ? "pt-2" : "pt-6"
          }`}
          variants={HeaderVariants}
        >
          <motion.a
            href="https://github.com/Thomgomes"
            target="_blank"
            className="flex items-center"
            variants={HeaderVariants}
          >
            <motion.img
              src={Thomty}
              alt="Thomty"
              className="h-20 w-20border-2"
              variants={HeaderVariants}
            />
          </motion.a>
          <motion.div variants={HeaderVariants}>
            <Navbar />
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
}

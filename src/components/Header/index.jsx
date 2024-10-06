import { motion } from "framer-motion";
import Thomty from "../../assets/thomty.gif";
import Navbar from "./Navbar";

export default function Header() {
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
    <motion.header
      className="relative z-[1] xl:container xl:mx-auto mx-6"
      variants={HeaderVariants}
      initial="inital"
      animate="animate"
    >
      <motion.div
        className="w-full absolute top-0 flex justify-between items-center pr-4"
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
          <motion.span className="text-2xl" variants={HeaderVariants}>
            Thom Dev
          </motion.span>
        </motion.a>
        <motion.div variants={HeaderVariants}>
          <Navbar />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

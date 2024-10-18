import { motion } from "framer-motion";
import Github from "./Github";
import Techs from "./tech";
import Tools from "./tool";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Parallax() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id="Parallax"
    >
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl pb-6">
          Habilidades <strong>Técnicas</strong>
        </h1>
        <Techs />
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl pb-6">
          <strong>Ferramentas</strong>
        </h1>
        <Tools />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <Github />
      </motion.div>
    </section>
  );
}

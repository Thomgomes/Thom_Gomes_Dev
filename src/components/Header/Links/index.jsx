/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ThemeToggle from "../../../ThemeToggle";

export default function Links({
  divClass,
  liClass,
  aClass,
  ulVariants,
  liVariants,
}) {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const items = ["Início", "Sobre", "Projetos", "Contato"];

  return (
    <motion.ul className={divClass} variants={ulVariants}>
      {items.map((item) => (
        <motion.li key={item} className={liClass} variants={liVariants}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={aClass}
            href={`#${item}`}
            onClick={(e) => handleClick(e, item)}
          >
            {item}
          </motion.a>
        </motion.li>
      ))}
      <motion.li aVariants={liVariants}>
        <ThemeToggle />
      </motion.li>
    </motion.ul>
  );
}

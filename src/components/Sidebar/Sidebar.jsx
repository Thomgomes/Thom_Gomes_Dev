import { useState } from "react";
import Links from "../Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import { motion } from "framer-motion";
import { itemVariant, linksItemVariant } from "../../Animations/Motion/variants";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      Transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 336px 50px)",
      Transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className="md:hidden">
      <motion.div
        animate={open ? "open" : "closed"}
        variants={variants}
        className="bg-lime-500 fixed top-0 right-0 bottom-0 w-96"
      >
          <Links
            divClass="absolute h-full w-full flex flex-col items-center justify-center gap-6"
            liClass="text-2xl transition duration-300 ease-in-out hover:text-blue-500 border-b border-transparent hover:border-blue-500"
            ulVariants={linksItemVariant}
            liVariants={itemVariant}
          />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open}/>
    </div>
  );
}

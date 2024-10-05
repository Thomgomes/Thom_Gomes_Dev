import { useState } from "react";
import Links from "../Links";
import ToggleButton from "../../Buttons/ToggleButton";
import { motion } from "framer-motion";
import {
  itemVariant,
  linksItemVariant,
  SideBarAnimation,
} from "../../../Animations/Motion/variants";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <motion.div
        animate={open ? "open" : "closed"}
        variants={SideBarAnimation}
        className="bg-lime-500 fixed top-0 right-0 bottom-0 w-80"
      >
        <Links
          divClass="absolute h-full w-full flex flex-col items-center justify-center gap-6"
          liClass="text-2xl transition duration-300 ease-in-out hover:text-blue-500 border-b border-transparent hover:border-blue-500"
          ulVariants={linksItemVariant}
          liVariants={itemVariant}
        />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </div>
  );
}

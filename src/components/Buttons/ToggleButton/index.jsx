import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
export default function ToggleButton({ setOpen, open }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-16 h-16 rounded-full fixed top-[1.2em] -right-1"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          animate={{
            d: open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          animate={{
            d: open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
}

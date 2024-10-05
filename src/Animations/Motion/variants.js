export const SideBarAnimation = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    Transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      mass: 0.7,
      duration: 1,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 271px 50px)",
    Transition: {
      type: "spring",
      delay: 0.5,
      duration: 2,
      stiffness: 400,
      damping: 40,
    },
  },
};

export const linksItemVariant = {
  open: {
    Transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const itemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 70,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

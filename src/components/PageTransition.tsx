import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1.04,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1.2, 0.36, 1], // overshoot ease — collision settle
      scale: {
        type: "spring",
        stiffness: 300,
        damping: 18,
        mass: 0.8,
      },
      y: {
        type: "spring",
        stiffness: 400,
        damping: 22,
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

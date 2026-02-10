import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImpactCardProps {
  children: ReactNode;
  className?: string;
}

const ImpactCard = ({ children, className = "" }: ImpactCardProps) => {
  return (
    <motion.div
      className={`border border-border bg-card p-8 ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 30px -10px hsl(4 80% 52% / 0.12)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default ImpactCard;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"impact" | "settle" | "exit">("impact");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("settle"), 400);
    const t2 = setTimeout(() => setPhase("exit"), 1000);
    const t3 = setTimeout(onComplete, 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ backgroundColor: "hsl(220 15% 10%)" }}
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.05 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={phase === "exit" ? { duration: 0.4, ease: [0.4, 0, 1, 1] } : {}}
      >
        {/* Collision rings */}
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-white/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            phase === "settle"
              ? { scale: 3, opacity: 0 }
              : { scale: 0.5, opacity: 0.3 }
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border border-white/5"
          initial={{ scale: 0 }}
          animate={
            phase === "settle"
              ? { scale: 5, opacity: 0 }
              : { scale: 0.8, opacity: 0.2 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />

        {/* Impact dot */}
        <motion.div
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: "hsl(4 80% 52%)" }}
          initial={{ scale: 0 }}
          animate={
            phase === "impact"
              ? { scale: [0, 2.5, 1] }
              : phase === "settle"
              ? { scale: [1, 0] }
              : {}
          }
          transition={{
            duration: phase === "impact" ? 0.4 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Logo */}
        <motion.div
          className="relative flex flex-col items-center gap-3"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={
            phase === "impact"
              ? { opacity: 1, scale: [1.3, 0.95, 1] }
              : phase === "settle"
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.97, y: -10 }
          }
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            scale: { type: "spring", stiffness: 400, damping: 18 },
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center"
              style={{ backgroundColor: "hsl(4 80% 52%)" }}
            >
              <span className="text-white font-bold text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                TT
              </span>
            </div>
            <span
              className="text-white font-bold text-sm tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              TithikhaTech
            </span>
          </div>

          <motion.div
            className="h-px w-0"
            style={{ backgroundColor: "hsl(4 80% 52% / 0.5)" }}
            animate={phase === "settle" ? { width: 120 } : { width: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

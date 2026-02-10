import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "dot" | "line" | "shard";
  rotation: number;
  opacity: number;
}

const CollisionParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    const items: Particle[] = [];
    for (let i = 0; i < 28; i++) {
      const type = i < 14 ? "dot" : i < 22 ? "shard" : "line";
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === "dot" ? 2 + Math.random() * 3 : type === "shard" ? 6 + Math.random() * 10 : 20 + Math.random() * 30,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * -20,
        type,
        rotation: Math.random() * 360,
        opacity: 0.06 + Math.random() * 0.12,
      });
    }
    return items;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => {
        if (p.type === "dot") {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.id % 3 === 0 ? "hsl(4 80% 52%)" : "hsl(220 15% 10%)",
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -30 - Math.random() * 40, 0],
                x: [0, (Math.random() - 0.5) * 50, 0],
                opacity: [p.opacity, p.opacity * 1.8, p.opacity],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        }

        if (p.type === "shard") {
          return (
            <motion.div
              key={p.id}
              className="absolute"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size * 0.35,
                backgroundColor: p.id % 2 === 0 ? "hsl(4 80% 52%)" : "hsl(220 15% 10%)",
                opacity: p.opacity * 0.7,
                borderRadius: "1px",
              }}
              animate={{
                rotate: [p.rotation, p.rotation + 90, p.rotation + 180, p.rotation + 360],
                y: [0, -20 - Math.random() * 30, 10, 0],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.3, p.opacity * 0.5],
              }}
              transition={{
                duration: p.duration * 1.2,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        }

        // line type
        return (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: 1,
              backgroundColor: "hsl(220 15% 10%)",
              opacity: p.opacity * 0.5,
              transformOrigin: "center",
            }}
            animate={{
              rotate: [p.rotation, p.rotation + 30, p.rotation - 20, p.rotation],
              opacity: [p.opacity * 0.3, p.opacity * 0.8, p.opacity * 0.3],
              scaleX: [1, 1.4, 0.7, 1],
            }}
            transition={{
              duration: p.duration * 1.5,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default CollisionParticles;

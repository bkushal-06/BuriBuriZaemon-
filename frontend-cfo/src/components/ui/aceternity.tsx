import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// AnimatedGradient component for animated gradients
export const AnimatedGradient = ({
  className,
  containerClassName,
  from = "from-primary",
  via = "via-purple-500",
  to = "to-indigo-500",
  animate = true,
  duration = 15,
  children,
}: {
  className?: string;
  containerClassName?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
  duration?: number;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          from,
          via,
          to,
          animate && "animate-gradient",
          className
        )}
        style={
          animate
            ? {
                backgroundSize: "400% 400%",
                animation: `gradientAnimation ${duration}s ease infinite`,
              }
            : {}
        }
      />
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
      {children}
    </div>
  );
};

// SpotlightCard component with interactive spotlight effect
export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.2)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setPosition({ x: x / width, y: y / height });
    }
  };

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x * 100}% ${position.y * 100}%, ${spotlightColor}, transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

// TracingBeam component for tracing animation
export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
      <div
        className="absolute left-8 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-foreground/20 bg-background shadow-md"
        style={{
          top: Math.max(20, scrollY * 0.1), // Start at 20px and move as user scrolls
          transition: "top 0.2s ease-out",
        }}
      />
      <div className="ml-16">{children}</div>
    </div>
  );
};

// FloatingCards component for floating animation
export const FloatingCards = ({
  items,
  className,
  children,
}: {
  items?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  children?: React.ReactNode;
}) => {
  // If children are provided, wrap them in the floating effect
  if (children) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateZ(0) perspective(1000px) rotateX(${Math.random() > 0.5 ? 2 : -2}deg) rotateY(${Math.random() > 0.5 ? 1 : -1}deg)`,
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Original implementation with items prop
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items?.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="relative p-6 rounded-xl border border-border bg-card"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(0) perspective(1000px) rotateX(${idx % 2 ? 2 : -2}deg) rotateY(${idx % 3 ? 1 : -1}deg)`,
            boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
          }}
        >
          {item.icon && <div className="mb-4 text-primary">{item.icon}</div>}
          <h3 className="text-lg font-medium mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// BackgroundBeams component for beam animation
export function BackgroundBeams({
  className
}: {
  className?: string
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
          />
        </div>
      </div>
    </div>
  );
}

// 3D Floating Text component
export const FloatingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (clientY - top) / height - 0.5; // -0.5 to 0.5
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  return (
    <motion.div
      className={cn("relative select-none", className)}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="origin-center"
      >
        <span className="block text-4xl md:text-6xl font-bold tracking-tight">
          {text}
        </span>
        <div 
          className="absolute inset-0 opacity-50 blur-sm -z-10"
          style={{
            transform: "translateZ(-10px)",
          }}
        >
          <span className="block text-4xl md:text-6xl font-bold tracking-tight text-primary/50">
            {text}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add a GlowingBorder component
export const GlowingBorder = ({
  children,
  className,
  glowColor = "rgba(74, 222, 128, 0.6)"
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) => {
  return (
    <div 
      className={cn("relative rounded-lg p-px overflow-hidden", className)}
      style={{
        background: `linear-gradient(45deg, transparent, ${glowColor}, transparent)`,
        backgroundSize: "200% 200%",
        animation: "borderGlow 3s ease infinite",
      }}
    >
      <style jsx global>{`
        @keyframes borderGlow {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
      <div className="bg-card rounded-lg relative z-10">
        {children}
      </div>
    </div>
  );
};

// Add a Particle component for dynamic backgrounds
export const ParticleBackground = ({
  className,
  quantity = 40,
  particleColor = "var(--primary)",
}: {
  className?: string;
  quantity?: number;
  particleColor?: string;
}) => {
  const particles = Array.from({ length: quantity });
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 1;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: size,
              height: size,
              backgroundColor: particleColor,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.3, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

// StickyScrollReveal component
export const StickyScrollReveal = ({
  children,
  className,
  revealItems
}: {
  children?: React.ReactNode;
  className?: string;
  revealItems?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !revealItems?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      }
    );

    const sectionElements = container.querySelectorAll("[data-index]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [revealItems]);

  // If direct children are provided, render them within the sticky container
  if (children) {
    return (
      <div ref={containerRef} className={cn("relative", className)}>
        {children}
      </div>
    );
  }

  // If revealItems are provided, render the reveal list
  return (
    <div ref={containerRef} className={cn("relative flex flex-col md:flex-row", className)}>
      <div className="md:w-1/2 sticky top-0 h-screen flex items-center p-6">
        <div className="max-w-md mx-auto">
          {revealItems?.map((item, idx) => (
            <div 
              key={idx} 
              className={`transition-opacity duration-300 absolute inset-0 flex flex-col justify-center ${activeIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {item.icon && <div className="text-primary mb-4">{item.icon}</div>}
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:w-1/2 py-40">
        <div className="space-y-80">
          {revealItems?.map((_, idx) => (
            <div 
              key={idx} 
              data-index={idx} 
              className="h-screen flex items-center p-6"
            >
              <div className={`h-64 w-full rounded-xl bg-muted ${activeIndex === idx ? 'border-2 border-primary' : 'border border-border'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
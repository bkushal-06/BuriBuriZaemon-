import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  FileSearch,
  Calculator,
  Users,
  Server,
  BadgeCheck,
  Lock,
  LineChart,
  BrainCircuit
} from "lucide-react";

export default function FeaturesSectionModern() {
  const features = [
    {
      title: "Smart Doc Checker",
      description:
        "AI-powered document conflict detection that keeps your organization compliant",
      icon: <FileSearch className="w-6 h-6" />,
    },
    {
      title: "CFO Helper",
      description:
        "Advanced financial scenario simulation for strategic decision making",
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      title: "Role-Based Access",
      description:
        "Tailored experiences for employees, financial managers, and system creators",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Real-Time Analytics",
      description: "Instant insights from uploaded documents and financial models",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with major security standards",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Scalable Architecture",
      description:
        "Handles from dozens to millions of documents with consistent performance",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "AI-Powered Processing",
      description:
        "Advanced machine learning models for document analysis and financial simulation",
      icon: <BrainCircuit className="w-6 h-6" />,
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "Enterprise-grade reliability for mission-critical operations",
      icon: <BadgeCheck className="w-6 h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
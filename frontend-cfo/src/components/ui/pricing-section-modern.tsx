import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Check,
  Shield,
  CreditCard,
  Users,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSectionModern() {
  const tiers = [
    {
      title: "Employee",
      description:
        "For team members who upload and review documents",
      icon: <Users className="w-6 h-6" />,
      price: "5",
      unit: "credits",
      per: "per document analysis",
      features: [
        "Document upload & conflict detection",
        "Basic conflict reporting",
        "Email notifications",
        "Mobile app access", 
        "Standard support"
      ],
      color: "purple",
      cta: "Start with Employee Access"
    },
    {
      title: "CFO",
      description:
        "Advanced analytics plus all Employee features",
      icon: <BarChart3 className="w-6 h-6" />,
      price: "15",
      unit: "credits",
      per: "per scenario simulation",
      features: [
        "Everything in Employee tier",
        "Advanced financial modeling",
        "Multi-scenario simulation",
        "Executive dashboards",
        "Export to Excel/PDF",
        "Priority support",
        "API access"
      ],
      color: "orange",
      cta: "Upgrade to CFO",
      popular: true
    },
    {
      title: "Enterprise",
      description:
        "For large organizations with complex needs",
      icon: <Shield className="w-6 h-6" />,
      price: "Custom",
      features: [
        "Custom implementation",
        "Dedicated support team",
        "SLA guarantees",
        "Advanced security features",
        "Custom integrations",
        "Training & onboarding",
        "Unlimited users"
      ],
      color: "blue",
      cta: "Contact Sales"
    },
    {
      title: "Credit Packages",
      description:
        "Purchase credits in bulk and save more",
      icon: <CreditCard className="w-6 h-6" />,
      packages: [
        { amount: "100", price: "$49", savings: "" },
        { amount: "500", price: "$199", savings: "Save 20%" },
        { amount: "1,000", price: "$349", savings: "Save 30%" },
        { amount: "5,000", price: "$1,499", savings: "Save 40%" }
      ],
      color: "green",
      cta: "Get 50 Free Credits"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {tiers.map((tier, index) => (
        <PricingTier key={tier.title} {...tier} index={index} />
      ))}
    </div>
  );
}

const PricingTier = ({
  title,
  description,
  icon,
  price,
  unit,
  per,
  features,
  packages,
  color,
  cta,
  popular,
  index
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  unit?: string;
  per?: string;
  features?: string[];
  packages?: { amount: string; price: string; savings: string }[];
  color: string;
  cta: string;
  popular?: boolean;
  index: number;
}) => {
  const colorClasses = {
    purple: "border-purple-500 bg-purple-500/5 text-purple-500",
    orange: "border-orange-500 bg-orange-500/5 text-orange-500",
    blue: "border-blue-500 bg-blue-500/5 text-blue-500",
    green: "border-green-500 bg-green-500/5 text-green-500",
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/pricing dark:border-neutral-800",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        "lg:border-b dark:border-neutral-800"
      )}
    >
      {popular && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          Popular
        </div>
      )}
      
      <div className="opacity-0 group-hover/pricing:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800/50 to-transparent pointer-events-none" />
      
      <div className={`mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses[color as keyof typeof colorClasses]}`}>
          {icon}
        </div>
      </div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className={`absolute left-0 inset-y-0 h-6 group-hover/pricing:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/pricing:bg-${color}-500 transition-all duration-200 origin-center`} />
        <span className="group-hover/pricing:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 relative z-10 px-10">
        {description}
      </p>
      
      {price && (
        <div className="mb-6 px-10 relative z-10">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{price}</span>
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </div>
          {per && <div className="text-sm text-neutral-500 dark:text-neutral-400">{per}</div>}
        </div>
      )}
      
      {features && (
        <div className="space-y-3 mb-8 px-10 relative z-10">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className={`h-5 w-5 text-${color}-500 shrink-0 mt-0.5`} />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      {packages && (
        <div className="space-y-4 mb-8 px-10 relative z-10">
          {packages.map((pkg, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg border dark:border-neutral-700 hover:border-green-500 transition-colors">
              <div>
                <div className="font-medium">{pkg.amount} credits</div>
                {pkg.savings && <div className="text-xs text-green-500">{pkg.savings}</div>}
              </div>
              <div className="text-lg font-bold">{pkg.price}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-auto px-10 relative z-10">
        <Button 
          className={`w-full ${popular ? 'bg-primary hover:bg-primary/90' : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100'}`}
          variant={popular ? 'default' : 'outline'}
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
};
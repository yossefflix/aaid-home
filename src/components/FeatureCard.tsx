import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  accentColor?: "primary" | "accent";
  className?: string;
  style?: React.CSSProperties;
  actionButton?: {
    label: string;
    href: string;
  };
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  accentColor = "primary",
  className,
  style,
  actionButton
}: FeatureCardProps) => {
  const colorClasses = {
    primary: {
      icon: "text-primary",
      glow: "group-hover:shadow-[0_0_40px_hsl(199,89%,48%,0.3)]",
      border: "group-hover:border-[hsl(199,89%,48%,0.4)]",
    },
    accent: {
      icon: "text-accent",
      glow: "group-hover:shadow-[0_0_40px_hsl(45,93%,58%,0.3)]",
      border: "group-hover:border-[hsl(45,93%,58%,0.4)]",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <div
      className={cn(
        "group relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2",
        colors.glow,
        colors.border,
        className
      )}
      style={style}
    >
      {/* Icon */}
      <div className={cn(
        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6",
        accentColor === "primary" 
          ? "from-primary/20 to-primary/5" 
          : "from-accent/20 to-accent/5"
      )}>
        <Icon className={cn("w-8 h-8", colors.icon)} />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      {/* Feature List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className={cn(
                "w-1.5 h-1.5 rounded-full",
                accentColor === "primary" ? "bg-primary" : "bg-accent"
              )} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Action Button */}
      {actionButton && (
        <Button
          variant={accentColor === "primary" ? "default" : "outline"}
          size="sm"
          className="mt-2"
          onClick={() => window.open(actionButton.href, "_blank")}
        >
          {actionButton.label}
          <ExternalLink className="w-4 h-4 ml-1" />
        </Button>
      )}

      {/* Hover Glow Effect */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
        accentColor === "primary"
          ? "bg-gradient-to-br from-primary/5 to-transparent"
          : "bg-gradient-to-br from-accent/5 to-transparent"
      )} />
    </div>
  );
};

export default FeatureCard;

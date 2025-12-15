import FeatureCard from "./FeatureCard";
import { Brain, QrCode, Bot, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "🧠 DR. Assistant",
      description: "Your intelligent personal assistant. Organizes your work, tracks your tasks, and delivers insights instantly—without you lifting a finger.",
      features: [
        "Smart task management",
        "Real-time insights",
        "Automated workflows",
        "24/7 availability"
      ],
      accentColor: "primary" as const,
    },
    {
      icon: QrCode,
      title: "🔒 QR Code Quantum Lock",
      description: "A revolutionary attendance system. One QR code = Secure access, real-time tracking, and accurate attendance reports.",
      features: [
        "Quantum-secure encryption",
        "Real-time tracking",
        "Accurate reports",
        "Instant verification"
      ],
      accentColor: "accent" as const,
      actionButton: {
        label: "Test Now",
        href: "https://qr.g-aid.cloud/"
      }
    },
    {
      icon: Bot,
      title: "🤖 AI Chatbot",
      description: "A chatbot that actually understands your business. Available 24/7 to answer questions, guide customers, and close sales like a pro.",
      features: [
        "Trained on your data",
        "Multi-language support",
        "Smart recommendations",
        "Seamless integration"
      ],
      accentColor: "primary" as const,
    },
    {
      icon: MessageSquare,
      title: "💬 Ultra-Level Support",
      description: "Your smart digital employee—always on, always accurate. Replies instantly, understands your services, and converts leads while you sleep.",
      features: [
        "Instant replies",
        "Service understanding",
        "Package recommendations",
        "Lead conversion"
      ],
      accentColor: "accent" as const,
    },
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to automate, scale, and dominate your industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

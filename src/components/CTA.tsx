import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Shield, MessageCircle } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-10">
            {[Zap, TrendingUp, Shield].map((Icon, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-2xl glass flex items-center justify-center animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Icon className="w-8 h-8 text-primary" />
              </div>
            ))}
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">G AID</span>
            <br />
            <span className="text-foreground">Your Smart Growth Partner</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you want to scale faster, work smarter, and stay miles ahead 
            of your competitors—<span className="text-foreground font-semibold">G AID is your next move.</span>
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Scale Faster", "Work Smarter", "Stay Ahead"].map((benefit, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full glass text-foreground font-medium"
              >
                ⚡ {benefit}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              data-cal-namespace="30min"
              data-cal-link="smart-flows/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              BOOK A CONSULTATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://wa.me/+201151808631", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">AI-Powered Business Solutions</span>
          </div>

          {/* Main Heading */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Save - vertical text on the left */}
            <span className="font-display text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground writing-vertical tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
              Save
            </span>
            
            {/* Time, Money, Effort */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-left">
              <span className="text-foreground">Time.</span>
              <br />
              <span className="text-slate-500">Money.</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-black">Effort.</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-foreground">from </span>
            <span className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-black glitch" data-text="G AID">G AID</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            The smart platform built to scale your business, automate your workflow, 
            and keep you always one step ahead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              data-cal-namespace="30min"
              data-cal-link="smart-flows/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Watch Demo
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => window.open("https://wa.me/+201151808631", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Expert
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/about">
                <Users className="w-5 h-5 mr-2" />
                About Us
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
            {[
              { value: "500+", label: "Businesses Scaled" },
              { value: "99%", label: "Automation Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient glow-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Check, Share2, Video, FileText, BarChart3, Users, PenTool } from "lucide-react";

const SocialMedia = () => {
  const features = [
    { icon: Users, text: "Basic audience research" },
    { icon: PenTool, text: "8 professional posts per month" },
    { icon: Video, text: "2 high-quality videos" },
    { icon: FileText, text: "Engaging copywriting" },
    { icon: Share2, text: "Smart lead-capture form" },
    { icon: BarChart3, text: "Monthly performance reports" },
  ];

  return (
    <section id="social" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Share2 className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Social Media Management</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Full Social Media</span>
                <br />
                <span className="text-foreground">Management</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to grow online—handled for you. 
                From content creation to performance tracking, we've got you covered.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg glass"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg">
                Start Growing Today
              </Button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="glass rounded-3xl p-8 glow-accent">
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="font-display font-bold text-lg text-gradient">Analytics</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Engagement", value: "+127%", color: "text-primary" },
                      { label: "Followers", value: "+2.4K", color: "text-accent" },
                      { label: "Leads", value: "156", color: "text-primary" },
                      { label: "Conversions", value: "89%", color: "text-accent" },
                    ].map((stat, index) => (
                      <div key={index} className="p-4 rounded-xl bg-secondary/50">
                        <div className={`font-display text-2xl font-bold ${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Bars */}
                  <div className="flex items-end justify-between h-32 gap-2 pt-4">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-primary/50 to-accent/50"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass p-4 rounded-xl animate-float">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Post Published!</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <span className="text-sm">+45% Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

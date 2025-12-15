import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow group-hover:scale-110 transition-transform">
              <span className="font-display font-bold text-primary-foreground">G</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wider">
              <span className="text-gradient">G AID</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#social" className="text-muted-foreground hover:text-primary transition-colors">Social Media</a>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Button 
              variant="hero" 
              size="sm"
              className="group"
              data-cal-namespace="30min"
              data-cal-link="smart-flows/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              BOOK A CONSULTATION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open("https://wa.me/+201151808631", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Expert
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors py-2">Features</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors py-2">Services</a>
            <a href="#social" className="text-muted-foreground hover:text-primary transition-colors py-2">Social Media</a>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors py-2">About Us</Link>
            <Button 
              variant="hero" 
              className="w-full group"
              data-cal-namespace="30min"
              data-cal-link="smart-flows/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              BOOK A CONSULTATION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://wa.me/+201151808631", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Expert
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import { Bot, Cpu, Database, FileText, Image, Headphones, Calendar, BarChart3, Settings, Share2, Briefcase, TrendingUp, Users, Zap, Target, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import youssefImg from "@/assets/team/youssef-hejazi.jpg";
import loaiImg from "@/assets/team/loai-alnagar.jpeg";
import khaledImg from "@/assets/team/khaled-sadek.jpeg";
import ibrahimImg from "@/assets/team/ibrahim-wageh.png";
import selimImg from "@/assets/team/selim-mohammed.png";

const teamMembers = [
  { name: "Youssef Hejazi", image: youssefImg },
  { name: "Ibrahim Wageh", image: loaiImg },
  { name: "Selim Mohammed", image: khaledImg },
  { name: "Loai Almetwaly Alnagar", image: ibrahimImg },
  { name: "Khaled Walid Sadek", image: selimImg },
];

const missionItems = [
  {
    icon: Bot,
    title: "Development of Intelligent Agents",
    description: "Creation of specialized AI systems that work as independent agents able to make decisions and carry out tasks."
  },
  {
    icon: Settings,
    title: "Full Automation Systems",
    description: "Design and implementation of automation solutions covering all business processes."
  },
  {
    icon: Layers,
    title: "Smart Integration",
    description: "Connect existing corporate systems with smart solutions for efficient workflow."
  }
];

const agentModels = [
  { icon: Calendar, title: "AI Agent Management", description: "Automatic appointment management and scheduling with full calendar integration" },
  { icon: FileText, title: "Document Processing Agent", description: "Create, edit and analyze documents with advanced AI automation" },
  { icon: BarChart3, title: "Data Analytics Agent", description: "Analyze data and extract valuable insights from multiple sources" },
  { icon: Image, title: "Visual Content Agent", description: "Generate images and visual content dedicated to your brand" },
  { icon: Database, title: "Knowledge Agent", description: "Answer inquiries and manage organizational knowledge bases 24/7" },
  { icon: Headphones, title: "Audio Processing Agent", description: "Convert audio and visual content into processable text" },
];

const automationSystems = [
  { icon: Users, title: "Customer Support Automation", description: "Integrated intelligent agent handles inquiries, solves problems, and learns from interactions" },
  { icon: TrendingUp, title: "Market Analysis Automation", description: "Constant monitoring of trends and competitors with smart strategy generation" },
  { icon: Briefcase, title: "Project Management Automation", description: "Intelligent task management, resource allocation, and risk alerts" },
  { icon: Share2, title: "Digital Marketing Automation", description: "Custom content generation and campaign performance optimization" },
  { icon: Cpu, title: "ERP & CRM Automation", description: "Full integration with enterprise systems for comprehensive process automation" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glitch" data-text="G AID">G AID</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming businesses through intelligent automation and AI-powered solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Development</span> Team
            </h2>
            <p className="text-muted-foreground text-lg">Meet the minds behind G AID</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl glass p-4">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4"
                  >
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-transparent"
                      whileHover={{
                        borderColor: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--primary))"],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Name */}
                  <motion.h3
                    className="font-display text-lg font-semibold text-center text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"
                  >
                    {member.name}
                  </motion.h3>
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-60"
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              G-AID agency specializes in building and developing artificial intelligence systems for companies and business. 
              Our main mission is to create intelligent solutions that transform companies from manual operations to fully automated intelligent systems.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {missionItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass p-8 rounded-2xl text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intelligent Agent Models */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Agent Models</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {agentModels.map((agent, index) => (
              <motion.div
                key={agent.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass p-6 rounded-xl flex items-start gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0"
                >
                  <agent.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{agent.title}</h3>
                  <p className="text-sm text-muted-foreground">{agent.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full Automation Systems */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Automation Systems</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {automationSystems.map((system, index) => (
              <motion.div
                key={system.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative glass p-6 rounded-xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4"
                  >
                    <system.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{system.title}</h3>
                  <p className="text-sm text-muted-foreground">{system.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

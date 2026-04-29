import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBuildings from "@/assets/hero-buildings.jpg";
import logo from "@/assets/rvd-logo.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBuildings})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Dark Overlay with Blueprint Pattern */}
      <div className="absolute inset-0 bg-foreground/75" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Framed Content Box - Competitor Style */}
        <motion.div 
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          
          
          <div className="px-8 sm:px-16 py-12 sm:py-16">
            {/* Logo */}
            <motion.img 
              src={logo}
              alt="RVD Logo"
              className="h-[20vh] sm:h-[28vh] max-h-[320px] w-auto mx-auto mb-1"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ratindra V. Desai
            </motion.h1>
            
            <motion.div 
              className="w-24 h-1 bg-accent mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            
            <motion.p 
              className="text-xl sm:text-2xl text-accent font-semibold tracking-wide uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Design MEPF Services & PMC
            </motion.p>
            
            <motion.p 
              className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Engineering Excellence Since 1991 | 32+ Years of Expertise
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider font-semibold"
                asChild
              >
                <a href="/company-profile.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Profile
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity }
        }}
      >
        <ArrowDown className="h-8 w-8 text-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;
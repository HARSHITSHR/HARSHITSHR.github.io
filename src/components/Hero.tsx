import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBuildings from "@/assets/hero-buildings.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBuildings})` }}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight tracking-tight">
            Ratindra V. Desai
            <br />
            <span className="text-accent">Design MEPF Services & PMC</span>
          </h1>
          <p className="text-lg sm:text-xl text-card/90 max-w-2xl mx-auto">
            Experience Excellence in MEPF & Project Consulting
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="/company-profile.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Company Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-card to-secondary/50 pt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Ratindra V. Desai
            <br />
            <span className="text-primary">Design MEPF Services & PMC</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
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

import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "32+ Years of Expertise",
    "MEPF Design & Coordination",
    "Residential, Commercial, Hospitality, Institutional & Industrial Projects",
    "Fire Protection, Detailed Drawings, Bill Checking, Tendering",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2017, RVD Design provides expert consultancy and management
            services in MEPF design across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <p className="text-base text-foreground font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

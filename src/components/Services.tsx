import { 
  Zap, 
  Droplets, 
  Wind, 
  Flame, 
  Building2, 
  FileCheck,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Complete electrical design including HT/LT systems, lighting, power distribution, and smart building solutions.",
    },
    {
      icon: Droplets,
      title: "Plumbing & Drainage",
      description: "Water supply, sanitary systems, rainwater harvesting, and sewage treatment plant design.",
    },
    {
      icon: Wind,
      title: "HVAC Systems",
      description: "Central air conditioning, ventilation, VRV/VRF systems, and indoor air quality management.",
    },
    {
      icon: Flame,
      title: "Fire Protection",
      description: "Fire detection, suppression systems, sprinklers, hydrants, and NBC compliance.",
    },
    {
      icon: Building2,
      title: "Project Management",
      description: "End-to-end PMC services including coordination, supervision, and quality control.",
    },
    {
      icon: FileCheck,
      title: "Technical Audits",
      description: "Due diligence, fire audits, energy audits, and compliance assessments.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-foreground relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-primary-foreground mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
            Comprehensive MEPF solutions for residential, commercial, hospitality, 
            institutional, and industrial projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Arrow */}
              <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-accent/20 border-l-[48px] border-l-transparent group-hover:border-t-accent/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
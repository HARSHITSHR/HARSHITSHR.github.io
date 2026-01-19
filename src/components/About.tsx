import { CheckCircle, Award, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Award, value: "32+", label: "Years Experience" },
    { icon: Building, value: "100+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Happy Clients" },
  ];

  const features = [
    "MEPF Design & Coordination",
    "Project Management Consultancy (PMC)",
    "Fire Protection Systems",
    "Detailed Engineering Drawings",
    "Bill Checking & Tendering",
    "Technical Due Diligence",
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-foreground mb-4">About Our Firm</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="section-subheading">
            Founded in 2017, RVD Design provides expert consultancy and management
            services in MEPF design across India. With over three decades of industry experience,
            we deliver excellence in every project.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-foreground rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <stat.icon className="h-10 w-10 text-accent mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
              </div>
              <p className="text-foreground font-medium">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
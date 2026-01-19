import { Users2 } from "lucide-react";
import { motion } from "framer-motion";

const Associates = () => {
  const associates = [
    { name: "Architect Ankit Makani", specialty: "Commercial" },
    { name: "Architect Kaif Faqui", specialty: "Residential" },
    { name: "Architect Samir Darurkar", specialty: "Industrial" },
    { name: "Architect Prashant Chowdhari", specialty: "Hospitality" },
    { name: "Architect Vivek Bhole", specialty: "Commercial" },
    { name: "Architect Annkur Khosla", specialty: "Luxury" },
    { name: "Architect Hafeez Contractor", specialty: "High-Rise" },
    { name: "TEKTON Design Engineering", specialty: "Structural" },
    { name: "Architect Abha Narayan Lambah", specialty: "Heritage" },
  ];

  return (
    <section id="associates" className="py-24 bg-secondary/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-foreground mb-4">Our Associates</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="section-subheading">
            Collaborating with renowned architects and consultants.
          </p>
        </motion.div>

        {/* Associates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {associates.map((associate, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-card rounded-lg border border-border p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors">
                <Users2 className="h-6 w-6 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{associate.name}</p>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {associate.specialty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;
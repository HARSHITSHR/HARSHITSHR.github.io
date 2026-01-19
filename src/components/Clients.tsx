import { motion } from "framer-motion";
import { Building2, Star } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "Aditya Birla", category: "Corporate" },
    { name: "Della Villas", category: "Hospitality" },
    { name: "Food Link", category: "F&B" },
    { name: "Hotel Ginger", category: "Hotels" },
    { name: "JP Infra", category: "Real Estate" },
    { name: "Universal School", category: "Education" },
    { name: "Janam Diamond", category: "Industrial" },
    { name: "Ornate Universal", category: "Real Estate" },
    { name: "Shahid Kapoor", category: "Celebrity" },
    { name: "Sunil Shetty", category: "Celebrity" },
    { name: "Bramhan Seva Sangh", category: "Institutional" },
    { name: "Club Mahindra", category: "Hospitality" },
  ];

  return (
    <section id="clients" className="py-24 bg-foreground relative overflow-hidden">
      {/* Blueprint Grid */}
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
          <h2 className="section-heading text-primary-foreground mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
            Proud to partner with leading names across industries.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-center">
                <Building2 className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-primary-foreground mb-1">
                  {client.name}
                </h4>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                  {client.category}
                </span>
              </div>
              
              {/* Hover Star */}
              <Star className="absolute top-3 right-3 h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
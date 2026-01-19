import { Users, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Ratindra V. Desai",
      role: "Founder & Principal Consultant",
      experience: "32+ Years in MEPF Design",
      description: "Expert in mechanical, electrical, plumbing, and fire protection systems with extensive experience across residential, commercial, and industrial projects.",
      icon: Award,
    },
    {
      name: "Technical Team",
      role: "Engineers & Draftsmen",
      experience: "Dedicated Specialists",
      description: "1 engineer & 1 draftsman per service discipline, plus 2 support staff ensuring comprehensive project coverage.",
      icon: Users,
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/60 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-foreground mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="section-subheading">
            Meet the experts behind our successful project deliveries.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-card rounded-xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Top Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              
              <div className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">
                  {member.role}
                </p>
                <p className="text-primary font-medium mb-4">
                  {member.experience}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
              
              {/* Bottom Decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
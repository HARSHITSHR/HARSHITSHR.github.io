import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ratindra V. Desai",
      role: "Proprietor",
      experience: "32 Years Experience in MEPF",
      icon: true,
    },
    {
      name: "Team Engineers & Support",
      description: "1 engineer & 1 draftsman per service + 2 support staff",
      icon: true,
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Key Team
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-primary font-medium mb-2">{member.role}</p>
              )}
              {member.experience && (
                <p className="text-muted-foreground">{member.experience}</p>
              )}
              {member.description && (
                <p className="text-muted-foreground">{member.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

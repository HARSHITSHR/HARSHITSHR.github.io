import { Building2 } from "lucide-react";

const Associates = () => {
  const associates = [
    "Architect Ankit Makani",
    "Architect Kaif Faqui",
    "Architect Samir Darurkar",
    "Architect Prashant Chowdhari",
    "Architect Vivek Bhole",
    "Architect Annkur Khosla",
    "Architect Hafeez Contractor",
    "TEKTON Design Engineering",
    "Architect Abha Narayan Lambah",
  ];

  return (
    <section id="associates" className="py-24 bg-secondary/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Associated Architects & Consultants
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {associates.map((associate, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gradient-to-r from-card to-primary/20 rounded-xl border border-primary/30 p-4 hover:shadow-lg hover:border-primary/60 hover:to-accent/25 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{associate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;

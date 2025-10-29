import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  image?: string;
}

interface ProjectCategory {
  title: string;
  id: string;
  projects: Project[];
}

const Projects = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [scrollPositions, setScrollPositions] = useState<{ [key: string]: number }>({});

  const categories: ProjectCategory[] = [
    {
      title: "Hotels",
      id: "hotels",
      projects: [
        { title: "Hotel Benin (West Africa)" },
        { title: "Hotel Ginger (Vizag)" },
        { title: "Hotel Ginger (Sambhaji Nagar)" },
        { title: "Hotel MASA (Mumbai)" },
        { title: "Della Villas (Lonavala)" },
        { title: "Theme Park Project (Qatar)" },
      ],
    },
    {
      title: "Restaurants",
      id: "restaurants",
      projects: [
        { title: "Cafe 212 (Mumbai)" },
        { title: "Apple Restaurant (Navi Mumbai)" },
        { title: "Shizusan (Mumbai)" },
        { title: "India Bistro (Mumbai)" },
        { title: "Glocal Restaurant (Bengaluru)" },
      ],
    },
    {
      title: "Residential",
      id: "residential",
      projects: [
        { title: "AdityaRaj Amrut (Ghatkopar)" },
        { title: "AdityaRaj Vidya Darshan (Ghatkopar)" },
        { title: "Sai AdityaRaj (Ghatkopar)" },
        { title: "AdityaRaj Square (Vikhroli)" },
        { title: "AdityaRaj Mangaldeep (Ghatkopar)" },
        { title: "AdityaRaj Avenue (Vikhroli)" },
        { title: "AdityaRaj Central (Ghatkopar)" },
        { title: "AdityaRaj Enclave (Ghatkopar)" },
        { title: "AdityaRaj Breeze (Vikhroli)" },
        { title: "Raj Mittal Bungalow" },
        { title: "Dr. Mishra Bungalow (Alibaug)" },
        { title: "P.R. Sarkar Charities (School + Old Age Home)" },
      ],
    },
    {
      title: "Commercial",
      id: "commercial",
      projects: [
        { title: "JP Infra Office (BKC)" },
        { title: "Janam Diamond Factory" },
        { title: "Synagogue (Mumbai)" },
        { title: "Della Concept Store" },
        { title: "Blazo Garment Factory" },
        { title: "Godrej Sales Office" },
      ],
    },
    {
      title: "Schools",
      id: "schools",
      projects: [
        { title: "Universal School (Dahisar, Thane, Ghatkopar)" },
        { title: "Asmita School Complex" },
        { title: "Vibgyor International School" },
      ],
    },
    {
      title: "Industrial / Misc",
      id: "industrial",
      projects: [
        { title: "Poultry Farm (Satara)" },
        { title: "Della Data Center Project" },
        { title: "AIR PELS TECHNIK – Timesavers" },
        { title: "SSP Saudi Project" },
        { title: "IT Project – Soft Key, Nashik" },
      ],
    },
    {
      title: "Due Diligence / Tech Audits / Fire Audits",
      id: "audits",
      projects: [
        { title: "Club Mahindra Resorts" },
        { title: "Park Regis Hotel, Jaipur" },
        { title: "Tropicana Resort, Alibaug" },
        { title: "AMD Corporate Office, Hyderabad" },
        { title: "DHL Outlets (Mumbai/Pune)" },
        { title: "Holy Family Hospital, Mumbai" },
      ],
    },
  ];

  const scroll = (categoryId: string, direction: "left" | "right") => {
    const container = document.getElementById(`carousel-${categoryId}`);
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Click each category to view our portfolio of completed projects across various sectors.
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full px-6 py-5 flex items-center justify-between transition-all duration-300 ${
                  expandedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-gradient-to-r from-primary/20 to-accent/25 hover:from-primary/30 hover:to-accent/35"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>
                <ChevronRight
                  className={`h-6 w-6 transition-transform duration-300 ${
                    expandedCategory === category.id ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Carousel */}
              {expandedCategory === category.id && (
                <div className="px-6 pb-6">
                  <div className="relative">
                    {/* Scroll Left Button */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm shadow-lg"
                      onClick={() => scroll(category.id, "left")}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {/* Projects Container */}
                    <div
                      id={`carousel-${category.id}`}
                      className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-12"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      {category.projects.map((project, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-72 bg-gradient-to-br from-card to-secondary/70 rounded-xl border border-primary/30 p-6 hover:shadow-lg hover:border-primary/60 transition-all duration-300"
                        >
                          <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">Project Image</span>
                          </div>
                          <h4 className="font-medium text-foreground text-center">
                            {project.title}
                          </h4>
                        </div>
                      ))}
                    </div>

                    {/* Scroll Right Button */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur-sm shadow-lg"
                      onClick={() => scroll(category.id, "right")}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;

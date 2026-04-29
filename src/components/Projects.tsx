import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  image?: string;
}

interface ProjectCategory {
  title: string;
  id: string;
  icon: string;
  projects: Project[];
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("hotels");

  const categories: ProjectCategory[] = [
    {
      title: "Residential",
      id: "residential",
      icon: "🏠",
      projects: [
        { title: "AdityaRaj Amrut (Ghatkopar)",
          image: "/src/assets/projects/adityarajamrut.jpg",
         },
        { title: "AdityaRaj Vidya Darshan",
          image: "/src/assets/projects/adityarajVidyaDarshan.jpg",
         },
        { title: "Sai AdityaRaj (Ghatkopar)",
          image: "/src/assets/projects/saiadityaraj.jpg",
         },
        { title: "AdityaRaj Square (Vikhroli)",
          image: "/src/assets/projects/adityarajamrut.jpg",
         },
        { title: "AdityaRaj Mangaldeep",
          image: "/src/assets/projects/AdityaRaj Mangaldeep.jpg",
         },
        { title: "AdityaRaj Avenue (Vikhroli)",
          image: "/src/assets/projects/Avenue.jpeg",
         },
        { title: "AdityaRaj Central",
          image: "/src/assets/projects/adityarajcentral.jpg",
         },
        { title: "AdityaRaj Enclave",
          image: "/src/assets/projects/enclave1.jpg",
         },
        { title: "AdityaRaj Breeze (Vikhroli)",
          image: "/src/assets/projects/Breeze.jpeg",
         },
        { title: "Raj Mittal Bungalow" },
        { title: "Dr. Mishra Bungalow (Alibaug)" },
      ],
    },
    {
      title: "Hotels",
      id: "hotels",
      icon: "🏨",
      projects: [
        { title: "Hotel Benin (West Africa)" },
        { title: "Hotel Ginger (Vizag)",
          image: "/src/assets/projects/ginger-visakhapatnam.jpg",
         },
        { title: "Hotel Ginger (Sambhaji Nagar)",
          image: "/src/assets/projects/ginger sam.png",
         },
        { title: "Hotel MASA (Mumbai)" },
        { title: "Della Villas (Lonavala)" },
        { title: "Theme Park Project (Qatar)" },
      ],
    },
    {
      title: "Restaurants",
      id: "restaurants",
      icon: "🍽️",
      projects: [
        { title: "Cafe 212 (Mumbai)",
          image: "/src/assets/projects/cafe-212.png",
         },
        { title: "Apple Restaurant (Navi Mumbai)" },
        { title: "Shizusan (Mumbai)",
          image: "/src/assets/projects/shizusan.jpg",
         },
        { title: "India Bistro (Mumbai)",
          image: "/src/assets/projects/india-bistro.jpg",
         },
        { title: "Glocal Restaurant (Bengaluru)",
          image: "/src/assets/projects/glocal.jpg",
         },
      ],
    },
    
    {
      title: "Commercial",
      id: "commercial",
      icon: "🏢",
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
      icon: "🏫",
      projects: [
        { title: "Universal School (Dahisar)" },
        { title: "Universal School (Thane)" },
        { title: "Asmita School Complex" },
        { title: "Vibgyor International School" },
      ],
    },
    {
      title: "Industrial",
      id: "industrial",
      icon: "🏭",
      projects: [
        { title: "Poultry Farm (Satara)" },
        { title: "Della Data Center" },
        { title: "AIR PELS TECHNIK" },
        { title: "SSP Saudi Project" },
        { title: "Soft Key IT (Nashik)" },
      ],
    },
  ];

  const activeProjects = categories.find(c => c.id === activeCategory)?.projects || [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-foreground mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="section-subheading">
            Explore our diverse portfolio of completed projects across various sectors.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/50 text-foreground hover:bg-primary/20"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/95 shadow-xl border-primary/30 hover:bg-primary hover:text-primary-foreground -translate-x-4 hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          >
            <AnimatePresence mode="wait">
              {activeProjects.map((project, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="relative bg-foreground rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Project Image Placeholder */}
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="h-full w-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
      <Building2 className="h-16 w-16 text-primary-foreground/50" />
    </div>
  )}
</div>
                    
                    {/* Project Info */}
                    <div className="p-5">
                      <h4 className="font-semibold text-primary-foreground text-lg leading-tight">
                        {project.title}
                      </h4>
                    
                    </div>
                    
                  
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/95 shadow-xl border-primary/30 hover:bg-primary hover:text-primary-foreground translate-x-4 hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Project Count */}
        <motion.p 
          className="text-center mt-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Showing {activeProjects.length} projects in {categories.find(c => c.id === activeCategory)?.title}
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
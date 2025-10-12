import { useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Corporate Office - Tech Park",
      category: "Office Partitions",
      image: project1,
      description: "Complete office partitioning solution with glass and aluminum for a modern tech company. Features include soundproof cabins and open workspace divisions.",
    },
    {
      title: "Luxury Residence - Villa Interior",
      category: "False Ceiling",
      image: project2,
      description: "Elegant false ceiling installation with integrated lighting system for a premium residential project. Custom design with modern aesthetics.",
    },
    {
      title: "Commercial Complex - Retail Space",
      category: "Glass & Aluminum",
      image: project3,
      description: "Contemporary glass partition and door systems for a high-end retail complex. Featuring frameless glass and premium aluminum finishing.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-accent">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and craftsmanship
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.1}
                borderWidth={2}
              />
              <Card
                onClick={() => setSelectedProject(index)}
                className="group overflow-hidden border shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer"
              >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-accent text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-heading font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mt-2 text-sm">
                    Click to view details
                  </p>
                </div>
              </div>
            </Card>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-strong animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="p-8 space-y-4">
                  <span className="text-accent text-sm font-medium">
                    {projects[selectedProject].category}
                  </span>
                  <h3 className="text-3xl font-heading font-bold text-foreground">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

import { Card } from "@/components/ui/card";
import servicePartitions from "@/assets/service-partitions.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceGlass from "@/assets/service-glass.jpg";
import serviceCabin from "@/assets/service-cabin.jpg";

const Services = () => {
  const services = [
    {
      title: "Aluminum Partitions",
      description: "Modern, durable partitions for offices and homes. Create functional spaces with sleek designs.",
      image: servicePartitions,
      features: ["Sound Insulation", "Custom Designs", "Easy Maintenance"],
    },
    {
      title: "False Ceilings",
      description: "Elegant ceiling solutions with integrated lighting. Transform your interior aesthetics.",
      image: serviceCeiling,
      features: ["Modern Lighting", "Thermal Insulation", "Acoustic Control"],
    },
    {
      title: "Glass & Door Frames",
      description: "Premium glass installations with aluminum framing. Perfect for modern architectural designs.",
      image: serviceGlass,
      features: ["Tempered Glass", "Sliding Systems", "Weather Resistant"],
    },
    {
      title: "Office Cabin Fabrication",
      description: "Complete office cabin solutions with glass and aluminum. Professional workspace design.",
      image: serviceCabin,
      features: ["Complete Systems", "Quick Installation", "Flexible Layouts"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-accent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive aluminum solutions for residential and commercial spaces
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ul className="space-y-2 text-white">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

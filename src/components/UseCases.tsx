import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Rocket, Store, Users } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Sitios corporativos",
    description: "Páginas de empresa profesionales con diseños elegantes y modernos",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description: "Páginas de aterrizaje optimizadas para conversión y captación de leads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: Store,
    title: "Tiendas online",
    description: "E-commerce y catálogos de productos con diseños atractivos",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    icon: Users,
    title: "Portafolios",
    description: "Sitios de presentación personal o de agencia con galerías impactantes",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Casos de uso reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convierte cualquier tipo de proyecto de Lovable en un sitio WordPress profesional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

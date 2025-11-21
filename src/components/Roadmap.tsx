import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Blocks, ShoppingCart } from "lucide-react";

const roadmapItems = [
  {
    icon: MapPin,
    title: "ACF mapping",
    description: "Integración de campos personalizados avanzados",
  },
  {
    icon: Blocks,
    title: "Integración con Elementor",
    description: "Compatibilidad total con el page builder más popular",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce",
    description: "Soporte completo para tiendas en línea",
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
            <MapPin className="w-4 h-4" />
            En desarrollo activo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Próximos hitos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estas funcionalidades están actualmente en desarrollo y estarán disponibles en próximas versiones
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-dark text-dark-foreground">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(330_85%_55%/0.15),transparent_70%)]" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              ¿Listo para ahorrar semanas de trabajo?
            </h2>
            
            <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto">
              Únete a los 10 usuarios beta y obtén acceso gratuito a la herramienta que revolucionará tu flujo de trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 transition-all hover:scale-105 hover:-translate-y-1 shadow-glow"
                asChild
              >
                <a href="/?add-to-cart=444">
                  Obtener acceso beta gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-dark-foreground/70 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Plazas limitadas</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Acceso inmediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

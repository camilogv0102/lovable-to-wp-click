import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Proceso lento y propenso a errores",
  "Requiere conocimientos técnicos avanzados",
  "Difícil de mantener y actualizar",
  "Reconstrucción manual de layouts",
  "Ajustes de estilos uno por uno",
  "Días o semanas de trabajo tedioso",
];

const afterItems = [
  "Automatiza el proceso completamente",
  "Interfaz fácil de usar, sin código",
  "Actualizaciones sencillas y rápidas",
  "Conversión automática de layouts",
  "Estilos preservados automáticamente",
  "Listo en minutos, no en semanas",
];

const BeforeAfter = () => {
  return (
    <section className="py-24 px-4 bg-gradient-dark text-dark-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            La diferencia es enorme
          </h2>
          <p className="text-xl text-white/90">
            De tareas manuales tediosas a conversión automática en minutos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Card */}
          <Card className="border-red-500/50 bg-red-950/40 shadow-card hover:shadow-card-hover transition-shadow backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                Conversión manual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/95">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* After Card */}
          <Card className="border-primary/50 bg-primary/20 shadow-card hover:shadow-card-hover transition-shadow backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                Con Lovable to WordPress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/95">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

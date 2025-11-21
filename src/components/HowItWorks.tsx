import { Upload, Cog, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Sube tu proyecto",
    description: "Exporta tu diseño de Lovable como archivo .ZIP y súbelo a la plataforma. Es tan simple como arrastrar y soltar.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&q=80",
  },
  {
    number: "02",
    icon: Cog,
    title: "Conversión automática",
    description: "Nuestra IA analiza tu proyecto y lo convierte automáticamente en un tema de WordPress, preservando todos los estilos y funcionalidades.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Descarga y publica",
    description: "Descarga tu tema de WordPress listo para instalar y publica tu sitio en minutos. Sin configuraciones complejas.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Tres pasos simples para tener tu sitio WordPress listo
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="relative rounded-3xl shadow-card hover:shadow-card-hover transition-all w-full"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

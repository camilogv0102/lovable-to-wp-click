import { Download, Upload, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Export from Lovable",
    description: "Download your project as a ZIP.",
    number: "01",
  },
  {
    icon: Upload,
    title: "Upload to the plugin",
    description: "Lovable to WordPress compiles the entire structure automatically.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Launch on WordPress",
    description: "Get a fully functional theme ready to publish.",
    number: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How it works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
              
              <div className="relative z-10 text-center space-y-4">
                <div className="inline-flex relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[var(--shadow-glow)]">
                      <step.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { Zap, Lock, Blocks, FileCode, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "5-Minute Conversion",
    description: "Go from Lovable ZIP to a complete WordPress theme instantly.",
  },
  {
    icon: Lock,
    title: "Pixel-Perfect Output",
    description: "Your layout, colors, fonts and spacing remain exactly as designed.",
  },
  {
    icon: Blocks,
    title: "Clean WordPress Structure",
    description: "The plugin automatically compiles, organizes files and generates a functional child theme.",
  },
  {
    icon: FileCode,
    title: "Responsive Design Preserved",
    description: "Your mobile, tablet, and desktop layouts are maintained perfectly across all devices.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Optimized code output ensures your WordPress site loads incredibly fast.",
  },
  {
    icon: Server,
    title: "Hosting-Friendly",
    description: "Works with any WordPress hosting provider — no special setup needed.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What the beta can do today
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

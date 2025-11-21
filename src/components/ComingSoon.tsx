import { Card, CardContent } from "@/components/ui/card";
import { Clock, Wrench } from "lucide-react";

const comingSoonFeatures = [
  "ACF auto-mapping",
  "Elementor integration",
  "WooCommerce support",
  "Content editing directly from WordPress",
];

const ComingSoon = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
            <Wrench className="w-4 h-4" />
            In Active Development
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Coming Soon
          </h2>
        </div>
        
        <Card className="border-border/40">
          <CardContent className="pt-8">
            <ul className="space-y-4">
              {comingSoonFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-8 text-center italic">
              These features are currently in development and will be available in upcoming versions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComingSoon;

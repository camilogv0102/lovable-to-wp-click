import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const features = [
    "Unlimited project conversions",
    "Priority support",
    "Early access to new features",
    "Lifetime updates",
    "Custom component mapping",
    "Advanced style preservation",
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
            <Star className="w-4 h-4 fill-primary" />
            Limited Beta Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Beta Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get lifetime access at a special beta price. Limited spots available.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 lg:p-12 shadow-[var(--shadow-card)] border-primary/20 bg-card/80 backdrop-blur">
          <div className="text-center mb-8">
            <div className="inline-flex items-baseline gap-2 mb-4">
              <span className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                $17
              </span>
              <span className="text-2xl text-muted-foreground line-through">$199</span>
            </div>
            <p className="text-lg text-muted-foreground">One-time payment • Lifetime access</p>
          </div>
          
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button variant="hero" size="lg" className="w-full text-lg" asChild>
            <a href="/?add-to-cart=444">Get Beta Access Now</a>
          </Button>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            30-day money-back guarantee • No questions asked
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;

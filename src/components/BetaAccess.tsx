import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const BetaAccess = () => {
  const benefits = [
    "Free usage for 5 domains",
    "All beta updates",
    "Access to upcoming features",
    "Join our exclusive Discord community",
    "Direct channel for feedback",
    "No credit card required",
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get the free beta — only 10 spots available
          </h2>
          <p className="text-xl text-muted-foreground">
            During the beta, you get completely free access for up to 5 domains. Help test the tool, give feedback, and shape the upcoming features.
          </p>
        </div>

        <Card className="border-primary/50 bg-primary/5">
          <CardContent className="pt-8">
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="/?add-to-cart=444">
                  Get Free Beta Access
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BetaAccess;

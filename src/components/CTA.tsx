import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(264_80%_60%/0.15),transparent_70%)]" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to turn your Lovable project into a WordPress site?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Claim one of the 10 free beta spots before they run out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="/?add-to-cart=444">
                  Get Free Beta Access
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

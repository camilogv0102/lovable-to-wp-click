import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(264_80%_60%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(214_95%_55%/0.1),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Free Beta Access
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Turn your Lovable project into a real{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WordPress website
              </span>{" "}
              — in 5 minutes.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join the free beta and convert any Lovable ZIP into a functional WordPress site with one upload. No coding. No rebuilding.
            </p>
            
            <p className="text-lg font-semibold text-primary">
              Only 10 beta spots available — free access for up to 5 domains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="/?add-to-cart=444">
                  Get Beta Access
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="text-lg">
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0">
                  <video 
                    controls 
                    autoPlay
                    className="w-full h-auto"
                    src="https://lovabletowordpress.online/wp-content/uploads/2025/11/Lovable-To-WordPress-Demo-Video-Compressed.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>One-click export</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>No code required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Works on any hosting</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Lovable to WordPress transformation workflow" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

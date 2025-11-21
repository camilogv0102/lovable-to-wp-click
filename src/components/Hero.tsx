import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Play, Zap, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background - Elementor inspired */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(330_85%_55%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_85%_60%/0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Convierte tus diseños de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Lovable
            </span>
            {" "}en sitios{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              WordPress
            </span>
            {" "}en minutos
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Sube tu proyecto .ZIP y obtén un sitio WordPress listo para publicar, sin código ni reconstrucciones
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 hover:-translate-y-1 shadow-glow"
              asChild
            >
              <a href="/?add-to-cart=444">
                Únete al beta gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 transition-all hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Ver demo
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
          
          {/* Key Features Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Conversión en minutos</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Sin código</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Listo para publicar</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;

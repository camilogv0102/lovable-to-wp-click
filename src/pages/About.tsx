import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import camiloProfile from "@/assets/camilo-profile.jpg";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="About Camilo Gómez — Creator of Lovable to WordPress"
        description="Learn about Camilo Gómez, founder of SNC Designs and creator of Lovable to WordPress. Building tools that help freelancers and founders launch faster."
      />
      <Header />
      <div className="pt-20">
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          
          <div className="container mx-auto max-w-5xl relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image section */}
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img 
                    src={camiloProfile} 
                    alt="Camilo Gómez - Founder of SNC Designs" 
                    className="relative w-[32rem] h-[32rem] object-cover rounded-3xl shadow-2xl ring-2 ring-border/50"
                  />
                </div>
              </div>
              
              {/* Content section */}
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    About Me
                  </h1>
                  <p className="text-3xl font-semibold text-primary">
                    Camilo Gómez
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Founder of SNC Designs
                  </p>
                </div>
                
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm Camilo Gómez — founder of SNC Designs. I build high-quality websites and creative tools for freelancers, entrepreneurs and agencies. My focus is on helping people launch faster, design better and work more efficiently.
                  </p>
                  
                  <p>
                    For years I've worked in UI/UX design, WordPress development and conversion-focused interfaces. I created the Lovable to WordPress plugin to make it easier for designers and founders to turn ideas into real, functional websites in minutes.
                  </p>
                  
                  <p className="font-medium text-foreground">
                    Whether you're launching a project or testing a new idea, my goal is to help you move fast and confidently — without technical friction.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="https://snc-designs.com/" target="_blank" rel="noopener noreferrer">
                      Visit SNC Designs
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group">
                    <a href="https://instagram.com/camilogome02_" target="_blank" rel="noopener noreferrer">
                      Connect on Instagram
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;

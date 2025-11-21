import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign, Clock, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Freelancers = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="For Freelancers — Build Client Sites Faster with Lovable to WordPress"
        description="Freelancers: deliver client projects faster, charge more, and scale your business with Lovable to WordPress. Build professional sites in minutes, not weeks."
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(264_80%_60%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                For Freelancers
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Deliver Client Sites{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  10x Faster
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stop spending weeks on client websites. Build stunning WordPress sites in minutes, take on more projects, charge premium rates, and focus on what matters—growing your freelance business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" className="text-lg" asChild>
                  <a href="/?add-to-cart=444">
                    Get Beta Access
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg" asChild>
                  <a href="/video-demo">
                    Watch Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Why Freelancers Love It
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Save Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cut project delivery time from weeks to hours. Spend less time coding, more time winning clients and working on billable tasks.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Charge More</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver premium-quality sites faster. Command higher rates with professional designs and faster turnarounds that impress clients.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Scale Your Business</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Take on more clients without burning out. Build multiple sites per week instead of one per month and grow your revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Perfect For Your Client Work
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Small Business Sites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build professional websites for local businesses, startups, and SMBs. From restaurants to consultants, deliver high-quality sites that convert in record time.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Client Landing Pages</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create stunning landing pages for client campaigns, product launches, or lead generation. Quick turnarounds mean more satisfied clients and repeat business.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Portfolio Websites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build beautiful portfolio sites for creatives, photographers, designers, and professionals. Showcase their work with elegant, responsive designs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Rapid Prototypes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Show clients working prototypes before committing to full builds. Get feedback faster, close deals quicker, and reduce revision cycles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
              Your New Freelance Workflow
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Design in Lovable</h3>
                  <p className="text-muted-foreground">
                    Create beautiful, responsive designs with AI assistance. Iterate quickly with your client until they love it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Export to WordPress</h3>
                  <p className="text-muted-foreground">
                    One click to convert your Lovable project into a fully functional WordPress site. No manual coding or rebuilding required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Deliver & Invoice</h3>
                  <p className="text-muted-foreground">
                    Hand over a professional, live WordPress site to your client. Get paid faster and move on to your next project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center p-12 rounded-2xl bg-background border border-border">
              <p className="text-2xl font-semibold mb-6 text-foreground leading-relaxed">
                "This tool changed my freelance business. I'm delivering sites 10x faster and taking on more clients than ever before."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-left">
                  <p className="font-bold text-foreground">Sarah Martinez</p>
                  <p className="text-sm text-muted-foreground">Freelance Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Freelance Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta and start delivering client sites faster than ever.
            </p>
            <Button variant="hero" size="lg" className="text-lg" asChild>
              <a href="/?add-to-cart=444">
                Get Beta Access Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
};

export default Freelancers;

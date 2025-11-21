import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Users, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const LandingPages = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Create High-Converting Landing Pages — Lovable to WordPress"
        description="Build stunning, high-converting landing pages in minutes. Perfect for campaigns, product launches, and lead generation with beautiful, responsive designs."
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(214_95%_55%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
                <Sparkles className="w-4 h-4" />
                Landing Pages
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Create{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  High-Converting
                </span>{" "}
                Landing Pages in Minutes
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Design stunning landing pages that convert visitors into customers. Perfect for product launches, marketing campaigns, and lead generation—no code required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" className="text-lg" asChild>
                  <a href="/?add-to-cart=444">
                    Get Started Now
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

        {/* Features Grid */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Lightning Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch your campaigns in minutes, not weeks. Transform your Lovable designs into live WordPress landing pages instantly.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Conversion Optimized</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful, responsive designs that are built to convert. Every element is optimized for maximum engagement and results.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Lead Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capture leads effectively with integrated forms, compelling CTAs, and seamless user experiences that drive action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Perfect For Every Campaign
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Product Launches</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create buzz around your new product with a stunning launch page. Showcase features, collect early signups, and build anticipation with countdown timers and waitlists.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Marketing Campaigns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Drive conversions with targeted campaign pages. A/B test different messages, track performance, and optimize for maximum ROI with focused, conversion-driven designs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Lead Magnets</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Grow your email list with compelling lead magnet pages. Offer ebooks, guides, or webinars in exchange for contact information—all with beautiful, professional designs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Event Registration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promote workshops, webinars, or conferences with dedicated event pages. Include schedules, speaker bios, and easy registration forms to maximize attendance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Launch Your Next Campaign?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta and start creating high-converting landing pages today.
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

export default LandingPages;

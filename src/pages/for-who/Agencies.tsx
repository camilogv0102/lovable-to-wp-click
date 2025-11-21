import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Layers, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Agencies = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="For Agencies — Scale Your WordPress Development with Lovable"
        description="Agencies: deliver more client projects, reduce development costs, and scale your team's output with Lovable to WordPress. Perfect for high-volume workflows."
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(214_95%_55%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
                <Sparkles className="w-4 h-4" />
                For Agencies
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Scale Your Agency{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Without Scaling Costs
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Deliver more client projects with your existing team. Reduce development time by 90%, improve margins, and take on enterprise clients with confidence using Lovable to WordPress.
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
              Built for Agency Scale
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Increase Margins</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reduce development hours by 90% while maintaining premium pricing. Turn every project into a high-margin success.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Scale Your Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver 10x more projects without hiring more developers. Your team can focus on strategy, design, and client relationships.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Standardize Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create consistent, high-quality deliverables across all projects. Reduce QA time and client revisions with proven workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Perfect for Agency Workflows
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Client Websites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver professional websites for SMBs, startups, and enterprise clients. From corporate sites to landing pages, handle high volumes without compromising quality.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">White Label Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Take on white label work from other agencies or resellers. Fast turnarounds and consistent quality make you the go-to development partner.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Campaign Sites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch marketing campaigns for multiple clients simultaneously. Build high-converting landing pages and microsites at scale.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Rapid Prototyping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Win more pitches with working prototypes. Show potential clients fully functional sites in the proposal stage to close deals faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Benefits */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Why Leading Agencies Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border">
                <h4 className="font-bold text-lg mb-2 text-foreground">Multi-Domain Support</h4>
                <p className="text-sm text-muted-foreground">Deploy to up to 5 domains in beta—perfect for managing multiple client sites.</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border">
                <h4 className="font-bold text-lg mb-2 text-foreground">Consistent Quality</h4>
                <p className="text-sm text-muted-foreground">Deliver the same high standards across every project, every time.</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border">
                <h4 className="font-bold text-lg mb-2 text-foreground">Fast Iterations</h4>
                <p className="text-sm text-muted-foreground">Make client-requested changes in minutes, not days or weeks.</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border">
                <h4 className="font-bold text-lg mb-2 text-foreground">No Coding Needed</h4>
                <p className="text-sm text-muted-foreground">Junior team members can deliver senior-level results with ease.</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border">
                <h4 className="font-bold text-lg mb-2 text-foreground">Works with Any Host</h4>
                <p className="text-sm text-muted-foreground">Deploy to any WordPress hosting—no vendor lock-in or special requirements.</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border">
                <h4 className="font-bold text-lg mb-2 text-foreground">One-Click Export</h4>
                <p className="text-sm text-muted-foreground">From design to live site in seconds—streamline your entire delivery process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center p-12 rounded-2xl bg-background border border-border">
              <p className="text-2xl font-semibold mb-6 text-foreground leading-relaxed">
                "We've 3x'd our client capacity without hiring a single new developer. This is a game-changer for agency profitability."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-left">
                  <p className="font-bold text-foreground">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Creative Director, Digital Agency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Your Agency?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta and transform how your agency delivers WordPress projects.
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

export default Agencies;

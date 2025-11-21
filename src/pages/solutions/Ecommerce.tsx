import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, ShoppingCart, Clock, Sparkles, Info } from "lucide-react";
import SEO from "@/components/SEO";

const Ecommerce = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Speed Up Ecommerce Workflows — Lovable to WordPress"
        description="Speed up your ecommerce workflow by creating static pages instantly. Build product showcases, about pages, and policies now—WooCommerce integration coming soon."
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(214_95%_55%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
                <Sparkles className="w-4 h-4" />
                Ecommerce Solutions
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Speed Up Your{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Ecommerce
                </span>{" "}
                Workflow
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Create stunning product showcases, informational pages, and brand content in minutes. While WooCommerce integration is coming soon, you can build your static pages now and add shop functionality later.
              </p>

              {/* Important Notice */}
              <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">WooCommerce Integration Coming Soon</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      While we're working on full WooCommerce integration, you can use Lovable to WordPress to rapidly create all your static and informational pages. Then use Elementor or other builders for your shop pages—giving you the best of both worlds.
                    </p>
                  </div>
                </div>
              </div>
              
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

        {/* Benefits Grid */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Why Use Lovable for Ecommerce?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Save Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build all your informational pages in minutes instead of hours. Focus on your shop pages while Lovable handles the rest.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Product Showcases</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create beautiful product showcase pages, brand stories, and promotional landing pages that drive interest and engagement.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-secondary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Best of Both</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use Lovable for rapid page creation, then leverage Elementor or WooCommerce builders for shop functionality—maximum flexibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Build */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Pages You Can Build Today
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Homepage & Branding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a stunning homepage that showcases your brand story, featured products, and unique value proposition with eye-catching designs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">About & Story Pages</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Share your brand's story, mission, and values. Build trust with customers by showing the people and passion behind your products.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Product Showcases</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Highlight featured collections, new arrivals, or best sellers with beautiful showcase pages that generate interest and excitement.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Policies & Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build essential pages like shipping information, return policies, privacy policies, and terms of service to establish credibility and trust.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Blog & Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create engaging blog posts, buying guides, and educational content that drives SEO and positions your brand as an authority.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Contact & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make it easy for customers to reach you with professional contact pages, FAQ sections, and support information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
              Your Ecommerce Workflow
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-secondary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Use Lovable to WordPress</h3>
                  <p className="text-muted-foreground">
                    Rapidly create all your informational pages—homepage, about, policies, showcases, and content pages in minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-secondary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Add Shop Functionality</h3>
                  <p className="text-muted-foreground">
                    Use Elementor, WooCommerce builders, or wait for our native integration to create your product pages and shopping cart.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-secondary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Launch & Sell</h3>
                  <p className="text-muted-foreground">
                    Go live with a complete, professional ecommerce site built in a fraction of the time traditional methods require.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Speed Up Your Ecommerce Build?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta and start creating your ecommerce pages faster than ever.
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

export default Ecommerce;

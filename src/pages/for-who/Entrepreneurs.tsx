import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, Lightbulb, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Entrepreneurs = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="For Entrepreneurs — Launch Your Idea Fast with Lovable to WordPress"
        description="Entrepreneurs: turn your vision into reality in days, not months. Build, test, and launch your startup website with Lovable to WordPress—no coding required."
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(264_80%_60%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                For Entrepreneurs
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Launch Your Startup{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  This Week
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stop waiting months to launch. Build your startup website, MVP, or landing page in minutes. Test your idea with real users today, not next quarter—no technical skills required.
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
              Why Entrepreneurs Choose Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Launch Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Go from idea to live website in days, not months. Beat competitors to market and start validating your concept immediately.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Stay Lean</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save thousands on development costs. No need to hire developers or agencies when you're bootstrapping your startup.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Iterate Quickly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Test different messaging, designs, and value props in minutes. Pivot fast based on user feedback without technical bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Perfect for Every Stage
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">MVP Landing Pages</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Test your startup idea with a professional landing page. Collect emails, gauge interest, and validate your concept before building the full product.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">SaaS Websites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch your SaaS marketing site fast. Showcase features, pricing, testimonials, and convert visitors into paying customers while you build the app.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Product Launch Sites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate buzz for your new product with a stunning launch page. Build anticipation, collect pre-orders, and create FOMO before launch day.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Investor Pitch Sites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Impress investors with a professional website that showcases your vision, team, traction, and opportunity. Look established from day one.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Marketplace Platforms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build the marketing and informational pages for your marketplace. Show value to both sides of your platform with beautiful, clear messaging.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Community Hubs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a home for your community, newsletter, or movement. Build trust, share your story, and grow your audience from the start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Journey */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
              The Lean Founder's Workflow
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Design Your Vision</h3>
                  <p className="text-muted-foreground">
                    Use Lovable's AI to bring your startup idea to life visually. No design skills needed—just describe what you want.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Deploy to WordPress</h3>
                  <p className="text-muted-foreground">
                    One-click export to WordPress. Your site is live and ready to collect signups, process payments, or generate leads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Test & Iterate</h3>
                  <p className="text-muted-foreground">
                    Get real user feedback. Make changes in minutes based on what you learn. Pivot fast without starting from scratch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Scale & Grow</h3>
                  <p className="text-muted-foreground">
                    Once validated, keep building on your WordPress foundation. Add features, integrate tools, and grow your business.
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
                "I launched my startup in 3 days instead of 3 months. Already have 500 email signups and haven't written a line of code."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-left">
                  <p className="font-bold text-foreground">Alex Thompson</p>
                  <p className="text-sm text-muted-foreground">Founder, TechStartup</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Launch Your Startup?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta and turn your entrepreneurial vision into reality this week.
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

export default Entrepreneurs;

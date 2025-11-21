import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building2, Award, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const CorporateWebsites = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Build Professional Corporate Websites — Lovable to WordPress"
        description="Create professional corporate websites with ease. Showcase your brand, services, and team with polished, enterprise-ready designs that inspire trust."
      />
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(264_80%_60%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Corporate Websites
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Build{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Professional
                </span>{" "}
                Corporate Websites
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Establish your corporate presence with polished, enterprise-ready websites. Showcase your brand, services, team, and values with designs that inspire trust and credibility.
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
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Enterprise-Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional designs that meet corporate standards. Security-focused, scalable, and built to represent your brand with confidence.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Brand Showcase</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Present your company's story, mission, and values with elegant layouts that communicate professionalism and authority.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Trust & Credibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build trust with stakeholders through polished designs that highlight testimonials, case studies, and your team's expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Pages */}
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
              Essential Corporate Pages
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">About Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tell your company story with compelling about pages. Showcase your mission, vision, values, timeline, and the team behind your success with professional layouts.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Present your offerings with clarity and impact. Detail your services, solutions, and capabilities with structured layouts that make it easy for clients to understand your value.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Team & Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Introduce your team with professional bios and photos. Highlight leadership, expertise, and the people who make your company great with elegant team pages.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Case Studies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Demonstrate your impact with detailed case studies. Show results, testimonials, and success stories that prove your capabilities and build credibility with prospects.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Careers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Attract top talent with compelling careers pages. Showcase your culture, benefits, open positions, and what makes your company a great place to work.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-2xl font-bold mb-4 text-primary">Contact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make it easy to reach you with professional contact pages. Include forms, location maps, office details, and multiple ways for clients to connect with your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Corporate Website?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta and create a professional website that represents your brand.
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

export default CorporateWebsites;

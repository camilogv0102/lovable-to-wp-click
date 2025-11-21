import { Card, CardContent } from "@/components/ui/card";
import { Clock, Rocket, DollarSign, Users, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "From Weeks to Minutes",
    description: "Transform your Lovable projects into production-ready WordPress sites in just 5 minutes instead of spending weeks on manual conversion.",
    highlight: "Save 95% of development time",
  },
  {
    icon: Rocket,
    title: "Instant Deployment",
    description: "Launch your sites faster than ever. What used to take weeks of development now happens in minutes with zero technical hassle.",
    highlight: "5 minutes to go live",
  },
  {
    icon: DollarSign,
    title: "Maximize Your Revenue",
    description: "Take on more projects and increase your income by delivering high-quality WordPress sites at lightning speed.",
    highlight: "10x more projects capacity",
  },
  {
    icon: Users,
    title: "Delight Your Clients",
    description: "Impress your clients with professional WordPress sites delivered in record time. Happy clients mean more referrals.",
    highlight: "Client satisfaction guaranteed",
  },
  {
    icon: Zap,
    title: "Zero Technical Friction",
    description: "No complex setups, no coding required. Our plugin handles all the technical heavy lifting so you can focus on creating.",
    highlight: "100% automated conversion",
  },
  {
    icon: Shield,
    title: "WordPress Native",
    description: "Your converted sites are fully compatible with WordPress ecosystem - all themes, plugins, and updates work seamlessly.",
    highlight: "Full WordPress compatibility",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Transform Your Development Workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop spending weeks on conversions. Start delivering professional WordPress sites in minutes and unlock your full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <p className="text-sm font-semibold text-primary">
                      {benefit.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

type ContactProps = {
  pageData?: any;
};

const Contact = ({ pageData }: ContactProps) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <SEO
        title="Contact — Lovable to WordPress Support & Beta Access"
        description="Get in touch for questions about Lovable to WordPress, beta access, feedback or collaboration. Response times under 24 hours."
      />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Let's Connect!</h1>
            <p className="text-xl text-muted-foreground">
              I'm always excited to hear from you
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Whether you have <span className="text-primary font-semibold">feedback</span> to share, 
                want to <span className="text-primary font-semibold">discuss ideas</span>, or simply 
                feel like having a <span className="text-primary font-semibold">conversation</span> about 
                Lovable to WordPress — I'd love to hear from you!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Share your experience</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Discuss ideas</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Just say hi!</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                <p className="text-foreground font-medium">
                  Drop me an email directly — no automated responses, just real conversation:
                </p>
                
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full text-lg"
                  asChild
                >
                  <a href="mailto:camilo@lovabletowordpress.online">
                    <Mail className="w-5 h-5" />
                    camilo@lovabletowordpress.online
                  </a>
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  I personally read and respond to every email ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

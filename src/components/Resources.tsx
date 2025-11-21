import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, GraduationCap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "Tips, trucos y las últimas noticias sobre conversión de sitios y WordPress",
  },
  {
    icon: Code,
    title: "Documentación",
    description: "Guías técnicas completas y referencias para desarrolladores",
  },
  {
    icon: GraduationCap,
    title: "Tutoriales",
    description: "Videotutoriales paso a paso para dominar la herramienta",
  },
  {
    icon: MessageCircle,
    title: "Comunidad Discord",
    description: "Únete a nuestra comunidad para soporte, inspiración y feedback",
  },
];

const Resources = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Recursos y comunidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para aprovechar al máximo Lovable to WordPress
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center"
            >
              <CardContent className="pt-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Explorar →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;

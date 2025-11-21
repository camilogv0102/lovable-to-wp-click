import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Video, MessageCircle, FileText, Search, ArrowRight, Lightbulb, Code, HelpCircle } from "lucide-react";

const GetHelp = () => {
  const helpCategories = [
    {
      icon: BookOpen,
      title: "Documentación",
      description: "Guías completas paso a paso",
      items: [
        "Guía de inicio rápido",
        "Instalación y configuración",
        "Conversión de proyectos",
        "Solución de problemas",
      ],
    },
    {
      icon: Video,
      title: "Tutoriales en video",
      description: "Aprende visualmente",
      items: [
        "Cómo convertir tu primer proyecto",
        "Personalización de temas",
        "Optimización avanzada",
        "Casos de uso reales",
      ],
    },
    {
      icon: Code,
      title: "Referencia de API",
      description: "Para desarrolladores",
      items: [
        "Hooks y filtros",
        "Funciones personalizadas",
        "Integración con plugins",
        "Extensión del plugin",
      ],
    },
    {
      icon: Lightbulb,
      title: "Mejores prácticas",
      description: "Tips y consejos",
      items: [
        "Optimización de rendimiento",
        "SEO y accesibilidad",
        "Estructura de archivos",
        "Mantenimiento de sitios",
      ],
    },
  ];

  const popularArticles = [
    {
      title: "Cómo exportar un proyecto de Lovable",
      category: "Inicio",
      readTime: "3 min",
    },
    {
      title: "Solución de errores comunes de conversión",
      category: "Troubleshooting",
      readTime: "5 min",
    },
    {
      title: "Personalizar estilos después de la conversión",
      category: "Personalización",
      readTime: "7 min",
    },
    {
      title: "Optimización de imágenes y assets",
      category: "Rendimiento",
      readTime: "4 min",
    },
  ];

  return (
    <main className="min-h-screen">
      <SEO 
        title="Get Help — Lovable to WordPress"
        description="Encuentra toda la ayuda que necesitas: documentación, tutoriales, guías y soporte para Lovable to WordPress."
      />
      <div className="pt-20">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(258_78%_60%/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(265_85%_65%/0.15),transparent_50%)]" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold">
              ¿Cómo podemos ayudarte?
            </h1>
            <p className="text-xl text-muted-foreground">
              Encuentra respuestas, aprende nuevas habilidades y obtén soporte
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Busca en la documentación..."
                  className="pl-12 pr-4 py-6 text-lg border-2 focus:border-primary"
                />
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button variant="outline" size="sm">Guía de inicio</Button>
              <Button variant="outline" size="sm">Video tutoriales</Button>
              <Button variant="outline" size="sm">API Reference</Button>
              <Button variant="outline" size="sm">FAQs</Button>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Explora por categoría
              </h2>
              <p className="text-lg text-muted-foreground">
                Encuentra exactamente lo que necesitas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  <CardContent className="pt-8">
                    <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="hover:text-primary transition-colors cursor-pointer">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Artículos populares
                </h2>
                <p className="text-lg text-muted-foreground">
                  Lo más leído por nuestra comunidad
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Card 
                  key={index}
                  className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer group"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Support */}
        <section className="py-24 px-4 bg-gradient-dark text-dark-foreground">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              ¿Aún necesitas ayuda?
            </h2>
            
            <p className="text-xl text-white/80">
              Nuestra comunidad y equipo de soporte están aquí para ti
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90"
              >
                <MessageCircle className="w-5 h-5" />
                Únete a Discord
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <HelpCircle className="w-5 h-5" />
                Contactar soporte
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default GetHelp;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Search, ArrowRight, Lightbulb, Code, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GetHelp = () => {
  const categories = [
    { name: "Inicio rápido", slug: "quick-start" },
    { name: "Instalación", slug: "installation" },
    { name: "Conversión", slug: "conversion" },
    { name: "Personalización", slug: "customization" },
    { name: "Troubleshooting", slug: "troubleshooting" },
    { name: "API", slug: "api" },
  ];

  const helpArticles = [
    {
      title: "Guía de inicio rápido: Tu primer proyecto",
      description: "Aprende a convertir tu primer proyecto Lovable a WordPress en menos de 5 minutos. Esta guía te lleva paso a paso desde la exportación hasta el despliegue.",
      category: "Inicio rápido",
      icon: Lightbulb,
      link: "/get-help/quick-start-guide",
    },
    {
      title: "Instalación del plugin Lovable2WP",
      description: "Instrucciones detalladas para instalar y configurar el plugin en tu WordPress. Incluye requisitos del sistema y configuración inicial.",
      category: "Instalación",
      icon: Code,
      link: "/get-help/plugin-installation",
    },
    {
      title: "Solución de errores comunes",
      description: "Encuentra soluciones a los problemas más frecuentes durante la conversión. Desde errores de CSS hasta problemas de compatibilidad.",
      category: "Troubleshooting",
      icon: HelpCircle,
      link: "/get-help/troubleshooting",
    },
  ];

  const popularBlogArticles = [
    {
      title: "Cómo convertir tu sitio Lovable a WordPress en minutos",
      category: "Tutorial",
      readTime: "5 min",
      link: "/blog/como-convertir-lovable-a-wordpress",
    },
    {
      title: "WordPress vs Otros CMS: Por qué WordPress sigue siendo la mejor opción",
      category: "Comparativa",
      readTime: "7 min",
      link: "/blog/ventajas-wordpress-vs-otros-cms",
    },
    {
      title: "10 técnicas para optimizar el rendimiento de tu WordPress",
      category: "Optimización",
      readTime: "6 min",
      link: "/blog/optimizar-rendimiento-wordpress",
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
            
            {/* Quick Links - Now Categories */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {categories.map((cat) => (
                <Button key={cat.slug} variant="outline" size="sm">
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Help Articles */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Artículos de ayuda
              </h2>
              <p className="text-lg text-muted-foreground">
                Documentación y guías para aprovechar al máximo Lovable2WP
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpArticles.map((article, index) => (
                <Card 
                  key={index}
                  className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <article.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Blog Articles */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Artículos del blog
                </h2>
                <p className="text-lg text-muted-foreground">
                  Últimas publicaciones y tutoriales
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex" asChild>
                <a href="/blog">
                  Ver todos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {popularBlogArticles.map((article, index) => (
                <a href={article.link} key={index}>
                  <Card 
                    className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer group h-full"
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
                </a>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <a href="/blog">
                  Ver todos los artículos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
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
                asChild
              >
                <a href="https://discord.com/invite/sXMaHca4j" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Únete a Discord
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  <HelpCircle className="w-5 h-5" />
                  Contactar soporte
                </Link>
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

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import SEO from "@/components/SEO";

const blogPosts = [
  {
    slug: "como-convertir-lovable-a-wordpress",
    title: "Cómo convertir tu sitio Lovable a WordPress en minutos",
    excerpt: "Descubre el proceso paso a paso para migrar tu sitio creado en Lovable a WordPress sin perder funcionalidad ni diseño.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-15",
    readTime: "5 min",
    category: "Tutorial",
  },
  {
    slug: "ventajas-wordpress-vs-otros-cms",
    title: "WordPress vs Otros CMS: Por qué WordPress sigue siendo la mejor opción",
    excerpt: "Analizamos las ventajas de WordPress frente a otros sistemas de gestión de contenido y por qué millones de sitios lo eligen.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-10",
    readTime: "7 min",
    category: "Comparativa",
  },
  {
    slug: "optimizar-rendimiento-wordpress",
    title: "10 técnicas para optimizar el rendimiento de tu WordPress",
    excerpt: "Aprende las mejores prácticas para hacer que tu sitio WordPress cargue más rápido y mejore tu SEO.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-05",
    readTime: "6 min",
    category: "Optimización",
  },
];

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog - Lovable2WP | Noticias y tutoriales sobre WordPress"
        description="Descubre los últimos artículos, tutoriales y consejos sobre WordPress, conversión de sitios y desarrollo web."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Blog de Lovable2WP
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guías, tutoriales y las últimas noticias sobre WordPress y conversión de sitios
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-card-hover transition-all hover:-translate-y-1 overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3">{post.category}</Badge>
                      <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

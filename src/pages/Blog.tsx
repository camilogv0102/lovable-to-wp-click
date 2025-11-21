import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-background border-b">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guías, tutoriales y las últimas noticias sobre WordPress y conversión de sitios
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Featured Post */}
            <Link to={`/blog/${blogPosts[0].slug}`} className="block mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center group">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <Badge className="mb-2">{blogPosts[0].category}</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Divider */}
            <div className="border-t mb-16" />

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                  <article className="h-full flex flex-col">
                    <div className="aspect-video overflow-hidden rounded-xl mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <Badge className="mb-3 w-fit">{post.category}</Badge>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
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
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

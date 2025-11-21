import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import SEO from "@/components/SEO";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string;
}> = {
  "como-convertir-lovable-a-wordpress": {
    title: "Cómo convertir tu sitio Lovable a WordPress en minutos",
    excerpt: "Descubre el proceso paso a paso para migrar tu sitio creado en Lovable a WordPress sin perder funcionalidad ni diseño.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-15",
    readTime: "5 min",
    category: "Tutorial",
    author: "Camilo García",
    content: `
## Por qué convertir tu sitio Lovable a WordPress

Lovable es una excelente herramienta para crear sitios web rápidamente con IA, pero WordPress ofrece ventajas únicas cuando necesitas escalar tu proyecto. WordPress te da control total sobre tu contenido, acceso a miles de plugins, y la flexibilidad de personalizar cada aspecto de tu sitio.

### Ventajas de migrar a WordPress

1. **Control total**: Eres dueño de tu código y tus datos
2. **Escalabilidad**: WordPress maneja desde blogs personales hasta sitios empresariales masivos
3. **Ecosistema rico**: Acceso a 60,000+ plugins y miles de temas
4. **SEO optimizado**: WordPress está construido pensando en SEO desde su base
5. **Comunidad masiva**: Millones de desarrolladores y usuarios para soporte

## El proceso de conversión con Lovable2WP

Nuestro servicio hace que la conversión sea increíblemente simple. Aquí está el proceso:

### Paso 1: Conecta tu proyecto Lovable

Simplemente proporciona la URL de tu proyecto Lovable o conecta tu repositorio de GitHub. Nuestro sistema analizará automáticamente la estructura de tu sitio.

### Paso 2: Selecciona tus opciones

Elige qué elementos quieres migrar:
- Diseño y estilos
- Contenido y textos
- Imágenes y media
- Funcionalidades interactivas
- Formularios de contacto

### Paso 3: Conversión automática

Nuestro sistema convierte tu sitio Lovable a un tema WordPress personalizado. Esto incluye:
- Conversión de componentes React a bloques de WordPress
- Adaptación de estilos Tailwind CSS a CSS de WordPress
- Migración de contenido a posts y páginas de WordPress
- Configuración de plugins necesarios

### Paso 4: Revisión y ajustes

Una vez completada la conversión, puedes revisar el resultado en un entorno de staging. Hacemos ajustes finales según tus comentarios.

### Paso 5: Despliegue

Cuando estés satisfecho, desplegamos tu nuevo sitio WordPress a tu servidor preferido o te proporcionamos un paquete completo para que lo instales tú mismo.

## Casos de uso comunes

### Landing pages convertidas a WordPress

Las landing pages creadas en Lovable se convierten perfectamente en páginas de WordPress con constructores visuales como Elementor o Gutenberg.

### Sitios corporativos

Los sitios corporativos ganan funcionalidades adicionales como blogs integrados, áreas de miembros, y sistemas de gestión de leads.

### E-commerce

Si tu sitio Lovable tiene componentes de catálogo de productos, los convertimos a WooCommerce para funcionalidad completa de tienda online.

## Preguntas frecuentes

**¿Cuánto tiempo toma la conversión?**
La mayoría de sitios se convierten en 24-48 horas, dependiendo de la complejidad.

**¿Pierdo funcionalidad en la conversión?**
No. Replicamos toda la funcionalidad de tu sitio Lovable en WordPress, y a menudo añadimos más capacidades.

**¿Necesito conocimientos técnicos?**
No. Manejamos todo el proceso técnico. Solo necesitas poder dar feedback sobre el resultado.

**¿Qué pasa con las actualizaciones futuras?**
Una vez en WordPress, tienes control completo para actualizar y modificar tu sitio como desees.

## Conclusión

Convertir tu sitio Lovable a WordPress no tiene que ser complicado. Con Lovable2WP, obtienes lo mejor de ambos mundos: la velocidad de creación de Lovable y el poder y flexibilidad de WordPress.

¿Listo para empezar? [Solicita tu conversión hoy](/contact) y lleva tu sitio al siguiente nivel.
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al blog
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} - Lovable2WP Blog`}
        description={post.excerpt}
      />
      <Header />
      <article className="min-h-screen pt-20 bg-background">
        {/* Hero Section with Title */}
        <div className="bg-background py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8 flex justify-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Title - Large and Centered */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info - Single Line */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground mb-6">
              <Link to="#" className="font-semibold text-foreground hover:text-primary transition-colors">
                {post.author}
              </Link>
              <span>on</span>
              <Badge variant="secondary" className="font-normal">
                {post.category}
              </Badge>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readTime} de lectura</span>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Featured Image - Full Width */}
        <div className="w-full mb-16">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </div>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto max-w-7xl px-4 pb-20">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-4xl font-bold mt-16 mb-6 scroll-mt-24">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-lg mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  } else if (paragraph.trim().match(/^\d+\./)) {
                    return (
                      <li key={index} className="ml-6 mb-3 text-lg leading-relaxed">
                        {paragraph.replace(/^\d+\.\s*/, '')}
                      </li>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-6 mb-3 text-lg leading-relaxed">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-6 text-lg text-foreground/90 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Back Button */}
              <div className="mt-16 pt-8 border-t">
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-xl">Convierte tu sitio Lovable</h3>
                  <p className="text-sm text-muted-foreground">
                    Transforma tu proyecto Lovable en un sitio WordPress profesional en minutos.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contact">Empezar ahora</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg mb-4">Artículos relacionados</h3>
                  <div className="space-y-4">
                    <Link to="/blog" className="block group">
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
                        WordPress vs Otros CMS
                      </h4>
                      <p className="text-xs text-muted-foreground">7 min de lectura</p>
                    </Link>
                    <div className="border-t pt-4">
                      <Link to="/blog" className="block group">
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
                          Optimizar rendimiento WordPress
                        </h4>
                        <p className="text-xs text-muted-foreground">6 min de lectura</p>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default BlogPost;

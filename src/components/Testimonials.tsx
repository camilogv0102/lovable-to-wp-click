import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Catherine",
    role: "Creative Director",
    company: "Digital Agency",
    quote: "El plugin ha transformado nuestra forma de trabajar. Lo que antes nos tomaba días, ahora lo completamos en minutos. La calidad del código generado es excepcional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Blend Digital",
    role: "CEO",
    company: "Web Development Agency",
    quote: "Increíble herramienta, muy fácil de usar. Hemos reducido nuestros tiempos de desarrollo en un 80% y podemos ofrecer precios más competitivos a nuestros clientes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-muted-foreground">
            Testimonios reales de profesionales que ya usan Lovable to WordPress
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/40 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <CardContent className="pt-8">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

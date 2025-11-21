import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Web Developer",
    content: "This plugin saved me weeks of development time. I can now deliver WordPress sites to my clients in minutes instead of days. Absolutely game-changing!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Agency Owner",
    content: "We've been using Lovable to WordPress for our agency and it's transformed our workflow. Our clients love the speed and we love the efficiency.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Startup Founder",
    content: "As a non-technical founder, this tool gave me the power to create professional WordPress sites without hiring a developer. It's incredible!",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Web Designer",
    content: "The seamless conversion from Lovable to WordPress is perfect. No code breaks, everything just works. This is the tool I've been waiting for.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9/5</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Verified Reviews</p>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers and agencies who are already transforming their workflow
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8 space-y-6">
                        <Quote className="w-10 h-10 text-primary/20" />
                        
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>

                        <p className="text-lg text-foreground leading-relaxed">
                          "{testimonial.content}"
                        </p>

                        <div className="border-t border-border/40 pt-6">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

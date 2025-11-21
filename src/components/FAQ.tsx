import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito conocimientos de código para usar el plugin?",
    answer: "¡Para nada! Nuestro plugin está diseñado para todos. Simplemente instálalo, sube tu proyecto ZIP de Lovable y haz clic en convertir. El plugin maneja todos los detalles técnicos automáticamente.",
  },
  {
    question: "¿Se preservarán mis estilos de Tailwind CSS?",
    answer: "¡Sí! Nuestro motor de conversión inteligente mantiene todo tu sistema de diseño, incluyendo todas las clases de Tailwind, estilos personalizados y tokens de diseño. Tu sitio WordPress se verá exactamente como tu proyecto Lovable.",
  },
  {
    question: "¿Qué sucede después del período beta?",
    answer: "Los usuarios beta obtienen acceso de por vida al plugin, incluyendo todas las actualizaciones y funciones futuras. Nunca pagarás otro centavo y siempre tendrás acceso a la última versión.",
  },
  {
    question: "¿Puedo usar esto en múltiples sitios WordPress?",
    answer: "¡Absolutamente! Tu licencia cubre instalaciones ilimitadas de WordPress y conversiones ilimitadas de proyectos. Úsalo en tantos sitios como necesites.",
  },
  {
    question: "¿Qué versión de WordPress se requiere?",
    answer: "El plugin funciona con WordPress 5.8 y superior. Es compatible con todos los temas principales y page builders, aunque funciona mejor con temas basados en bloques.",
  },
  {
    question: "¿Hay soporte al cliente disponible?",
    answer: "¡Sí! Los usuarios beta obtienen soporte prioritario por correo electrónico y nuestra comunidad dedicada de Discord. Típicamente respondemos dentro de 24 horas y proporcionamos documentación completa.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber sobre el plugin.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-base lg:text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

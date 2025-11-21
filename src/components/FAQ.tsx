import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need coding knowledge to use this plugin?",
    answer: "Not at all! Our plugin is designed for everyone. Simply install it, connect your Lovable account, and click convert. The plugin handles all the technical details automatically.",
  },
  {
    question: "Will my Tailwind CSS styles be preserved?",
    answer: "Yes! Our smart conversion engine maintains your entire design system, including all Tailwind classes, custom styles, and design tokens. Your WordPress site will look exactly like your Lovable project.",
  },
  {
    question: "What happens after the beta period?",
    answer: "Beta users get lifetime access to the plugin, including all future updates and features. You'll never pay another dime, and you'll always have access to the latest version.",
  },
  {
    question: "Can I use this on multiple WordPress sites?",
    answer: "Absolutely! Your license covers unlimited WordPress installations and unlimited project conversions. Use it on as many sites as you need.",
  },
  {
    question: "What WordPress version is required?",
    answer: "The plugin works with WordPress 5.8 and higher. It's compatible with all major themes and page builders, though it works best with block-based themes.",
  },
  {
    question: "Is there customer support available?",
    answer: "Yes! Beta users get priority support via email and our dedicated Discord community. We typically respond within 24 hours and provide comprehensive documentation.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about the plugin.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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

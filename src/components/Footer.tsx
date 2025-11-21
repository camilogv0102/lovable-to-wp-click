import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Características", href: "#features" },
      { name: "Cómo funciona", href: "#how-it-works" },
      { name: "Precios", href: "#pricing" },
      { name: "Roadmap", href: "#roadmap" },
    ],
    solutions: [
      { name: "Landing Pages", href: "/solutions/landing-pages" },
      { name: "Sitios Corporativos", href: "/solutions/corporate-websites" },
      { name: "E-commerce", href: "/solutions/ecommerce" },
    ],
    forWho: [
      { name: "Freelancers", href: "/for-who/freelancers" },
      { name: "Agencias", href: "/for-who/agencies" },
      { name: "Emprendedores", href: "/for-who/entrepreneurs" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Get Help", href: "/get-help" },
      { name: "Comunidad Discord", href: "#" },
    ],
    legal: [
      { name: "Términos de servicio", href: "#" },
      { name: "Política de privacidad", href: "#" },
      { name: "Política de cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-dark text-dark-foreground">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(330_85%_55%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Lovable to WP</span>
            </Link>
            
            <p className="text-dark-foreground/70 leading-relaxed">
              Convierte tus proyectos de Lovable en sitios WordPress profesionales en minutos. Sin código, sin complicaciones.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Suscríbete a nuestro newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-background/10 border-border/20 text-dark-foreground placeholder:text-dark-foreground/40"
                />
                <Button size="icon" className="bg-gradient-primary hover:opacity-90 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-dark-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Soluciones</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-dark-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-lg mt-8">Para quién</h3>
            <ul className="space-y-3">
              {footerLinks.forWho.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-dark-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-dark-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-dark-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left space-y-1">
              <p className="text-sm text-dark-foreground/70">
                © {currentYear} Lovable to WP. Todos los derechos reservados.
              </p>
              <p className="text-xs text-dark-foreground/50">
                Crafted with passion by sacred designers
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <social.icon className="w-4 h-4 text-dark-foreground/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

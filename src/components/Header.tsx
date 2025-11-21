import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Lovable to WP
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-secondary transition-colors">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6 bg-popover">
                    <div className="grid gap-4">
                      <div className="group rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors">
                          Landing Pages
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Create stunning, high-converting landing pages in minutes. Perfect for campaigns, product launches, and lead generation with beautiful, responsive designs.
                        </p>
                      </div>
                      
                      <div className="group rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors">
                          Corporate Websites
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Build professional corporate websites with ease. Showcase your brand, services, and team with polished, enterprise-ready designs that inspire trust.
                        </p>
                      </div>
                      
                      <div className="group rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors">
                          Ecommerce
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Speed up your ecommerce workflow by creating static and informational pages instantly. While WooCommerce integration is coming soon, you can build product showcases, about pages, and policies now—then use Elementor for shop pages.
                        </p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/video-demo" className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors">
                  Video Demo
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors">
                  About Me
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button variant="outline" asChild className="ml-2">
            <a href="https://lovabletowordpress.online/my-account/" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
          <Button variant="hero" asChild>
            <a href="/?add-to-cart=444">
              Get Access
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              <div>
                <button 
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between w-full text-lg font-semibold text-foreground py-2"
                >
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="pl-4 mt-2 space-y-3 border-l-2 border-border">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Landing Pages</h4>
                    <p className="text-xs text-muted-foreground">High-converting landing pages in minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Corporate Websites</h4>
                    <p className="text-xs text-muted-foreground">Professional enterprise-ready designs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Ecommerce</h4>
                    <p className="text-xs text-muted-foreground">Static pages now, WooCommerce coming soon</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/video-demo" 
                className="text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                Video Demo
              </Link>
              <Link 
                to="/about" 
                className="text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                About Me
              </Link>
              <Link 
                to="/contact" 
                className="text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Button variant="outline" asChild className="mt-4">
                <a 
                  href="https://lovabletowordpress.online/my-account/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Login
                </a>
              </Button>
              <Button variant="hero" asChild>
                <a 
                  href="/?add-to-cart=444"
                  onClick={() => setOpen(false)}
                >
                  Get Access
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

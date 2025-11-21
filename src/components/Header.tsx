import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Lovable to WP
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/video-demo" className="text-foreground hover:text-primary transition-colors">
            Video Demo
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About Me
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="hero" asChild>
            <a href="/?add-to-cart=444">
              Get Access
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://lovabletowordpress.online/my-account/" target="_blank" rel="noopener noreferrer">
              Login
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
              <Button variant="hero" asChild className="mt-4">
                <a 
                  href="/?add-to-cart=444"
                  onClick={() => setOpen(false)}
                >
                  Get Access
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://lovabletowordpress.online/my-account/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Login
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

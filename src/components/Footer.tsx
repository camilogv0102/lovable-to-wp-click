const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/40 bg-muted/30">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Lovable to WP. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Crafted with passion by sacred designers
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5"
          : "bg-gradient-to-b from-background/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-2xl font-heading font-bold text-gradient-metallic hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer"
          >
            Althaf Aluminium
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground/90 hover:text-accent font-medium transition-all duration-300 relative group hover:scale-110"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
                <span className="absolute inset-0 bg-accent/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-background/20 backdrop-blur-md border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-lg hover:bg-accent/10 backdrop-blur-sm"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/80 backdrop-blur-xl rounded-xl shadow-strong border border-white/10 mt-2 py-4 animate-fade-in overflow-hidden">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-4 py-3 text-foreground/90 hover:text-accent hover:bg-accent/10 hover:backdrop-blur-lg transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-background/30 backdrop-blur-md border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent hover:shadow-glow transition-all duration-300"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

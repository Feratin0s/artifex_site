import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Artifex Tech"
              className="h-10 w-10"
            />
            <span className="text-white text-xl">
              Artifex Tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/80 hover:text-white transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-white transition-colors text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors text-left"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white w-full"
            >
              Contato
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
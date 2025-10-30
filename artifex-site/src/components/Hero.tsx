import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.svg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#FF3B3B]/20"></div>

      {/* Animated background circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF3B3B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF3B3B]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF3B3B]/20 blur-2xl rounded-full"></div>
              <img
                src={logo}
                alt="Artifex Tech"
                className="h-24 w-24 md:h-32 md:w-32 relative"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-white mb-6">
            <span className="block mb-2">
              Transforme sua casa em um
            </span>
            <span className="block text-[#FF3B3B]">
              Lar Inteligente
            </span>
          </h1>

          {/* Tagline */}
          <div className="mb-6">
            <p className="text-[#FF3B3B]/90 text-2xl md:text-3xl italic">
              Tecnologia feita por Artífices
            </p>
          </div>

          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg md:text-xl">
            Soluções completas de automação residencial para
            tornar sua vida mais confortável, segura e
            eficiente. Especialistas em criar, inventar e
            construir tecnologia de ponta com maestria
            artesanal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white px-8 py-6 text-lg"
            >
              Solicitar Orçamento
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border border-white/20 text-black hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg transition-all duration-200 backdrop-blur-sm"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("services")}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
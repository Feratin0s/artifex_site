import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.svg";

type TikTokIconProps = {
  size?: number;
  className?: string; // adiciona className
};

const TikTokIcon = ({
  size = 18,
  className,
}: TikTokIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className} // aplica aqui
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Artifex Tech"
                className="h-10 w-10"
              />
              <span className="text-white text-xl">
                Artifex Tech
              </span>
            </div>
            <p className="text-white/60 mb-4">
              Transformando residências em lares inteligentes
              com tecnologia de ponta e soluções personalizadas
              de automação.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/artifex.oficial?igsh=bGp1MHhnaXc0cjQx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#FF3B3B]/20 border border-white/10 hover:border-[#FF3B3B]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram
                  className="text-white/70 hover:text-[#FF3B3B]"
                  size={18}
                />
              </a>
              <a
                href="https://www.facebook.com/share/1ZrbWmX3Ew/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#FF3B3B]/20 border border-white/10 hover:border-[#FF3B3B]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook
                  className="text-white/70 hover:text-[#FF3B3B]"
                  size={18}
                />
              </a>
              <a
                href="https://www.tiktok.com/@artifex.oficial?_t=ZM-90yDM2yzwdQ&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#FF3B3B]/20 border border-white/10 hover:border-[#FF3B3B]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <TikTokIcon
                  className="text-white/70 hover:text-[#FF3B3B]"
                  size={18}
                />
              </a>

              {/*
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#FF3B3B]/20 border border-white/10 hover:border-[#FF3B3B]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="text-white/70 hover:text-[#FF3B3B]" size={18} />
              </a>*/}
              <a
                href="https://www.youtube.com/@Artifex.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#FF3B3B]/20 border border-white/10 hover:border-[#FF3B3B]/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Youtube
                  className="text-white/70 hover:text-[#FF3B3B]"
                  size={18}
                />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/60 hover:text-[#FF3B3B] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-[#FF3B3B] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/60 hover:text-[#FF3B3B] transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-[#FF3B3B] transition-colors"
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-white/60">
                Automação Residencial
              </li>
              <li className="text-white/60">
                Câmeras com YOLO
              </li>
              <li className="text-white/60">
                Servidores & Docker
              </li>
              <li className="text-white/60">
                Node.js & NodeRed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center space-y-2">
            <p className="text-white/50">
              © 2025 Artifex Tech. Todos os direitos
              reservados.
            </p>
            <p className="text-white/40 text-sm">
              CNPJ: ***********
              {/*Colocar CNPJ depois de criar IMEI*/}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
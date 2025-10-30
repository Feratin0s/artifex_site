import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import painelsolar1 from "../assets/projects/painelsolar.jpg";
import painelsolar2 from "../assets/projects/painelsolar2.png";
import painelsolar3 from "../assets/projects/painelsolar3.png";

import campainha1 from "../assets/projects/campainha1.png";
import campainha2 from "../assets/projects/campainha2.png";
import campainha3 from "../assets/projects/campainha3.jpg";

import server1 from "../assets/projects/server1.png";
import server2 from "../assets/projects/server2.png";
import server3 from "../assets/projects/server3.png";
import server4 from "../assets/projects/server4.png";
import server5 from "../assets/projects/server5.png";
import server6 from "../assets/projects/server6.png";

import empresa1 from "../assets/projects/empresa1.png";
import empresa2 from "../assets/projects/empresa2.png";
import empresa3 from "../assets/projects/empresa3.png";

const projects = [
  {
    title: "Instalação de Energia Solar - ON Grid",
    category: "Automação Completa",
    images: [
      painelsolar1,
      painelsolar2,
      painelsolar3,
    ],
    description:
      "Monitore seu consumo de energia e seus gastos com precisão. Nossos medidores inteligentes mostram em tempo real seu uso e o saldo de créditos com a Neoenergia — tudo para você economizar mais e gerir melhor sua energia.",
  },
  {
    title: "Campainha Inteligente com Notificações em Tempo Real",
    category: "SmartHome & IoT",
    images: [
      campainha1,
      campainha2,
      campainha3,
    ],
    description:
      "Saiba instantaneamente quem está na sua porta. Ao ser acionada, a campainha tira uma foto da pessoa e envia automaticamente para o seu celular, com data e hora exatas. Compatível com Alexa para alertas por voz. Segurança e praticidade na palma da sua mão.",
  },
  {
    title: "Servidores e Containers",
    category: "SmartHome & Self-hosted",
    images: [
      server1,
      server2,
      server3,
      server4,
      server5,
      server6,
    ],
    description:
      "Tenha controle total do seu ecossistema digital com o Home Assistant e soluções integradas que trazem praticidade e segurança. Com o Nextcloud, é possível criar sua própria nuvem pessoal ou empresarial e gerenciar usuários com facilidade. O Node-RED e o N8N permitem desenvolver fluxos automáticos para conectar dispositivos e serviços de forma simples e eficiente. Com o Jellyfin, você acessa sua biblioteca de filmes e vídeos de qualquer lugar, enquanto o Pi-hole bloqueia propagandas em toda a rede, oferecendo mais desempenho e privacidade. O Frigate, aliado ao YOLO, adiciona inteligência artificial às suas câmeras de segurança, garantindo detecção precisa de pessoas e objetos.",
  },
  {
    title: "Automação Empresarial",
    category: "Self-hosted",
    images: [
      empresa1,
      empresa2,
      empresa3,
      "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNlY3VyaXR5JTIwc3lzdGVtfGVufDF8fHx8MTc2MTc1NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description:
      "Utilize inteligência artificial para otimizar atendimentos via WhatsApp, implemente fluxos automáticos com N8N e gerencie processos por meio de agentes autônomos. Automatize entradas com sistemas de RFID e biometria, e controle tudo diretamente pelo smartphone. Crie o servidor da sua empresa com estrutura personalizada, integre bancos de dados SQL e desenvolva uma infraestrutura estável, segura e totalmente automatizada. Tecnologia feita para aumentar produtividade, reduzir custos e levar sua operação a um novo nível de eficiência.",
  },
];

// Componente para o slideshow de imagens
function ProjectImageSlideshow({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % images.length,
        );
        setIsTransitioning(false);
      }, 500); // Duração do fade out
    }, 4000); // Troca de imagem a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <ImageWithFallback
          key={index}
          src={image}
          alt={`${title} - ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex && !isTransitioning
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      ))}

      {/* Indicadores de imagens */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-[#FF3B3B] w-6"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-white mb-4">
            Projetos Realizados
          </h2>
          <p className="text-white/70 text-lg">
            Confira alguns dos nossos projetos de automação
            residencial que transformaram casas em lares
            inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-white/10 overflow-hidden group hover:border-[#FF3B3B]/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <ProjectImageSlideshow
                  images={project.images}
                  title={project.title}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#FF3B3B] text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
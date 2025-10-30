import {
  Lightbulb,
  Shield,
  Camera,
  Smartphone,
  Server,
  Bot,
  Code2,
  Network,
  Box,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "HomeAssistant",
    description:
      "Controle total da iluminação da sua casa pelo celular ou comando de voz. Crie cenários personalizados para cada momento.",
  },
  {
    icon: Shield,
    title: "Segurança & Monitoramento",
    description:
      "Alarmes, sensores, campainhas inteligentes integrados para proteger sua família com monitoramento em tempo real. Receba notificação no seu celular",
  },
  {
    icon: Camera,
    title: "Câmeras com YOLO",
    description:
      "Detecção avançada de objetos e pessoas usando YOLO. Monitoramento inteligente com reconhecimento em tempo real.",
  },
  {
    icon: Server,
    title: "Servidores & Linux",
    description:
      "Gerenciamento completo de infraestrutura Linux, incluindo servidores, containers Docker, bancos de dados e hospedagem de aplicações e website para sua empresa.",
  },
  {
    icon: Code2,
    title: "Node.js & NodeRed",
    description:
      "Desenvolvimento e programação personalizada em Node.js e NodeRed para automação e integração de sistemas. Protocolo MQTT, Zigbee, RF e etc.",
  },
  {
    icon: Network,
    title: "Integração de Sistemas",
    description:
      "Conectamos diferentes plataformas e dispositivos, criando um ecossistema integrado e eficiente.",
  },
  {
    icon: Bot,
    title: "Atendimento por IA",
    description:
      "Assistente virtual inteligente para atendimento automatizado, profissionalize o Whatsapp da sua empresa.",
  },
  {
    icon: Smartphone,
    title: "Automação Residencial",
    description:
      "Soluções completas de automação residencial. Controle total da sua casa na palma da mão.",
  },
  {
    icon: Box,
    title: "Impressão 3D",
    description:
      "Soluções completas de automação residencial. Controle total da sua casa na palma da mão.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-zinc-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4" style={{ color: "#FF3B3B" }}>
            Nossos Serviços
          </h2>
          <p className="text-white/70 text-lg">
            Oferecemos soluções completas de automação
            residencial com tecnologia de ponta e suporte
            especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-white/10 hover:border-[#FF3B3B]/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#FF3B3B]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon
                    className="text-[#FF3B3B]"
                    size={24}
                  />
                </div>
                <h3 className="text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
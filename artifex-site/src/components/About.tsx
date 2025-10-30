import { Check } from "lucide-react";

const benefits = [
  "Pioneira em automação residencial integrada",
  "Transformando casas em lares inteligentes com soluções inovadoras, conectando diversos sistemas como nunca antes visto.",
  "Infraestrutura com Docker, Linux e servidores dedicados",
  "Sistema Frigate para vigilância inteligente com IA",
  "Atendimento automatizado por Inteligência Artificial para sua empresa",
  "Automatize sistema com ESP32/ESP8266 ou STM",
  "Energia solar para sua casa ou empresa",
  "Soluções personalizadas para cada cliente",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-white mb-4">
              Sobre a Artifex Tech
            </h2>
            <p className="text-[#FF3B3B]/90 text-xl italic mb-6">
              Tecnologia feita por Artífices
            </p>
            <p className="text-white/70 text-lg mb-6">
              Artifex une o latim arti (“artefato”) e fex (“de
              fazer”), encaixando-se perfeitamente no nome do
              fundador, Arthur, e em seu apelido, Artie.
              Inspirado também no artífice: artesão ou operário
              especializado em artes mecânicas; o indivíduo que
              inventa, compõe ou é autor de algo.
            </p>
            <p className="text-white/70 text-lg mb-6">
              Tenha sua casa automatizada com Home Assistant:
              integre todos os dispositivos em um único lugar e
              tenha acesso remoto de onde estiver. Bloqueie
              propagandas com o Pi-hole. Tenha câmeras
              inteligentes com o Frigate. Precisa de uma nuvem
              para armazenar as fotos da família? O Nextcloud é
              a solução. No ambiente de trabalho, precisa
              compartilhar arquivos pesados? Que tal um servidor
              Samba ou um banco de dados MySQL para proteger os
              dados dos seus clientes?
            </p>
            <p className="text-white/70 text-lg mb-8">
              Solução inteligente de verdade para a sua empresa
              é aqui! O céu é o limite e podemos fazer
              acontecer. Entre em contato, faça um orçamento e
              venha conhecer nossa empresa para entender por que
              somos diferenciados dos demais.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#FF3B3B]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check
                      className="text-[#FF3B3B]"
                      size={16}
                    />
                  </div>
                  <span className="text-white/80">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-lg text-center">
              <div className="text-[#FF3B3B] text-5xl mb-2">
                50+
              </div>
              <div className="text-white/70">
                Projetos desenvolvidos
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-lg text-center">
              <div className="text-[#FF3B3B] text-5xl mb-2">
                1º
              </div>
              <div className="text-white/70">
                Empresa em automação integrada
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-lg text-center">
              <div className="text-[#FF3B3B] text-5xl mb-2">
                98%
              </div>
              <div className="text-white/70">De satisfação</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-lg text-center">
              <div className="text-[#FF3B3B] text-5xl mb-2">
                24/7
              </div>
              <div className="text-white/70">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    const message = formData.newsletter
      ? "Mensagem enviada com sucesso! Você será inscrito em nossa newsletter."
      : "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    toast.success(message);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      newsletter: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-white mb-4">Entre em Contato</h2>
          <p className="text-white/70 text-lg">
            Pronto para transformar sua casa ou empresa? Fale
            conosco e solicite um orçamento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="bg-zinc-800 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2"
                >
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="bg-zinc-800 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white mb-2"
                >
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-zinc-800 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  required
                  className="bg-zinc-800 border-white/10 text-white placeholder:text-white/40 resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      newsletter: checked as boolean,
                    })
                  }
                  className="mt-0.5 border-white/20 data-[state=checked]:bg-[#FF3B3B] data-[state=checked]:border-[#FF3B3B]"
                />
                <label
                  htmlFor="newsletter"
                  className="text-white/70 text-sm cursor-pointer select-none leading-relaxed"
                >
                  Desejo receber novidades, promoções e
                  conteúdos exclusivos sobre automação
                  residencial da Artifex Tech
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3B3B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone
                      className="text-[#FF3B3B]"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">
                      Telefone
                    </div>
                    <div className="text-white">
                      (81) 995245593
                    </div>
                    <div className="text-white">
                      {/* Número de contato */}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3B3B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail
                      className="text-[#FF3B3B]"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">
                      E-mail
                    </div>
                    <div className="text-white">
                      artifex@artifextech.com.br
                    </div>
                    <div className="text-white">
                      artifextech.oficial@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3B3B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="text-[#FF3B3B]"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">
                      {" "}
                      Área de Cobertura
                    </div>
                    <div className="text-white">
                      Recife
                      <br />
                      Olinda
                      <br />
                      Jaboatão dos Guararapes
                      <br />
                      Paulista
                      <br />
                      Região metropolitana
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-lg">
              <h4 className="text-white mb-3">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>9h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9h às 15h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
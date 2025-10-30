import { useState } from 'react';
import whatsappLogo from '../assets/whatsapp.svg';
import shopeeLogo from '../assets/shopee-icon.svg';

// Ícone do Telegram
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#0088cc"/>
    <path d="M5.491 11.74l11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="white"/>
  </svg>
);

// Ícone da Shopee
//const ShopeeIcon = () => (
//  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//    <circle cx="12" cy="12" r="12" fill="#EE4D2D"/>
//    <path d="M12 6L8.5 9.5H10V14H11.5V11H12.5V14H14V9.5H15.5L12 6Z" fill="white"/>
//    <path d="M7 15H17V16.5H7V15Z" fill="white"/>
//    <path d="M8.5 17H9.5V18H8.5V17ZM11 17H13V18H11V17ZM14.5 17H15.5V18H14.5V17Z" fill="white"/>
//  </svg>
//);

export function FloatingButtons() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    // Substitua o número abaixo pelo seu número do WhatsApp (formato: 5511999999999)
    const phoneNumber = '558195245593'; // Coloque seu número aqui
    const message = 'Olá! Gostaria de saber mais sobre os serviços da Artifex Tech.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShopeeClick = () => {
    // Substitua pela URL da sua loja na Shopee
    const shopeeUrl = 'https://shopee.com.br/shop/1650041345'; // Coloque o link da sua loja aqui
    window.open(shopeeUrl, '_blank');
  };

  const handleTelegramClick = () => {
    // Substitua pelo link do seu bot/canal do Telegram
    const telegramUrl = 'https://t.me/FindPromotion_bot'; // Coloque o link do seu bot aqui
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botão Telegram */}
      <div className="relative group">
        <button
          onClick={handleTelegramClick}
          onMouseEnter={() => setHoveredButton('telegram')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[#0088cc]/50 hover:shadow-2xl"
          aria-label="Bot de promoções no Telegram"
        >
          <TelegramIcon />
        </button>
        {hoveredButton === 'telegram' && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap border border-white/10 animate-in fade-in slide-in-from-right-2 duration-200">
            <p className="text-sm">Bot de Indicações</p>
            <p className="text-xs text-white/60">Melhores promoções!</p>
          </div>
        )}
      </div>

      {/* Botão Shopee */}
      <div className="relative group">
        <button
          onClick={handleShopeeClick}
          onMouseEnter={() => setHoveredButton('shopee')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[#EE4D2D]/50 hover:shadow-2xl"
          aria-label="Conheça nossa loja na Shopee"
        >
          <img
            src={shopeeLogo}
            alt="Shopee"
            className="w-full h-full object-contain"
          />
        </button>
        {hoveredButton === 'shopee' && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap border border-white/10 animate-in fade-in slide-in-from-right-2 duration-200">
            <p className="text-sm">Conheça nossa Loja</p>
            <p className="text-xs text-white/60">na Shopee</p>
          </div>
        )}
      </div>

      {/* Botão WhatsApp */}
      <div className="relative group">
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[#25D366]/50 hover:shadow-2xl"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="w-full h-full object-contain"
          />
        </button>
        {hoveredButton === 'whatsapp' && (
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap border border-white/10 animate-in fade-in slide-in-from-right-2 duration-200">
            <p className="text-sm">Fale Conosco</p>
            <p className="text-xs text-white/60">WhatsApp</p>
          </div>
        )}
      </div>
    </div>
  );
}

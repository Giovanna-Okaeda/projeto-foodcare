import React from 'react';
import { Link } from 'react-router-dom';

// Ícones internos para o Footer
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white pt-16 pb-8 px-18 mt-0">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo e Linha */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="text-3xl font-normal tracking-tighter flex items-center">
            Food<span className="font-black">Care</span>
          </div>
          <div className="w-full h-[1px] bg-white/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-base font-bold">
          <div className="flex flex-col gap-4">
            <Link to="/" className="hover:underline transition-all">Home</Link>
            <Link to="/informe-se" className="hover:underline transition-all">Informe-se</Link>
            <Link to="/como-ajudar" className="hover:underline transition-all">Como ajudar</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/sobre-nos" className="hover:underline transition-all">Sobre nós</Link>
            <Link to="/contato" className="hover:underline transition-all">Fale conosco</Link>
            <Link to="/doe-agora" className="hover:underline transition-all">Doe agora</Link>
          </div>
          <div className="flex flex-col gap-6 md:items-end">
            <span className="text-sm font-bold uppercase tracking-widest opacity-90">Siga-nos nas redes sociais</span>
            <div className="flex gap-6">
              <a href="#" className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full"><IconInstagram /></a>
              <a href="#" className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full"><IconFacebook /></a>
              <a href="#" className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full"><IconLinkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
          © 2026 FoodCare - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
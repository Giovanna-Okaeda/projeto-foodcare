import React, { useState } from 'react';

const DoeAgora = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const pixKey = "pix@foodcare.org.br";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <main className="">
      {/* HERO SECTION - BANNER PRINCIPAL */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo com Overlay Escuro */}
        <div className="absolute inset-0 z-0">
          <img 
            src="src/assets/Página Doe Agora (1).png" // A imagem da criança/impacto
            alt="Impacto FoodCare" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: QR CODE E CHAVE PIX */}
          <div className="flex flex-col items-center text-white">
            <div className="bg-white p-3 rounded-xl shadow-6xl mb-6">
              <img 
                src="src/assets/qrcode.png" // O seu QR Code
                alt="QR Code PIX" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
              {pixKey}
            </h2>
            <button 
              onClick={copyToClipboard}
              className="bg-[#f28e1c] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all transform active:scale-95 uppercase text-sm tracking-widest"
            >
              {copySuccess ? "Copiado!" : "Copiar chave"}
            </button>
          </div>

          {/* LADO DIREITO: VALORES E IMPACTO */}
          <div className="text-white">
            <h1 className="text-4xl md:text-4xl font-black mb-4 leading-tight uppercase">
              Sua doação transforma<br/> vidas hoje.
            </h1>
            <p className="text-lg font-bold mb-8 opacity-90 tracking-widest uppercase">
              Escolha o valor da sua contribuição
            </p>

            {/* LISTA DE VALORES (O BLOCO ESCURO DO LAYOUT) */}
            <div className="bg-[#eb7d00]/80 backdrop-blur-sm p-8 rounded-3xl flex flex-col gap-6 border border-white/10">
              
              {/* Opção 1 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white text-gray-900 font-black text-2xl w-28 py-3 rounded-xl text-center group-hover:bg-[#f28e1c] group-hover:text-white transition-colors">
                  R$30
                </div>
                <p className="text-normal md:text-base font-medium leading-snug">
                  Garante a logística de 5 cestas básicas.
                </p>
              </div>

              {/* Opção 2 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white text-gray-900 font-black text-2xl w-28 py-3 rounded-xl text-center group-hover:bg-[#f28e1c] group-hover:text-white transition-colors">
                  R$50
                </div>
                <p className="text-sm md:text-base font-medium leading-snug">
                  Leva alimento para uma família de 4 pessoas por uma semana.
                </p>
              </div>

              {/* Opção 3 */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white text-gray-900 font-black text-2xl w-28 py-3 rounded-xl text-center group-hover:bg-[#f28e1c] group-hover:text-white transition-colors">
                  R$150
                </div>
                <p className="text-sm md:text-base font-medium leading-snug">
                  Patrocina o resgate de 100kg de alimentos em feiras parceiras.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoeAgora;
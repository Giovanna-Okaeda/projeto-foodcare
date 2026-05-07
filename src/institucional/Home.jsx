import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// importe das imagens 
import banner1 from '../assets/bannet-home.webp';
import banner2 from '../assets/outro-banner.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { url: banner1, alt: "Senhora sorrindo" },
    { url: banner2, alt: "Segunda imagem do carrossel" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100">

      {/* HERO SECTION CORRIGIDO (SEM DUPLICADOS) */}
  <section id="home" className="relative h-[700px] w-full overflow-hidden bg-black">
    {/* Loop APENAS para as imagens */}
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={slide.url} 
          className="w-full h-full object-cover brightness-[0.6]" 
          alt={slide.alt} 
        />
      </div>
    ))}
  
  {/* Conteúdo Fixo (Fora do map para não duplicar) */}
  <div className="absolute inset-0 pointer-events-none z-10 flex items-end justify-start p-20">
    <div className="max-w-2xl mb-10 pointer-events-auto">
      <h1 className="text-white text-5xl md:text-6xl font-black leading-tight uppercase tracking-tighter drop-shadow-2xl">
        Com seu apoio, milhares de pessoas se alimentam diariamente.
      </h1>
    </div>
  </div>

  {/* Setas (Fora do map) */}
  <div className="absolute inset-0 z-20 flex items-center justify-between px-6 pointer-events-none">
    <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all">
      <ChevronLeft className="w-8 h-8" />
    </button>
    <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all">
      <ChevronRight className="w-8 h-8" />
    </button>
  </div>

  {/* Barrinhas indicadores */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
    {slides.map((_, i) => (
      <div 
        key={i} 
        className={`h-1.5 w-12 transition-all duration-500 rounded-full ${i === currentSlide ? 'bg-orange-500' : 'bg-white/30'}`}
      />
    ))}
      </div>
    </section>
            
            {/* ÚLTIMAS AÇÕES */}
    <section id="noticias" className="py-24 px-1 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-black mb-16 text-left">
        ACOMPANHE NOSSAS ÚLTIMAS AÇÕES
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col border border-orange-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070" 
              className="w-full h-full object-cover" 
              alt="Distribuição de alimentos" 
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="font-bold text-lg leading-tight text-black">
              Voluntários do FoodCare apoiam o projeto "Mesa Solidária" e distribuem alimentos em São Paulo
            </h3>
            <p className="text-sm text-gray-600 italic leading-relaxed">
              Em uma ação marcada por solidariedade e compromisso social, voluntários do FoodCare participaram, nesta semana, de mais uma iniciativa do projeto "Mesa Solidária", levando alimentos a pessoas em situação de vulnerabilidade no centro de São Paulo.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col border border-orange-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="src/assets/foto-programaaqnsp.jpg" 
              className="w-full h-full object-cover" 
              alt="Programa Alimento que Não se Perde"/>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="font-bold text-lg leading-tight text-black">
              FoodCare lança programa "Alimento que Não se Perde" para combater o desperdício e ampliar doações
            </h3>
            <p className="text-sm text-gray-600 italic leading-relaxed">
              O FoodCare anunciou o lançamento do programa "Alimento que Não se Perde", uma iniciativa que busca reduzir o desperdício de alimentos por meio de parcerias com mercados, restaurantes e feiras da cidade de São Paulo.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col border border-orange-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="src/assets/foto-mdf.jpg" 
              className="w-full h-full object-cover" 
              alt="Mapeamento da Fome" 
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="font-bold text-lg leading-tight text-black">
              FoodCare cria projeto "Mapeamento da Fome" para direcionar ações em São Paulo
            </h3>
            <p className="text-sm text-gray-600 italic leading-relaxed">
              Com o objetivo de tornar suas ações mais eficientes, o FoodCare deu início a um novo projeto de mapeamento da fome na cidade de São Paulo. A iniciativa busca identificar as regiões com maior vulnerabilidade social e alimentar.
            </p>
          </div>
        </div>
      </div>

      {/* BOTÃO SAIBA MAIS: Centralizado e sólido */}
      <div className="flex justify-center mt-16">
      <a 
        href="#informe-se" 
        className="bg-orange-500 text-white font-bold py-3 px-45 rounded-xl border-2 border-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-300 text-center min-w-[250px]"
      >
        Saiba mais
      </a>
    </div>
    </section>

    {/* SEÇÃO SOBRE / IMPACTO (Transforme Vidas) */}
    <section id="sobre" className="py-24 px-12 bg-white flex flex-col gap-32 max-w-7xl mx-auto">
      
      {/* 1. Transforme vidas (Imagem na Esquerda) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/11]">
          <img 
            src="src/assets/foto-tv.jpeg" 
            alt="Pessoa em situação de rua" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-5xl font-black text-black leading-tight">
            Transforme vidas.
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            Você já sentiu a fome na pele? Para milhares de pessoas, essa não é uma pergunta, é a realidade diária. Enquanto muitos têm acesso ao básico, outros enfrentam a incerteza de não saber quando será a próxima refeição.
          
            Se você quer fazer parte de algo maior e impactar vidas de verdade, nos ajude a levar alimento a quem mais precisa.
          </p>
          <button className="w-fit mt-1 border-2 border-orange-500 text-orange-500 font-bold py-3 px-59 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
            Doe agora
          </button>
        </div>
      </div>

      {/* 2. Transforme fome em esperança (Imagem na Direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6 lg:order-1 order-2">
          <h2 className="text-5xl font-black text-black leading-tight">
            Transforme fome em esperança.
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            Na FoodCare, conectamos doadores, parceiros e voluntários para levar esperança em forma de alimento até comunidades em situação de vulnerabilidade social. Cada doação representa mais do que comida: é dignidade, cuidado e a chance de um recomeço.
          </p>
          <button className="w-fit mt-1 border-2 border-orange-500 text-orange-500 font-bold py-3 px-51 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
            Saiba quem somos
          </button>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/11] lg:order-2 order-1">
          <img 
            src="src/assets/foto-fome.png" 
            alt="Cartaz de protesto contra a fome" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Contribua com a FoodCare (Imagem na Esquerda) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/11]">
          <img 
            src="src/assets/foto-ccaf.png" 
            alt="Voluntários trabalhando" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-black text-black leading-tight">
            Contribua com a Food<span className="text-orange-500">Care</span>.
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            Ao se juntar à FoodCare, você faz parte de uma corrente de solidariedade que leva alimento e esperança a quem mais precisa.<br></br>Doe, participe ou divulgue. Pequenas atitudes geram grandes mudanças.
          </p>
          <button className="w-fit mt-4 border-2 border-orange-500 text-orange-500 font-bold py-3 px-38 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
            Junte-se a nós e faça a diferença
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};


export default Home;
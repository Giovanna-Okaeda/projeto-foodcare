import React from 'react';
import { Link } from 'react-router-dom';

// 1. LISTA DE DADOS (Coloque fora do componente para organizar)
const frentesAcao = [
  {
    id: 1,
    titulo: 'Mesa Solidária',
    descricao: 'Projeto com o objetivo de gerenciamento e distribuição eficiente de cestas básicas e kits de alimentos essenciais. Nossa logística é desenhada para a triagem e montagem padronizada, garantindo que o sustento chegue com organização às famílias cadastradas, de forma recorrente e segura.',
    imagem: 'src/assets/sobre.jpeg', 
    circuloPos: 'esquerda-atras',
  },
  {
    id: 2,
    titulo: 'Alimento que Não se Perde',
    descricao: 'Atuamos no combate direto ao desperdício através de parcerias estratégicas com supermercados, feiras e produtores de São Paulo. Resgatamos alimentos excedentes que perderam valor comercial, mas mantêm o valor nutricional, reintegrando-os à cadeia de consumo social.',
    imagem: 'src/assets/alimentoquenseperde.jpg',
    circuloPos: 'direita-atras',
  },
  {
    id: 3,
    titulo: 'Mapeamento da Fome',
    descricao: 'Não apenas entregamos, nós monitoramos. Utilizamos um sistema de gestão próprio para realizar o mapeamento geográfico das famílias em situação de vulnerabilidade. Isso nos permite identificar as áreas de maior silêncio da fome e garantir que a ajuda seja estratégica e transparente.',
    imagem: 'src/assets/map.jpeg',
    circuloPos: 'esquerda-atras',
  },
];

const SobreNos = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-white flex items-center justify-center">
        <div className="absolute inset-y-0 left-180 w-1/2 h-full z-10 flex items-end justify-center">
          <img 
            src="src/assets/Página Sobre nós (2).png" 
            alt="Modelo FoodCare"
            className="h-[109%] max-w-none object-contain -mb-14 transform scale-x-[-1]" 
          />
        </div>
        <div className="absolute top-[20%] right-[10%] w-[55vw] h-[55vw] bg-[#f28e1c] rounded-full z-0"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2">
          <div><h1 className="text-6xl md:text-7xl font-black text-black-800 uppercase leading-[0.8] mb-19 tracking-tighter">Quem é<br/>FoodCare?</h1></div>
        </div>
      </section>

      {/* SEÇÃO 2: TEXTO DE INTRODUÇÃO */}
      <section className="bg-white py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            <div className="w-1.5 bg-[#f28e1c] shrink-0 my-2"></div>
            <p className="text-black-700 text-xl md:text-2xl leading-relaxed font-sm">
                A FoodCare é uma organização sem fins lucrativos, estabelecida em São Paulo desde 2024. 
                Em uma metrópole que nunca dorme, ninguém deveria ser parado pela fome. Nossa missão nasceu da 
                percepção de que combater a insegurança alimentar exige mais do que boas intenções: exige gestão 
                estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: O QUE FAZEMOS? */}
      <section className="bg-white py-6 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f28e1c] inline-block px-8 py-3 mb-10 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                O Que Fazemos?
            </h2>
          </div>
          <p className="text-lg md:text-2xl leading-relaxed font-sm">
            Transformamos a intenção de ajudar em um processo logístico estruturado. Por meio de três frentes de ação, conectamos a generosidade de doadores e parceiros à realidade das famílias que mais precisam, utilizando a tecnologia para garantir que ninguém seja esquecido.
          </p>
        </div>
      </section>

      {/* ENCAIXE AQUI: FRENTES DE AÇÃO (ZIG-ZAG) */}
      <section className="bg-white py-24 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {frentesAcao.map((frente, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div key={frente.id} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                {/* Imagem com Forma Orgânica */}
                <div className={`relative ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`absolute ${frente.circuloPos === 'esquerda-atras' ? '-left-[63%]' : '-right-[63%]'} top-[10%] w-[110%] h-[110%] bg-[#f28e1c] rounded-full z-0`}></div>
                  <img src={frente.imagem} alt={frente.titulo} className="relative z-10 w-full rounded-[40px] shadow-2xl object-cover aspect-[4/3]" />
                </div>

                {/* Texto */}
                <div className={`flex flex-col gap-6 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-4xl md:text-5xl font-black  uppercase  tracking-tighter leading-tight">
                    “{frente.titulo}”
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                    {frente.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

            {/* SECTION: IMPACTO (POR TRÁS DA FOODCARE) */}
        <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto text-center">
            
            {/* Título da Seção */}
            <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                Por trás da FoodCare
            </h2>
            <p className="text-xl md:text-2xl font-bold -700 mt-2">
                Há pessoas que fazem tudo acontecer:
            </p>
            </div>

            {/* Grid de Cards de Impacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Colaboradores */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
                <img 
                src="src/assets/iconecolaboradores.png" 
                alt="Colaboradores" 
                className="w-28 h-28 mb-3 object-contain"
                />
                <span className="text-5xl font-black text-[#f28e1c] mb-2">+50</span>
                <span className="text-lg font-bold uppercase tracking-wide">Colaboradores</span>
            </div>

            {/* Voluntários */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
                <img 
                src="src/assets/mãos.png" 
                alt="Voluntários" 
                className="w-28 h-28 mb-3 object-contain"
                />
                <span className="text-5xl font-black text-[#f28e1c] mb-2">+450</span>
                <span className="text-lg font-bold uppercase tracking-wide">Voluntários Ativos</span>
            </div>

            {/* Parceiros */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
                <img 
                src="src/assets/FoodCare (4).png" 
                alt="Parceiros" 
                className="w-24 h-24 mb-6 object-contain"
                />
                <span className="text-5xl font-black text-[#f28e1c] mb-2">+15</span>
                <span className="text-lg font-bold text-gray-800 uppercase tracking-wide">Parceiros Corporativos</span>
            </div>

            </div>
        </div>
        </section>

    </main>
  );
};

export default SobreNos;
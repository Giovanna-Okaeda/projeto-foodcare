import React from 'react';

const InformeSe = () => {
  // Dados fictícios para as notícias
  const noticias = [
    {
      id: 1,
      titulo: 'Voluntários do FoodCare apoiam o projeto "Mesa Solidária"',
      imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
      resumo: 'Parceria leva alimentos frescos e refeições prontas para o centro de São Paulo...'
    },
    {
      id: 2,
      titulo: 'Programa "Alimento que não se perde" é lançado',
      imagem: 'src/assets/foto-programaaqnsp.jpg',
      resumo: 'Iniciativa foca na coleta de alimentos em feiras livres antes do descarte...'
    },
    {
      id: 3,
      titulo: 'Mapeamento da fome: tecnologia a favor da vida',
      imagem: 'src/assets/foto-mdf.jpg',
      resumo: 'Novo sistema ajuda a identificar zonas de sombra onde a ajuda não chegava...'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
        {/* HERO SECTION - INFORME-SE (ALINHADO EM BAIXO) */}
<section className="relative h-[650px] w-full bg-black overflow-hidden flex items-end"> {/* <-- 'flex items-end' aqui */}
  
  {/* Imagem de fundo preenchendo tudo */}
  <img 
    src="src/assets/banner-informese.png" 
    className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
    alt="Banner Informe-se"
  />
  
  {/* CONTAINER DO TEXTO: ALINHADO EM BAIXO */}
  <div className="relative z-10 w-full px-18 max-w-7xl mx-auto pb-20 pointer-events-none"> {/* <-- 'w-full pb-20 pointer-events-none' aqui */}
    <div className="max-w-3xl pointer-events-auto"> {/* <-- Container interno para limitar largura do texto */}
      <h1 className="text-white text-6xl font-black mb-5 uppercase tracking-tighter drop-shadow-xl">
        Informe-se
      </h1>
      <p className="text-white text-2xl font-medium leading-relaxed max-w-2xl drop-shadow-lg opacity-90">
        Acompanhe como a tecnologia e a solidariedade estão transformando São Paulo.
      </p>
    </div>
  </div>
</section>

      {/* ÚLTIMAS AÇÕES */}
<section id="noticias" className="py-24 px-1 max-w-7xl mx-auto">
  <h2 className="text-4xl font-black text-black mb-16 text-left">
    ÚLTIMAS NOTÍCIAS
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
</section>


            {/* SEÇÃO VOZES DA COMUNIDADE - DESIGN REFINADO IGUAL AO LAYOUT */}
      <section className="py-24 px-18 bg-white max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">
            Vozes da Comunidade
          </h2>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            VOZES DA COMUNIDADE: "A FOODCARE TROUXE DIGNIDADE PARA A NOSSA MESA"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* IMAGEM: Ocupando 5 colunas de 12, com bordas arredondadas suaves */}
          <div className="lg:col-span-5">
            <img 
              src="src/assets/Maria-Antonia.jpg" 
              className="rounded-[32px] shadow-sm w-full aspect-square object-cover" 
              alt="Dona Maria sorrindo" 
            />
          </div>

          {/* TEXTO: Ocupando 7 colunas de 12 */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed font-medium">
              <p>
                Nesta semana, visitamos a comunidade de Sapopemba para conversar com Dona Maria, uma das 200 beneficiárias locais. 
                "Antes da FoodCare, a gente dependia de doações esporádicas. Agora, com o aplicativo avisando sobre as entregas, eu consigo me planejar", conta ela.
              </p>
              <p>
                O projeto não entrega apenas alimento; ele devolve o poder de escolha e a previsibilidade. Através do mapeamento da FoodCare, identificamos que a segurança alimentar é o primeiro passo para que as famílias possam focar em outras áreas, como educação e busca por emprego.
              </p>
              
              {/* Citação em destaque */}
              <p className="italic text-gray-900 py-4">
                "Não é só o que vem na cesta, é saber que tem gente usando a inteligência para que a gente não passe fome." diz Dona Maria.
              </p>
            </div>

            {/* BOTÃO LEIA MAIS - IGUAL AO PRINT (BORDA LARANJA E TEXTO LARANJA) */}
            <button className="mt-3 w-full border-2 border-orange-500 text-orange-500 font-bold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-widest text-sm">
              Leia mais
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO SEGURANÇA ALIMENTAR */}
      <section className="py-24 px-18 bg-white max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">
            Segurança Alimentar
          </h2>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            Segurança Alimentar: O que dizem os especialistas em 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* IMAGEM: Ocupando 5 colunas de 12, com bordas arredondadas suaves */}
          <div className="lg:col-span-5">
            <img 
              src="src/assets/caminhão.jpeg" 
              className="rounded-[32px] shadow-sm w-full aspect-square object-cover" 
              alt="Dona Maria sorrindo" 
            />
          </div>

          {/* TEXTO: Ocupando 7 colunas de 12 */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed font-medium">
              <p>
                Em um simpósio realizado este mês em São Paulo, especialistas em nutrição e logística discutiram o futuro da distribuição de alimentos. O grande consenso? O desperdício zero é uma meta tecnológica, não apenas de vontade política.
              </p>
              <p>
                O Dr. Ricardo Menezes, especialista em agronegócio, destacou como a FoodCare utiliza o algoritmo do sistema Mesa Solidária para prever picos de excedente em mercados locais. "O modelo de 2026 exige agilidade. Se o alimento sai do mercado e chega à mesa em menos de 12 horas, as propriedades nutricionais são preservadas. É nisso que a FoodCare está liderando."
              </p>
              <p>
                A notícia reforça a importância de tratarmos a fome como um problema de logística e dados, e não apenas de falta de recursos.
              </p>
            </div>
            <button className="mt-3 w-full border-2 border-orange-500 text-orange-500 font-bold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-widest text-sm">
              Leia mais
            </button>
          </div>
        </div>
      </section>
      {/* SEÇÃO SEGURANÇA ALIMENTAR */}
      <section className="py-24 px-18 bg-white max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">
            Bastidores da Triagem
          </h2>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            Bastidores: Como funciona nossa triagem de alimentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* IMAGEM: Ocupando 5 colunas de 12, com bordas arredondadas suaves */}
          <div className="lg:col-span-5">
            <img 
              src="src/assets/cestas.jpg" 
              className="rounded-[32px] shadow-sm w-full aspect-square object-cover" 
              alt="Dona Maria sorrindo" 
            />
          </div>

          {/* TEXTO: Ocupando 7 colunas de 12 */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed font-medium">
              <p>
                Você já se perguntou o que acontece entre o caminhão de coleta e a entrega final? Nossa central de triagem é o coração da operação.
              </p>
              <p>
                Cada item resgatado passa por um rigoroso controle de qualidade:
                Inspeção Visual: Nossos voluntários verificam a integridade das embalagens e o estado de frescor de frutas e legumes.
                Catalogação Digital: O produto é inserido no sistema, gerando dados sobre o tipo de alimento disponível para cada região.
                Montagem Inteligente: Não entregamos cestas genéricas. Baseado nos dados demográficos da comunidade, equilibramos proteínas, carboidratos e fibras.
              </p>
              <p>
                "Nossa triagem garante que o alimento 'fora do padrão' de venda seja, na verdade, um alimento de padrão 'ouro' para o consumo", explica a equipe de operações.
              </p>
            </div>
            <button className="mt-3 w-full border-2 border-orange-500 text-orange-500 font-bold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-widest text-sm">
              Leia mais
            </button>
          </div>
        </div>
      </section>

            {/* NEWSLETTER - IGUAL AO MODELO COM FOTO DE FUNDO */}
      <section className="relative py-24 w-full overflow-hidden">
        {/* Imagem de fundo com overlay para dar leitura ao texto */}
        <img 
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Fundo Newsletter"
        />
        <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-18">
          <div className="max-w-2xl">
            <h2 className="text-white text-5xl font-black mb-2 uppercase  tracking-tighter drop-shadow-md">
              Fique por dentro de tudo!
            </h2>
            <p className="text-white text-sm font-bold uppercase tracking-widest mb-10 drop-shadow-md">
              RECEBA ALERTAS DE AÇÕES E NOVOS CONTEÚDOS NO SEU EMAIL.
            </p>

            {/* Container do Formulário */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <input 
                  type="email" 
                  placeholder="Insira seu e-mail" 
                  className="w-full px-6 py-4 bg-white text-gray-800 rounded-lg outline-none text-lg shadow-xl"
                />
              </div>
              <button className="bg-[#f28e1c] hover:bg-orange-600 text-white font-black px-12 py-4 rounded-lg transition-all shadow-xl uppercase tracking-widest">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformeSe;
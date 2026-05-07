import React from 'react';

const ComoAjudar = () => {
  return (
    <div className="bg-white min-h-screen">
        {/* HERO SECTION - EFEITO PARALLAX COM MODELO SUBINDO */}
    <section className="relative h-[85vh] min-h-[650px] w-full overflow-hidden flex items-center justify-center">
      
      {/* IMAGEM DE FUNDO FIXA (Parallax) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ 
          backgroundImage: "url('src/assets/Página Como Ajudar (1).png')", // Coloque o caminho da sua imagem aqui
        }}
      >
      </div>

      {/* CONTAINER DA MODELO (Ela NÃO é fixa, então sobe com o scroll) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full">
        <img 
          src="src/assets/FoodCare (2).png" 
          alt="Você pode fazer a diferença!" 
          className="
            absolute 
            -bottom-34 
            right-[5%] 
            max-w-none 
            h-[120%] 
            object-contain 
            z-30 
            transition-all duration-500
          " 
        />
      </div>
    </section>

      {/* SEÇÃO 1: PESSOA FÍSICA */}
      <section className="py-20 px-18 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Para você (Pessoa Física)</p>
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Faça a diferença como indivíduo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card Voluntariado */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-[30px] p-10 flex flex-col items-center text-center ">
            <img src="src/assets/mãos.png" className="w-27 mb-9" alt="Ícone" />
            <h3 className="text-xl font-black uppercase mb-4">Faça parte do voluntariado</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">Doe seu tempo e suas habilidades para transformar vidas. Precisamos de mãos amigas para a triagem de alimentos, montagem de kits e apoio logístico nas entregas às comunidades mapeadas.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwe0M0-zc3JNIluxA-toZtZ-f2wIDKWGYZSTjIbr1JctRTzQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#f28e1c] text-[#f28e1c] font-black py-4 rounded-xl hover:bg-[#f28e1c] hover:text-white transition-all uppercase tracking-widest text-sm inline-block text-center">Quero ser voluntário</a>
          </div>

          {/* Card PIX - Versão Prática e Funcional */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-[30px] p-10 flex flex-col items-center text-center">
            <img src="src/assets/pix.png" className="w-32 mb-6" alt="Ícone PIX" />
            <h3 className="text-xl font-black uppercase mb-4 text-gray-800">Apoio Financeiro (PIX)</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Sua doação mantém nossa tecnologia ativa e nossa logística nas ruas. Cada centavo financia o combustível das entregas e a plataforma Mesa Solidária.</p>
            <button onClick={() => {
                navigator.clipboard.writeText("contato@foodcare.org.br");
                alert("Chave PIX (E-mail) copiada com sucesso! 🧡");
              }}
              className="w-full border-2 border-[#f28e1c] text-[#f28e1c] font-black py-4 rounded-xl mt-8 hover:bg-[#f28e1c] hover:text-white transition-all uppercase tracking-widest text-sm active:scale-95">Copiar Chave PIX</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: MERCADOS E FEIRAS */}
      <section className="py-20 px-18 max-w-7xl mx-auto border-t border-gray-100">
        <div className="mb-12 text-right">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Para mercados e feiras</p>
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Combate ao desperdício na fonte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card Doar Excedente */}
          <div className="flex flex-col">
             <img src="src/assets/mercado.png" className="w-full h-64 object-cover rounded-3xl mb-6 shadow-lg" alt="Social" />
             <h3 className="text-xl font-black uppercase mb-3">DOAR MEU EXCEDENTE</h3>
             <p className="text-gray-600 mb-6">Evite o desperdício em seu estabelecimento. Se você possui alimentos próximos à data de validade ou fora do padrão comercial, mas próprios para consumo, nós cuidamos da retirada e da distribuição segura.</p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeb261aP3RiAnA2shm7RUBtlgaNIMqaXLhlRDq1u0ljX3EahA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#f28e1c] text-[#f28e1c] font-black py-4 rounded-xl hover:bg-[#f28e1c] hover:text-white transition-all uppercase tracking-widest text-sm inline-block text-center">Solicitar Coleta</a>
          </div>

          {/* Card Ponto de Coleta */}
          <div className="flex flex-col">
             <img src="src/assets/pontodecol.png" className="w-full h-64 object-cover rounded-3xl mb-6 shadow-lg" alt="Social" />
             <h3 className="text-xl font-black uppercase mb-3">SER UM PONTO DE COLETA</h3>
             <p className="text-gray-600 mb-6">Transforme seu comércio em um elo de solidariedade. Disponibilize um espaço para que seus clientes possam depositar doações de alimentos não perecíveis. Nós gerenciamos o recolhimento periódico.</p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtBFmDpQ35ye9vohwVLaa_ffJcgtHVmbef79SYxFVHx7nonQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#f28e1c] text-[#f28e1c] font-black py-4 rounded-xl hover:bg-[#f28e1c] hover:text-white transition-all uppercase tracking-widest text-sm inline-block text-center">Cadastrar Local</a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CORPORATIVO */}
      <section className="py-20 px-18 max-w-7xl mx-auto border-t border-gray-100 mb-20">
        <div className="mb-12">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Para empresas e corporativas</p>
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Parcerias estratégicas e ESG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Investimento */}
          <div className="flex flex-col">
             <img src="src/assets/parceiro.png" className="w-full h-64 object-cover rounded-3xl mb-6 shadow-lg" alt="ESG" />
             <h3 className="text-xl font-black uppercase mb-3">Investimento e Impacto</h3>
             <p className="text-gray-600 mb-6">Sua empresa pode patrocinar o desenvolvimento da nossa plataforma ou financiar a expansão da nossa frota logística. Ajude a FoodCare a levar tecnologia de ponta para o combate à fome em novas regiões.</p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLScnyKd1RmX3kEnVUY_6mLMZrbt73smabdpgvxL-wKgUkiOjtQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#f28e1c] text-[#f28e1c] font-black py-4 rounded-xl hover:bg-[#f28e1c] hover:text-white transition-all uppercase tracking-widest text-sm inline-block text-center">Seja um Patrocinador</a>
          </div>

          {/* Responsabilidade Social */}
          <div className="flex flex-col">
             <img src="src/assets/o-que-é-esg.jpeg" className="w-full h-64 object-cover rounded-3xl mb-6 shadow-lg" alt="Social" />
             <h3 className="text-xl font-black uppercase mb-3">Responsabilidade Social</h3>
             <p className="text-gray-600 mb-6">Desenvolvemos projetos conjuntos que se alinham às metas de ESG da sua companhia. Desde o apadrinhamento de comunidades até programas de voluntariado corporativo para seus colaboradores.</p>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLScnyKd1RmX3kEnVUY_6mLMZrbt73smabdpgvxL-wKgUkiOjtQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#f28e1c] text-[#f28e1c] font-black py-4 rounded-xl hover:bg-[#f28e1c] hover:text-white transition-all uppercase tracking-widest text-sm inline-block text-center">Falar com a Gestão</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoAjudar;
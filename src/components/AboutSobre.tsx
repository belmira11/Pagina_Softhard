import Image from 'next/image'; 
import { Settings, Headset, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full px-6 sm:px-10 md:px-[90px] py-[50px] bg-gray-300"
    >
      {/* Cabeçalho da seção */}
      <div className="w-full flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-4">
          <p className="font-primary font-semibold text-sm text-primary uppercase">SOBRE</p>
          <div className="flex-1 max-w-[180px] h-[1px] bg-primary" />
        </div>
        <p className="font-primary font-bold text-xl md:text-2xl text-black text-left">SAIBA MAIS SOBRE NÓS</p>
      </div>

      {/* Container com imagem e texto */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Imagem */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[765px] rounded-[15px] overflow-hidden shadow-md">
          <Image
            src="/1747636898591.jpeg"
            alt="Sobre nós"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute bottom-6 right-4 w-[160px] sm:w-[180px] lg:w-[220px] h-[70px] sm:h-[75px] lg:h-[80px] bg-primary rounded-[15px] p-2 flex flex-col justify-center items-end shadow-lg">
            <p className="text-2xl lg:text-3xl font-primary font-bold text-white text-right">+5</p>
            <p className="text-xs lg:text-sm font-primary font-medium text-white text-right">ANOS DE EXPERIÊNCIA</p>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center gap-4">
          <p className="font-primary font-bold text-lg md:text-xl text-black">
            Elevando o desempenho dos negócios por meio da inovação & tecnologia
          </p>
          <p className="font-primary font-medium text-sm text-text-semi-muted">
            Nós nos concentramos na elaboração de estratégias sob medida que naveguem pela complexidade e forneçam resultados tangíveis para nossos clientes.
          </p>
          <p className="font-primary font-medium text-sm text-black">
            Por meio de uma combinação de análises sofisticadas e solução criativa de problemas, capacitamos as organizações a prosperar em mercados em rápida evolução.
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 p-4 bg-white/80 rounded-xl shadow">
              <Settings className="w-6 h-6 text-primary" strokeWidth={2} />
              <p className="font-primary font-semibold text-base mt-2 text-black">Solução Sob Medida</p>
              <p className="font-primary font-medium text-sm mt-1 text-black">
                Adotamos metodologias inovadoras para desenvolver estratégias exclusivas que impulsionam o sucesso duradouro.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-4 bg-white/80 rounded-xl shadow">
              <Headset className="w-6 h-6 text-primary" strokeWidth={2} />
              <p className="font-primary font-semibold text-base mt-2 text-black">Suporte Dedicado</p>
              <p className="font-primary font-medium text-sm mt-1 text-text-semi-muted">
                Disponibilizamos suporte técnico contínuo, pronto para resolver qualquer questão com rapidez e precisão.
              </p>
            </div>
          </div>

          {/* Botão */}
          <div className="btn-primary w-full sm:w-[200px] h-[45px] mt-4 flex items-center justify-between px-4 py-2 bg-primary rounded-lg text-white cursor-pointer hover:bg-orange-700 transition-all">
            <p className="font-primary font-semibold text-sm">EXPLORE OS SERVIÇOS.</p>
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

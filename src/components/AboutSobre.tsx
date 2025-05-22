import Image from 'next/image';
import { Settings, Headset, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-[90px] pt-[50px] pb-[50px] flex flex-col gap-[15px] bg-gray-300"
    >
      {/* Cabeçalho da seção */}
      <div className="w-full max-w-[1548px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[15px]">
          <p className="font-['Poppins'] font-semibold text-[18px] leading-[100%] text-black">SOBRE</p>
          <div className="flex-1 max-w-[242px] h-[1px] bg-[#FF6100]" />
        </div>

        <p className="font-['Poppins'] font-semibold text-[22px] sm:text-[26px] leading-[100%] text-black">
          SAIBA MAIS SOBRE NÓS
        </p>
      </div>

      {/* Container principal com imagem e texto */}
      <div className="flex flex-col lg:flex-row gap-[15px] items-end">
        {/* Imagem */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[759px] rounded-[15px] overflow-hidden shadow-md">
          <Image
            src="/1747636898591.jpeg"
            alt="Sobre nós"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute bottom-[60px] right-[10px] w-[220px] sm:w-[286px] h-[100px] sm:h-[121px] bg-[#FF6100] rounded-[15px] p-[10px] flex flex-col justify-center items-end shadow-lg">
            <p className="text-[32px] sm:text-[40px] font-['Poppins'] font-bold leading-[100%] text-white text-right">+5</p>
            <p className="text-[16px] sm:text-[20px] font-['Poppins'] font-medium leading-[100%] text-white text-right">
              ANOS DE EXPERIÊNCIA
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 h-[759px] flex flex-col justify-center gap-[10px] p-[15px]">
          <p className="w-full font-['Poppins'] font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[100%] text-black flex items-center">
            Elevando o desempenho dos negócios por meio da inovação & tecnologia
          </p>
          <p className="w-full font-['Poppins'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[100%] text-[#000000CC] flex items-center">
            Nós nos concentramos na elaboração de estratégias sob medida que naveguem pela complexidade e forneçam resultados tangíveis para nossos clientes.
          </p>
          <p className="w-full font-['Poppins'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[100%] text-black flex items-center">
            Por meio de uma combinação de análises sofisticadas e solução criativa de problemas, capacitamos as organizações a prosperar em mercados em rápida evolução.
          </p>

          {/* Cards informativos */}
          <div className="w-full flex flex-col sm:flex-row justify-between gap-[15px] mt-[10px]">
            {/* Card 1 */}
            <div className="w-full sm:w-[48%] rounded-[15px] p-[15px] flex flex-col gap-[10px] bg-white">
              <Settings className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />
              <p className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] leading-[100%] text-black">
                Solução Sob Medida
              </p>
              <p className="font-['Poppins'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[130%] text-black">
                Adotamos metodologias inovadoras para desenvolver estratégias exclusivas que impulsionam o sucesso duradouro.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[48%] rounded-[15px] p-[15px] flex flex-col gap-[10px] bg-white">
              <Headset className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />
              <p className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] leading-[100%] text-black">
                Suporte Dedicado
              </p>
              <p className="font-['Poppins'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[130%] text-[#000000CC]">
                Disponibilizamos suporte técnico contínuo, pronto para resolver qualquer questão com rapidez e precisão.
              </p>
            </div>
          </div>

          {/* Botão */}
          <div className="w-full max-w-[261px] h-[60px] mt-[10px] bg-[#FF6100] rounded-full px-[10px] py-[7px] flex items-center justify-between gap-[10px] ">
            <p className="font-['Poppins'] font-semibold text-[13px] sm:text-[16px] leading-[100%] text-white ">
              EXPLORE OS SERVIÇOS
            </p>
            <ArrowRight className="w-[32px] h-[32px] text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

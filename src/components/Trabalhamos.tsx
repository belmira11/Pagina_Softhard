// components/HowWeWorkSection.tsx
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function HowWeWorkSection() {
  return (
    <section className="w-full max-w-[1728px] mx-auto bg-gradient-to-br from-[#F8EDED] to-[#F0E5E5] px-6 md:px-[90px] py-[60px] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-bl from-[#FF6100]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-tr from-[#FF6100]/3 to-transparent rounded-full blur-2xl"></div>
      
      <div className="flex flex-col md:flex-row gap-[40px] md:gap-[50px] items-start relative z-10">
        
        {/* Lado esquerdo - Conteúdo */}
        <div className="w-full md:w-[60%] max-w-[588px] flex flex-col">
          {/* Conteúdo superior agrupado */}
          <div>
            {/* Badge "NÃO PERCA" */}
            <div className="mb-[12px]">
              <div className="inline-flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-[20px] px-[18px] py-[8px] shadow-sm border border-white/20">
                <span className="text-[#FF6100] text-[14px] md:text-[16px] font-bold font-poppins tracking-wide">
                  NÃO PERCA
                </span>
              </div>
            </div>

            {/* Título Principal */}
            <h2 className="text-[22px] md:text-[28px] font-bold uppercase text-black leading-[1.2] font-poppins mb-[12px] bg-gradient-to-r from-black to-gray-700 bg-clip-text">
              Revolucione sua experiência digital hoje
            </h2>

            {/* Descrição */}
            <p className="text-[16px] md:text-[18px] font-medium leading-[1.5] text-[#000000CC] font-poppins mb-[20px]">
              A Strategia acelera o crescimento do seu negócio por meio de soluções inovadoras e tecnologia de ponta. Junte-se a milhares de clientes satisfeitos que transformaram suas operações.
            </p>

            {/* Cards de benefícios */}
            <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center">
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[12px] px-[16px] py-[12px] flex items-center gap-[10px] h-[50px] shadow-sm border border-white/30 hover:shadow-md hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-[20px] h-[20px] text-[#FF6100] flex-shrink-0" />
                <span className="text-[#FF6100] text-[14px] font-semibold font-poppins whitespace-nowrap">
                  Atendimento 24/7h
                </span>
              </div>
              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[12px] px-[16px] py-[12px] flex items-center gap-[10px] h-[50px] shadow-sm border border-white/30 hover:shadow-md hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-[20px] h-[20px] text-[#FF6100] flex-shrink-0" />
                <span className="text-[#FF6100] text-[14px] font-semibold font-poppins whitespace-nowrap">
                  Suporte Premium
                </span>
              </div>
              {/* Card 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[12px] px-[16px] py-[12px] flex items-center gap-[10px] h-[50px] shadow-sm border border-white/30 hover:shadow-md hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-[20px] h-[20px] text-[#FF6100] flex-shrink-0" />
                <span className="text-[#FF6100] text-[14px] font-semibold font-poppins whitespace-nowrap">
                  Prontidão para começar
                </span>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="mt-[16px] self-start">
            <button className="bg-gradient-to-r from-[#FF6100] to-[#E55100] hover:from-[#E55100] hover:to-[#D84315] transition-all duration-300 rounded-[12px] px-[24px] py-[14px] md:py-[16px] text-white text-[15px] md:text-[16px] font-semibold font-poppins shadow-lg hover:shadow-xl hover:scale-105 transform">
              Marcar Consulta Gratuita
            </button>
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="w-full md:w-[40%] flex items-center justify-center">
          <div className="relative w-full max-w-[450px] h-[260px] md:h-[280px] rounded-[20px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6100]/10 to-transparent z-10"></div>
            <Image
              src="/d6a21061285a64f8b6066daaf130c725e0b817ca.jpg"
              alt="Como Trabalhamos - Equipe Strategia"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

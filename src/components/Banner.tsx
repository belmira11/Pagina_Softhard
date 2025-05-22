import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Imagem de fundo */}
      <Image
        src="/fundo-top.jpg"
        alt="Imagem de fundo"
        fill
        priority
        className="object-cover -z-0"
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-[90px] pt-[60px] pb-[20px] flex flex-col lg:flex-row gap-10">
        {/* Seção de Informação */}
        <div className="w-full lg:w-[769px] flex flex-col justify-center p-2 text-center lg:text-left">
          <p className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] text-black mx-auto lg:mx-0">
            NOSSA AGÊNCIA
          </p>
          <h2 className="font-['Poppins'] font-bold text-[28px] sm:text-[36px] text-black mt-2 leading-snug">
            MARKETING &<br />PUBLICIDADE
          </h2>

          <div className="w-full max-w-[524px] h-[1px] bg-black my-4 mx-auto lg:mx-0"></div>

          <p className="font-['Poppins'] font-medium text-[16px] sm:text-[20px] text-black leading-relaxed">
            Descubra estratégias inovadoras para uma comunicação visual impactante.
            Transformamos ideias em realidades atraentes, garantindo que sua marca se
            destaque em um mercado lotado. Nossa equipe dedicada aproveita técnicas de
            ponta para fornecer resultados excepcionais que ressoam com seu público.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="w-[230px] sm:w-[261px] h-[54px] sm:h-[60px] rounded-full border-[2px] border-[#FF6100] px-[10px] py-[7px] flex items-center justify-center gap-[10px] bg-white hover:bg-orange-100 transition">
              <span className="font-['Poppins'] font-semibold text-[16px] text-black">
                EXPLORE OS SERVIÇOS
              </span>
              <ArrowRight className="w-[28px] h-[28px] text-black" />
            </button>
          </div>
        </div>

        {/* Seção da Imagem */}
        <div className="w-full lg:w-[769px] flex justify-center relative p-2">
          <div className="relative w-[90%] max-w-[609px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[609px] shadow-[0_4px_4px_#00000040]">
            <Image
              src="/abstract-1.png"
              alt="Arte abstrata colorida"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Box de clientes satisfeitos */}
          <div className="absolute bottom-18 right-4 sm:bottom-22 sm:right-6 w-[200px] sm:w-[241px] h-[110px] sm:h-[128px] px-[16px] py-[16px] bg-[rgba(31,41,55,0.7)] text-white rounded-[15px] border border-[#E1E1E1] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-[20px] flex flex-col items-center text-center">
            <p className="font-['Poppins'] font-bold text-[32px] sm:text-[40px] leading-[100%] text-white">
              + de 115
            </p>
            <p className="font-['Poppins'] font-medium text-[16px] sm:text-[20px] leading-[100%] text-white">
              Clientes Satisfeitos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

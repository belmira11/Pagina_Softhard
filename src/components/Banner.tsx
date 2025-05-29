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
        <div className="w-full lg:w-[769px] flex flex-col justify-center p-2 text-center lg:text-left space-y-3">
          <p className="font-[var(--font-family-primary)] font-semibold text-[var(--font-size-base)] sm:text-[var(--font-size-lg)] text-[var(--color-black)]">
            NOSSA AGÊNCIA
          </p>
          <h2 className="font-[var(--font-family-primary)] font-bold text-[var(--font-size-3xl)] sm:text-[var(--font-size-5xl)] text-[var(--color-black)] leading-tight">
            MARKETING &<br />PUBLICIDADE
          </h2>

          <div className="w-full max-w-[524px] h-[1px] bg-[var(--color-black)] my-2 mx-auto lg:mx-0"></div>

          <p className="font-[var(--font-family-primary)] font-medium text-[var(--font-size-sm)] sm:text-[var(--font-size-lg)] text-[var(--color-black)] leading-relaxed">
            Descubra estratégias inovadoras para uma comunicação visual impactante.
            Transformamos ideias em realidades atraentes, garantindo que sua marca se
            destaque em um mercado lotado. Nossa equipe dedicada aproveita técnicas de
            ponta para fornecer resultados excepcionais que ressoam com seu público.
          </p>

          <div className="mt-2 flex justify-center lg:justify-start">
            <button className="btn-outline w-[230px] sm:w-[261px] h-[var(--button-height-md)] sm:h-[var(--button-height-lg)]">
              <span className="font-[var(--font-family-primary)] font-semibold text-[var(--font-size-sm)] text-[var(--color-black)]">
                EXPLORE OS SERVIÇOS
              </span>
              <ArrowRight className="w-[var(--icon-size-md)] h-[var(--icon-size-md)] text-[var(--color-black)]" />
            </button>
          </div>
        </div>

        {/* Seção da Imagem */}
        <div className="w-full lg:w-[769px] flex justify-center relative p-2">
          <div className="relative w-[90%] max-w-[609px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[609px] shadow-[var(--shadow-sm)]">
            <Image
              src="/abstract-1.png"
              alt="Arte abstrata colorida"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Box de clientes satisfeitos */}
          <div className="absolute top-[60%] md:top-[50%] right-4 sm:right-6 w-[200px] sm:w-[241px] h-[100px] sm:h-[128px] p-[15px] sm:p-[19px] bg-[var(--color-overlay)] text-[var(--color-white)] rounded-[10px] sm:rounded-[15px] border border-[#E1E1E1] shadow-[var(--shadow-md)] backdrop-blur-[20px] flex flex-col items-center justify-center text-center gap-2">
            <p className="font-[var(--font-family-primary)] font-bold text-[26px] sm:text-[32px] md:text-[36px] leading-[100%] text-[var(--color-white)]">
              + de 115
            </p>
            <p className="font-[var(--font-family-primary)] font-medium text-[14px] sm:text-[16px] leading-[100%] text-[var(--color-white)]">
              Clientes Satisfeitos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/fundo-top.jpg"
        alt="Imagem de fundo"
        fill
        priority
        className="object-cover -z-0"
      />

      <div className="relative z-10 max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-[90px] pt-16 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-[750px] flex flex-col justify-center p-2 text-center lg:text-left space-y-2">
          <p className="font-[var(--font-family-primary)] font-semibold text-[13px] sm:text-[14px] text-[var(--color-black)] tracking-wide uppercase">
            Nossa Agência
          </p>

          <h2 className="font-[var(--font-family-primary)] font-bold text-[20px] sm:text-[32px] text-[var(--color-black)] leading-tight">
            Marketing &<br /> Publicidade
          </h2>

          <div className="w-[90%] max-w-[524px] h-[2px] bg-[var(--color-black)] my-2 mx-auto lg:mx-0"></div>

          <p className="font-[var(--font-family-primary)] font-medium text-[12px] sm:text-[13px] text-[var(--color-black)] leading-relaxed max-w-[600px] mx-auto lg:mx-0">
            Descubra estratégias inovadoras para uma comunicação visual impactante. Transformamos ideias em realidades atraentes, garantindo que sua marca se destaque em um mercado competitivo. Nossa equipe dedicada utiliza técnicas de ponta para entregar resultados excepcionais.
          </p>

          <div className="pt-2 flex justify-center lg:justify-start">
            <a href="#servicos" className="scroll-smooth">
              <button className="btn-outline w-[230px] sm:w-[261px] h-[var(--button-height-md)] sm:h-[var(--button-height-lg)] flex items-center justify-center gap-2 border-2 border-[#FF6100] rounded-full px-6 py-3 hover:bg-orange-100 transition">
                <span className="font-[var(--font-family-primary)] font-semibold text-[11px] sm:text-[13px] text-[var(--color-black)]">
                  Explore os Serviços
                </span>
                <ArrowRight className="w-[var(--icon-size-md)] h-[var(--icon-size-md)] text-[var(--color-black)]" />
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[750px] flex justify-center relative p-2">
          <div className="relative w-[90%] max-w-[609px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[609px] shadow-[var(--shadow-sm)]">
            <Image
              src="/abstract-1.png"
              alt="Arte abstrata colorida"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          <div className="absolute top-[70%] md:top-[65%] right-4 sm:right-6 w-[200px] sm:w-[241px] h-[100px] sm:h-[128px] p-[15px] sm:p-[19px] bg-[var(--color-overlay)] text-[var(--color-white)] rounded-[12px] border border-[#E1E1E1] shadow-[var(--shadow-md)] backdrop-blur-[20px] flex flex-col items-center justify-center text-center gap-2">
            <p className="font-[var(--font-family-primary)] font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-none">
              + de 115
            </p>
            <p className="font-[var(--font-family-primary)] font-medium text-[11px] sm:text-[12px] leading-none">
              Clientes Satisfeitos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

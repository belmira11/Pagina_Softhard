import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full max-w-[1728px] mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-6 py-10">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/fundo-top.jpg"
          alt="Imagem de fundo"
          fill
          priority
          className="object-cover object-center w-full h-full"
          style={{ zIndex: 0 }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Seção de texto */}
        <div className="w-full max-w-[769px] flex flex-col justify-center text-left space-y-4">
          <p className="font-primary font-semibold text-sm text-[var(--color-black)] tracking-wide uppercase">
            Nossa Agência
          </p>

          <h2 className="font-primary font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-black)] leading-tight">
            Marketing &<br /> Publicidade.
          </h2>

          <div className="w-full max-w-[524px] h-[2px] bg-[var(--color-black)] my-2"></div>

          <p className="font-primary font-medium text-base sm:text-lg text-[var(--color-black)] leading-relaxed max-w-[600px]">
            Descubra estratégias inovadoras para uma comunicação visual impactante. Transformamos ideias em realidades atraentes, garantindo que sua marca se destaque em um mercado competitivo. Nossa equipe dedicada utiliza técnicas de ponta para entregar resultados excepcionais.
          </p>

          <div className="pt-2">
            <a href="#servicos" className="scroll-smooth">
              <button className="btn-outline w-full sm:w-[261px] h-[48px] sm:h-[var(--button-height-lg)] flex items-center justify-center gap-2 border-2 border-primary rounded-full px-6 py-3 hover:bg-orange-100 transition">
                <span className="font-primary font-semibold text-sm sm:text-base text-[var(--color-black)]">
                  Explore os Serviços
                </span>
                <ArrowRight className="w-5 h-5 text-[var(--color-black)]" />
              </button>
            </a>
          </div>
        </div>

        {/* Imagem com destaque */}
        <div className="w-full max-w-[769px] flex justify-center items-center relative px-2">
          <div className="relative w-full max-w-[609px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[609px] shadow-sm">
            <Image
              src="/abstract-1.png"
              alt="Arte abstrata colorida"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Card flutuante */}
          <div
            className="absolute bottom-4 right-4 sm:right-6 w-[180px] sm:w-[220px] md:w-[241px] h-[100px] sm:h-[128px] p-4 sm:p-5 text-white rounded-xl border border-[#E1E1E1] shadow-md backdrop-blur-[20px] flex flex-col items-center justify-center text-center gap-2"
            style={{ backgroundColor: '#06040280' }}
          >
            <p className="font-primary font-bold text-xl sm:text-3xl md:text-4xl leading-none">
              + de 115
            </p>
            <p className="font-primary font-medium text-xs sm:text-sm leading-none">
              Clientes Satisfeitos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

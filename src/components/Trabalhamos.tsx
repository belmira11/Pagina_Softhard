import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function HowWeWorkSection() {
  return (
    <section className="w-full max-w-[1728px] mx-auto bg-gradient-to-br from-[var(--color-border)] to-[#F0E5E5] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Lado esquerdo - Conteúdo */}
        <div className="w-full lg:w-[55%] flex flex-col gap-4">
          <div className="inline-flex items-center bg-white rounded-md px-2 py-1 border border-white/20 w-fit">
            <span className="text-[var(--color-primary)] text-[10px] font-bold">
              NÃO PERCA
            </span>
          </div>

          <h2 className="text-base lg:text-xl font-bold text-[var(--color-black)] leading-tight">
            Revolucione sua experiência digital hoje
          </h2>

          <p className="text-xs text-[var(--text-semi-muted)] leading-relaxed">
            A Strategia acelera o crescimento do seu negócio por meio de soluções inovadoras e tecnologia de ponta.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Atendimento 24/7h",
              "Suporte Premium",
              "Prontidão para começar.",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 bg-white rounded-md px-2 py-1 border border-white/30"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] text-[9px] font-semibold whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-[var(--color-primary)] to-[#E55100] hover:from-[#E55100] hover:to-[#D84315] px-3 py-1.5 text-[10px] font-semibold rounded-full transition-all w-fit mt-2 text-white">
            Marcar Consulta Gratuita
          </button>
        </div>

        {/* Lado direito - Imagem */}
        <div className="w-full lg:w-[45%]">
          <div className="relative w-full h-[240px] rounded-lg overflow-hidden">
            <Image
              src="/fff.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

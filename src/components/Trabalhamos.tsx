// components/HowWeWorkSection.tsx
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

// Importando a imagem diretamente
import imagemTrabalho from '../../../public/fff.jpg';

export default function HowWeWorkSection() {
  return (
    <section className="w-full max-w-[1728px] mx-auto bg-gradient-to-br from-[var(--color-border)] to-[#F0E5E5] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Lado esquerdo - Conteúdo */}
        <div className="w-full lg:w-[55%] flex flex-col gap-4">
          {/* Badge "NÃO PERCA" */}
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-white/20 w-fit">
            <span className="text-[var(--color-primary)] text-xs font-bold">
              NÃO PERCA
            </span>
          </div>

          {/* Título Principal */}
          <h2 className="text-xl lg:text-3xl font-bold text-[var(--color-black)] leading-tight">
            Revolucione sua experiência digital hoje
          </h2>

          {/* Descrição */}
          <p className="text-sm lg:text-base text-[var(--text-semi-muted)] leading-relaxed">
            A Strategia acelera o crescimento do seu negócio por meio de soluções inovadoras e tecnologia de ponta.
          </p>

          {/* Cards de benefícios */}
          <div className="flex flex-wrap gap-2">
            {/* Card 1 */}
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-white/30">
              <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--color-primary)] text-xs font-semibold whitespace-nowrap">
                Atendimento 24/7h
              </span>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-white/30">
              <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--color-primary)] text-xs font-semibold whitespace-nowrap">
                Suporte Premium
              </span>
            </div>
            {/* Card 3 */}
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-white/30">
              <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--color-primary)] text-xs font-semibold whitespace-nowrap">
                Prontidão para começar
              </span>
            </div>
          </div>

          {/* Botão CTA */}
          <button className="btn-primary bg-gradient-to-r from-[var(--color-primary)] to-[#E55100] hover:from-[#E55100] hover:to-[#D84315] px-4 py-2 text-xs lg:text-sm font-semibold rounded-lg shadow-md hover:scale-105 transition-all w-fit mt-2">
            Marcar Consulta Gratuita
          </button>
        </div>

        {/* Lado direito - Imagem */}
        <div className="w-full lg:w-[45%]">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent z-10"></div>
            <Image
              src="/fff.jpg"
              alt="Como Trabalhamos - Equipe Strategia"
              width={800}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

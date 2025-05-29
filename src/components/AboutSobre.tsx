import Image from 'next/image';
import { Settings, Headset, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-[90px] pt-[50px] pb-[50px] flex flex-col gap-[15px] bg-[#D1D5DB]"
    >
      {/* Cabeçalho da seção */}
      <div className="w-full max-w-[1548px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[15px]">
          <p className="font-[var(--font-family-primary)] font-semibold text-[var(--font-size-base)] leading-[100%] text-[var(--color-black)]">
            SOBRE
          </p>
          <div className="flex-1 max-w-[242px] h-[1px] bg-[var(--color-primary)]" />
        </div>

        <p className="font-[var(--font-family-primary)] font-semibold text-[var(--font-size-xl)] sm:text-[var(--font-size-2xl)] leading-[100%] text-[var(--color-black)]">
          SAIBA MAIS SOBRE NÓS
        </p>
      </div>

      {/* Container principal com imagem e texto */}
      <div className="flex flex-col lg:flex-row gap-[15px] items-start">
        {/* Imagem */}
        <div className="relative w-full lg:w-[55%] h-[400px] sm:h-[500px] lg:h-[700px] rounded-[var(--radius-15)] overflow-hidden shadow-[var(--shadow-md)]">
          <Image
            src="/1747636898591.jpeg"
            alt="Sobre nós"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute bottom-[60px] right-[10px] w-[200px] sm:w-[260px] h-[90px] sm:h-[110px] bg-[var(--color-primary)] rounded-[var(--radius-15)] p-[10px] flex flex-col justify-center items-end shadow-[var(--shadow-lg)]">
            <p className="text-[28px] sm:text-[32px] font-[var(--font-family-primary)] font-bold leading-[100%] text-[var(--color-white)] text-right">+5</p>
            <p className="text-[14px] sm:text-[16px] font-[var(--font-family-primary)] font-medium leading-[100%] text-[var(--color-white)] text-right">
              ANOS DE EXPERIÊNCIA
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full lg:w-[45%] h-[700px] flex flex-col justify-center gap-[10px] p-[15px]">
          <p className="w-full font-[var(--font-family-primary)] font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[120%] text-[var(--color-black)] flex items-center">
            Elevando o desempenho dos negócios por meio da inovação & tecnologia
          </p>
          <p className="w-full font-[var(--font-family-primary)] font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-[140%] text-[var(--text-semi-muted)] flex items-center">
            Nós nos concentramos na elaboração de estratégias sob medida que naveguem pela complexidade e forneçam resultados tangíveis para nossos clientes.
          </p>
          <p className="w-full font-[var(--font-family-primary)] font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-[140%] text-[var(--color-black)] flex items-center">
            Por meio de uma combinação de análises sofisticadas e solução criativa de problemas, capacitamos as organizações a prosperar em mercados em rápida evolução.
          </p>

          {/* Cards informativos */}
          <div className="w-full flex flex-col sm:flex-row justify-between gap-[15px] mt-[15px]">
            {/* Card 1 */}
            <div className="card w-full sm:w-[48%]">
              <Settings className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />
              <p className="font-[var(--font-family-primary)] font-semibold text-[16px] sm:text-[18px] leading-[120%] text-[var(--color-black)] mt-2">
                Solução Sob Medida
              </p>
              <p className="font-[var(--font-family-primary)] font-medium text-[14px] sm:text-[16px] leading-[140%] text-[var(--color-black)] mt-1">
                Adotamos metodologias inovadoras para desenvolver estratégias exclusivas que impulsionam o sucesso duradouro.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card w-full sm:w-[48%]">
              <Headset className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />
              <p className="font-[var(--font-family-primary)] font-semibold text-[16px] sm:text-[18px] leading-[120%] text-[var(--color-black)] mt-2">
                Suporte Dedicado
              </p>
              <p className="font-[var(--font-family-primary)] font-medium text-[14px] sm:text-[16px] leading-[140%] text-[var(--text-semi-muted)] mt-1">
                Disponibilizamos suporte técnico contínuo, pronto para resolver qualquer questão com rapidez e precisão.
              </p>
            </div>
          </div>

          {/* Botão */}
          <div className="btn-primary w-full max-w-[240px] h-[50px] mt-[20px]">
            <p className="font-[var(--font-family-primary)] font-semibold text-[13px] sm:text-[14px] leading-[100%] text-[var(--color-white)]">
              EXPLORE OS SERVIÇOS
            </p>
            <ArrowRight className="w-[20px] h-[20px] text-[var(--color-white)]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Settings, Headset, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-[90px] pt-[40px] pb-[40px] flex flex-col gap-[15px] bg-[#D1D5DB]"
    >
      {/* Cabeçalho da seção */}
      <div className="w-full max-w-[1548px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[15px]">
          <p className="font-[var(--font-family-primary)] font-semibold text-sm text-[var(--color-black)]">
            SOBRE
          </p>
          <div className="flex-1 max-w-[180px] h-[1px] bg-[var(--color-primary)]" />
        </div>

        <p className="font-[var(--font-family-primary)] font-semibold text-lg sm:text-xl text-[var(--color-black)]">
          SAIBA MAIS SOBRE NÓS
        </p>
      </div>

      {/* Container com imagem e texto */}
      <div className="flex flex-col lg:flex-row gap-[15px] items-start">
        {/* Imagem */}
        <div className="relative w-full lg:w-[55%] h-[350px] sm:h-[420px] lg:h-[550px] rounded-[var(--radius-15)] overflow-hidden shadow-[var(--shadow-md)]">
          <Image
            src="/1747636898591.jpeg"
            alt="Sobre nós"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute bottom-[40px] right-[10px] w-[180px] sm:w-[220px] h-[80px] bg-[var(--color-primary)] rounded-[var(--radius-15)] p-[10px] flex flex-col justify-center items-end shadow-[var(--shadow-lg)]">
            <p className="text-[22px] sm:text-[26px] font-[var(--font-family-primary)] font-bold text-[var(--color-white)] text-right">+5</p>
            <p className="text-[12px] sm:text-[14px] font-[var(--font-family-primary)] font-medium text-[var(--color-white)] text-right">
              ANOS DE EXPERIÊNCIA
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full lg:w-[45%] h-[550px] flex flex-col justify-center gap-[10px] p-[10px]">
          <p className="font-[var(--font-family-primary)] font-bold text-[20px] sm:text-[22px] leading-[130%] text-[var(--color-black)]">
            Elevando o desempenho dos negócios por meio da inovação & tecnologia
          </p>
          <p className="font-[var(--font-family-primary)] font-medium text-[13px] leading-[140%] text-[var(--text-semi-muted)]">
            Nós nos concentramos na elaboração de estratégias sob medida que naveguem pela complexidade e forneçam resultados tangíveis para nossos clientes.
          </p>
          <p className="font-[var(--font-family-primary)] font-medium text-[13px] leading-[140%] text-[var(--color-black)]">
            Por meio de uma combinação de análises sofisticadas e solução criativa de problemas, capacitamos as organizações a prosperar em mercados em rápida evolução.
          </p>

          {/* Cards */}
          <div className="w-full flex flex-col sm:flex-row justify-between gap-[15px] mt-[10px]">
            <div className="card w-full sm:w-[48%]">
              <Settings className="w-[20px] h-[20px] text-[var(--color-primary)]" strokeWidth={2} />
              <p className="font-[var(--font-family-primary)] font-semibold text-[14px] mt-2 text-[var(--color-black)]">
                Solução Sob Medida
              </p>
              <p className="font-[var(--font-family-primary)] font-medium text-[13px] mt-1 text-[var(--color-black)]">
                Adotamos metodologias inovadoras para desenvolver estratégias exclusivas que impulsionam o sucesso duradouro.
              </p>
            </div>

            <div className="card w-full sm:w-[48%]">
              <Headset className="w-[20px] h-[20px] text-[var(--color-primary)]" strokeWidth={2} />
              <p className="font-[var(--font-family-primary)] font-semibold text-[14px] mt-2 text-[var(--color-black)]">
                Suporte Dedicado
              </p>
              <p className="font-[var(--font-family-primary)] font-medium text-[13px] mt-1 text-[var(--text-semi-muted)]">
                Disponibilizamos suporte técnico contínuo, pronto para resolver qualquer questão com rapidez e precisão.
              </p>
            </div>
          </div>

          {/* Botão */}
          <div className="btn-primary w-full max-w-[200px] h-[45px] mt-[20px]">
            <p className="font-[var(--font-family-primary)] font-semibold text-[13px] text-[var(--color-white)]">
              EXPLORE OS SERVIÇOS
            </p>
            <ArrowRight className="w-[18px] h-[18px] text-[var(--color-white)]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

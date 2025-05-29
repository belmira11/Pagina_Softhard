import { FileText } from "lucide-react";

export default function HowWork() {
  return (
    <section className="w-full max-w-[1728px] mx-auto px-4 md:px-[90px] py-6 space-y-6 bg-[var(--color-bg-muted)]">
      {/* Top Title */}
      <div className="w-full space-y-2">
        <div className="flex items-center space-x-4">
          <p className="font-[var(--font-family-primary)] font-semibold text-sm text-[var(--text-muted)] uppercase">
            PASSOS
          </p>
          {/* A linha agora ajusta à largura do texto ao lado */}
          <div className="w-[180px] border-b border-[var(--color-primary)]" />
        </div>
        <p className="font-[var(--font-family-primary)] font-semibold text-[var(--font-size-xl)] md:text-[var(--font-size-2xl)] uppercase text-[var(--color-black)]">
          COMO NÓS TRABALHAMOS
        </p>
      </div>

      {/* Steps */}
      <div className="w-full space-y-4">
        {/* Passo 1 */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="icon-circle flex-shrink-0 w-12 h-12 self-center md:self-auto">
            <FileText className="w-[var(--icon-size-sm)] h-[var(--icon-size-sm)] text-[var(--color-black)]" strokeWidth={2} />
          </div>
          <div className="card flex-1 w-full space-y-1.5 py-3">
            <p className="text-[var(--font-size-xs)] text-[var(--color-primary)] font-[var(--font-family-primary)]">Passo 01</p>
            <p className="text-[var(--font-size-base)] text-[var(--color-black)] font-semibold font-[var(--font-family-primary)]">Consulta Inicial.</p>
            <p className="text-[var(--font-size-sm)] text-[var(--text-semi-muted)] font-[var(--font-family-primary)]">
              Realização de sessões de descoberta completas para entender seus requisitos e objetivos de negócios. Nossa equipe de especialistas analisa suas necessidades para criar uma abordagem personalizada.
            </p>
          </div>
        </div>

        {/* Passo 2 */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-3">
          <div className="icon-circle flex-shrink-0 w-12 h-12 self-center md:self-auto">
            <FileText className="w-[var(--icon-size-sm)] h-[var(--icon-size-sm)] text-[var(--color-black)]" strokeWidth={2} />
          </div>
          <div className="card flex-1 w-full space-y-1.5 py-3">
            <p className="text-[var(--font-size-xs)] text-[var(--color-primary)] font-[var(--font-family-primary)]">Passo 02</p>
            <p className="text-[var(--font-size-base)] text-[var(--color-black)] font-semibold font-[var(--font-family-primary)]">Planejamento e Estratégia</p>
            <p className="text-[var(--font-size-sm)] text-[var(--text-semi-muted)] font-[var(--font-family-primary)]">
              Desenvolver estratégias abrangentes e planos de projeto detalhados com base na consulta inicial. Criamos roteiros acionáveis com marcos e entregas claras.
            </p>
          </div>
        </div>

        {/* Passo 3 */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="icon-circle flex-shrink-0 w-12 h-12 self-center md:self-auto">
            <FileText className="w-[var(--icon-size-sm)] h-[var(--icon-size-sm)] text-[var(--color-black)]" strokeWidth={2} />
          </div>
          <div className="card flex-1 w-full space-y-1.5 py-3">
            <p className="text-[var(--font-size-xs)] text-[var(--color-primary)] font-[var(--font-family-primary)]">Passo 03</p>
            <p className="text-[var(--font-size-base)] text-[var(--color-black)] font-semibold font-[var(--font-family-primary)]">Fase de desenvolvimento</p>
            <p className="text-[var(--font-size-sm)] text-[var(--text-semi-muted)] font-[var(--font-family-primary)]">
              Implementação das soluções com base nas estratégias definidas. A equipe técnica trabalha com eficiência para garantir qualidade e cumprimento dos prazos estabelecidos.
            </p>
          </div>
        </div>

        {/* Passo 4 */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-3">
          <div className="icon-circle flex-shrink-0 w-12 h-12 self-center md:self-auto">
            <FileText className="w-[var(--icon-size-sm)] h-[var(--icon-size-sm)] text-[var(--color-black)]" strokeWidth={2} />
          </div>
          <div className="card flex-1 w-full space-y-1.5 py-3">
            <p className="text-[var(--font-size-xs)] text-[var(--color-primary)] font-[var(--font-family-primary)]">Passo 04</p>
            <p className="text-[var(--font-size-base)] text-[var(--color-black)] font-semibold font-[var(--font-family-primary)]">Lançamento e suporte</p>
            <p className="text-[var(--font-size-sm)] text-[var(--text-semi-muted)] font-[var(--font-family-primary)]">
              Garantir uma implantação tranquila e fornecer suporte contínuo para soluções implementadas. Monitoramos o desempenho e fazemos os ajustes necessários para obter os melhores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

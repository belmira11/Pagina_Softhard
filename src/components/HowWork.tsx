import { FileText } from "lucide-react";

export default function HowWork() {
  return (
    <section className="w-full max-w-[1728px] mx-auto px-4 md:px-[90px] py-8 space-y-8 bg-[var(--color-bg-muted)]">
      {/* Título */}
      <div className="w-full space-y-2">
        <div className="flex items-center space-x-4">
          <p className="font-[var(--font-family-primary)] font-semibold text-xs text-[var(--text-muted)] uppercase">
            PASSOS
          </p>
          <div className="w-[180px] border-b border-[var(--color-primary)]" />
        </div>
        <p className="font-[var(--font-family-primary)] font-semibold text-[var(--font-size-lg)] md:text-[var(--font-size-xl)] uppercase text-[var(--color-black)]">
          COMO NÓS TRABALHAMOS.
        </p>
      </div>

      {/* Passos */}
      <div className="w-full space-y-5">
        {[
          {
            passo: "Passo 01",
            titulo: "Consulta Inicial.",
            texto:
              "Realização de sessões de descoberta completas para entender seus requisitos e objetivos de negócios. Nossa equipe de especialistas analisa suas necessidades para criar uma abordagem personalizada.",
            reverse: false,
          },
          {
            passo: "Passo 02",
            titulo: "Planejamento e Estratégia",
            texto:
              "Desenvolver estratégias abrangentes e planos de projeto detalhados com base na consulta inicial. Criamos roteiros acionáveis com marcos e entregas claras.",
            reverse: true,
          },
          {
            passo: "Passo 03",
            titulo: "Fase de desenvolvimento",
            texto:
              "Implementação das soluções com base nas estratégias definidas. A equipe técnica trabalha com eficiência para garantir qualidade e cumprimento dos prazos estabelecidos.",
            reverse: false,
          },
          {
            passo: "Passo 04",
            titulo: "Lançamento e suporte",
            texto:
              "Garantir uma implantação tranquila e fornecer suporte contínuo para soluções implementadas. Monitoramos o desempenho e fazemos os ajustes necessários para obter os melhores resultados.",
            reverse: true,
          },
        ].map(({ passo, titulo, texto, reverse }, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } md:items-center gap-4`}
          >
            {/* Ícone */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <FileText
                className="w-[20px] h-[20px] text-[var(--color-black)]"
                strokeWidth={2}
              />
            </div>

            {/* Card */}
            <div className="flex-1 bg-white px-4 py-3 rounded-lg shadow-md space-y-1">
              <p className="text-[10px] text-[var(--color-primary)] font-[var(--font-family-primary)]">
                {passo}
              </p>
              <p className="text-sm text-[var(--color-black)] font-semibold font-[var(--font-family-primary)]">
                {titulo}
              </p>
              <p className="text-xs text-[var(--text-semi-muted)] font-[var(--font-family-primary)] leading-tight">
                {texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

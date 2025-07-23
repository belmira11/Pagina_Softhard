import { FileText } from "lucide-react";

export default function HowWork() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-[90px] py-8 flex flex-col justify-center bg-[var(--color-bg-muted)]"
      style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--font-size-base)',
        background: 'var(--color-bg-muted)',
      }}
    >
      {/* Título */}
      <div className="w-full space-y-2 mb-8 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <p className="font-primary font-semibold text-xs text-text-muted uppercase">
            PASSOS
          </p>
          <div className="flex-1 max-w-[180px] border-b border-primary" />
        </div>
        <p className="font-primary font-bold text-xl sm:text-2xl md:text-3xl uppercase text-black">
          COMO NÓS TRABALHAMOS.
        </p>
      </div>

      {/* Passos */}
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
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
            className={`flex flex-col-reverse ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center gap-4`}
          >
            {/* Ícone */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <FileText className="w-5 h-5 text-black" strokeWidth={2} />
            </div>

            {/* Card */}
            <div className="flex-1 bg-white px-4 sm:px-6 py-4 rounded-xl shadow-md space-y-1">
              <p className="text-xs text-primary font-primary">{passo}</p>
              <p className="text-base sm:text-lg text-black font-semibold font-primary">
                {titulo}
              </p>
              <p className="text-sm sm:text-base text-text-semi-muted font-primary leading-relaxed">
                {texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

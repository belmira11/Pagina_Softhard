import { FileText } from "lucide-react";

export default function HowWork() {
  return (
    <section className="w-full max-w-[1728px] mx-auto px-4 md:px-[90px] py-6 space-y-6 bg-gray-300">
      {/* Top Title */}
      <div className="w-full space-y-2">
        <div className="flex items-center space-x-4">
          <p className="font-['Poppins'] font-semibold text-sm text-[#00000099] uppercase">
            PASSOS
          </p>
          {/* A linha agora ajusta à largura do texto ao lado */}
          <div className="w-[180px] border-b border-[#FF6100]" />
        </div>
        <p className="font-['Poppins'] font-semibold text-xl md:text-2xl uppercase text-[#000000]">
          COMO NÓS TRABALHAMOS
        </p>
      </div>

      {/* Steps */}
      <div className="w-full space-y-6">
        {/* Passo 1 */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#F8EDED] bg-white flex items-center justify-center self-center md:self-auto">
            <FileText className="w-6 h-6 text-black" strokeWidth={2} />
          </div>
          <div className="flex-1 w-full rounded-xl border border-[#F8EDED] bg-white space-y-2 p-4">
            <p className="text-sm text-[#FF6100] font-['Poppins']">Passo 01</p>
            <p className="text-lg text-black font-semibold font-['Poppins']">Consulta Inicial.</p>
            <p className="text-base text-[#000000CC] font-['Poppins']">
              Realização de sessões de descoberta completas para entender seus requisitos e objetivos de negócios. Nossa equipe de especialistas analisa suas necessidades para criar uma abordagem personalizada.
            </p>
          </div>
        </div>

        {/* Passo 2 */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#F8EDED] bg-white flex items-center justify-center self-center md:self-auto">
            <FileText className="w-6 h-6 text-black" strokeWidth={2} />
          </div>
          <div className="flex-1 w-full rounded-xl border border-[#F8EDED] bg-white space-y-2 p-4">
            <p className="text-sm text-[#FF6100] font-['Poppins']">Passo 02</p>
            <p className="text-lg text-black font-semibold font-['Poppins']">Planejamento e Estratégia</p>
            <p className="text-base text-[#000000CC] font-['Poppins']">
              Desenvolver estratégias abrangentes e planos de projeto detalhados com base na consulta inicial. Criamos roteiros acionáveis com marcos e entregas claras.
            </p>
          </div>
        </div>

        {/* Passo 3 */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#F8EDED] bg-white flex items-center justify-center self-center md:self-auto">
            <FileText className="w-6 h-6 text-black" strokeWidth={2} />
          </div>
          <div className="flex-1 w-full rounded-xl border border-[#F8EDED] bg-white space-y-2 p-4">
            <p className="text-sm text-[#FF6100] font-['Poppins']">Passo 03</p>
            <p className="text-lg text-black font-semibold font-['Poppins']">Fase de desenvolvimento</p>
            <p className="text-base text-[#000000CC] font-['Poppins']">
              Implementação das soluções com base nas estratégias definidas. A equipe técnica trabalha com eficiência para garantir qualidade e cumprimento dos prazos estabelecidos.
            </p>
          </div>
        </div>

        {/* Passo 4 */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#F8EDED] bg-white flex items-center justify-center self-center md:self-auto">
            <FileText className="w-6 h-6 text-black" strokeWidth={2} />
          </div>
          <div className="flex-1 w-full rounded-xl border border-[#F8EDED] bg-white space-y-2 p-4">
            <p className="text-sm text-[#FF6100] font-['Poppins']">Passo 04</p>
            <p className="text-lg text-black font-semibold font-['Poppins']">Lançamento e suporte</p>
            <p className="text-base text-[#000000CC] font-['Poppins']">
              Garantir uma implantação tranquila e fornecer suporte contínuo para soluções implementadas. Monitoramos o desempenho e fazemos os ajustes necessários para obter os melhores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

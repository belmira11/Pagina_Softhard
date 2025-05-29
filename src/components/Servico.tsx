import { ArrowRight, PieChart, Video, Settings, MonitorSmartphone, PencilRuler, Mail } from "lucide-react";

export default function ServicosSection() {
  return (
    <section className="w-full max-w-[1728px] mx-auto px-4 md:px-[90px] py-[20px] space-y-[8px] bg-[var(--color-bg-muted)]">
      {/* Top Title */}
      <div className="w-full max-w-[1548px] mx-auto space-y-[8px]">
        <div className="flex items-center h-[24px]">
          <p className="font-[var(--font-family-primary)] font-semibold text-sm leading-[100%] text-[var(--text-muted)] uppercase mr-[10px]">
            SERVIÇOS
          </p>
          <div className="w-[242px] border-b-[1px] border-[var(--color-primary)]"></div>
        </div>

        <p className="w-full max-w-[364px] font-[var(--font-family-primary)] font-semibold text-xl leading-[100%] text-[var(--color-black)] uppercase">
          Confira nossos serviços
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1548px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] py-[8px]">
        {/* Card 1 */}
        <div className="w-full bg-transparent rounded-[var(--radius-15)] flex flex-col justify-between p-[15px] -ml-2">
          <p className="font-[var(--font-family-primary)] font-medium text-base leading-relaxed text-[var(--text-semi-muted)]">
            Integramos estratégias com visão de futuro, abordagens criativas e tecnologias de ponta para oferecer experiências excepcionais ao cliente que impulsionam o crescimento e envolvem os mercados-alvo.
          </p>
          <div className="btn-primary w-full max-w-[256px] h-[50px] rounded-[5px] flex items-center justify-between px-[10px] mt-[15px] md:mt-[7px]">
            <p className="w-[194px] h-[24px] font-[var(--font-family-primary)] font-semibold text-sm text-[var(--color-white)]">
              Ver todos os serviços
            </p>
            <ArrowRight className="w-[24px] h-[24px] text-[var(--color-white)]" strokeWidth={2} />
          </div>
        </div>

        {/* Reusable Card Template */}
        {[
          {
            icon: <PieChart className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />,
            title: <>Marketing &<br /> Estratégias</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <Video className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />,
            title:  <>Publicidade &<br /> Audiovisual</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <Video className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />,
            title: <>Publicidade &<br /> Audiovisual</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <PieChart className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />,
            title: <>Marketing &<br /> Estratégias</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <PieChart className="w-[24px] h-[24px] text-[var(--color-primary)]" strokeWidth={2} />,
            title: <>Marketing &<br /> Estratégias</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          }
        ].map((card, index) => (
          <div
            key={index}
            className="w-full h-auto bg-transparent border border-[var(--color-white)] rounded-[var(--radius-15)] p-4"
          >
            <div className="w-[44px] h-[44px] rounded-[8px] bg-transparent border border-[var(--color-white)] flex items-center justify-center mb-3">
              {card.icon}
            </div>
            <p className="font-[var(--font-family-primary)] font-semibold text-lg leading-[120%] text-[var(--color-black)] mb-2">
              {card.title}
            </p>
            <p className="font-[var(--font-family-primary)] font-medium text-sm leading-relaxed text-[var(--text-semi-muted)]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 
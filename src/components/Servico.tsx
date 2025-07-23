import { ArrowRight, PieChart, Video } from "lucide-react";

export default function ServicosSection() {
  // Array de cards, incluindo o primeiro card como objeto
  const cards = [
    {
      isFirst: true,
      content: (
        <>
          <p className="font-primary font-medium text-base leading-relaxed text-neutral-700 flex-1 mb-4" style={{ fontSize: 'var(--font-size-base)' }}>
            Integramos estratégias com visão de futuro, abordagens criativas e tecnologias de ponta para oferecer experiências excepcionais ao cliente que impulsionam o crescimento e envolvem os mercados-alvo.
          </p>
          <div className="btn-primary w-full max-w-[256px] h-[50px] rounded-[5px] flex items-center justify-between px-4 animate-bounce flex-shrink-0">
            <p className="w-[194px] h-[24px] font-primary font-semibold text-base text-white" style={{ fontSize: 'var(--font-size-base)' }}>
              Ver todos os serviços.
            </p>
            <ArrowRight className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </>
      )
    },
    // Demais cards dinâmicos
    {
      icon: <PieChart className="w-6 h-6 text-primary" strokeWidth={2} />, title: <>Marketing &<br /> Estratégias</>, text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
    },
    {
      icon: <Video className="w-6 h-6 text-primary" strokeWidth={2} />, title: <>Publicidade &<br /> Audiovisual</>, text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
    },
    {
      icon: <Video className="w-6 h-6 text-primary" strokeWidth={2} />, title: <>Publicidade &<br /> Audiovisual</>, text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
    },
    {
      icon: <PieChart className="w-6 h-6 text-primary" strokeWidth={2} />, title: <>Marketing &<br /> Estratégias</>, text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
    },
    {
      icon: <PieChart className="w-6 h-6 text-primary" strokeWidth={2} />, title: <>Marketing &<br /> Estratégias</>, text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
    }
  ];

  return (
    <section
    id="servicos"
    className="w-full min-h-screen px-4 sm:px-6 lg:px-[90px] py-12 flex flex-col items-center justify-start bg-[var(--color-bg-muted)]"
    style={{
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-base)',
    }}
  >
    {/* Top Title */}
    <div className="w-full max-w-6xl mb-8 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <p className="font-primary font-semibold text-xs text-text-muted uppercase" style={{ fontSize: 'var(--font-size-base)' }}>
          SERVIÇOS
        </p>
        <div className="flex-grow border-b border-primary"></div>
      </div>
      <p className="font-primary font-bold text-2xl md:text-3xl text-black uppercase mt-2" style={{ fontSize: 'var(--font-size-base)' }}>
        Confira nossos serviços
      </p>
    </div>
  
    {/* Grid Responsivo */}
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white/90 border border-white rounded-xl p-6 shadow flex flex-col gap-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 animate-fade-in-up`}
          style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
        >
          {card.isFirst ? (
            card.content
          ) : (
            <>
              <div className="w-12 h-12 rounded-lg bg-white border border-white flex items-center justify-center mb-2 shadow-md animate-pulse">
                {card.icon}
              </div>
              <p className="font-primary font-semibold text-lg text-black" style={{ fontSize: 'var(--font-size-base)' }}>
                {card.title}
              </p>
              <p className="font-primary font-medium text-sm text-neutral-700" style={{ fontSize: 'var(--font-size-base)' }}>
                {card.text}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  </section>
  
  );
}

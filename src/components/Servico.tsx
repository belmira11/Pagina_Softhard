import { ArrowRight, PieChart, Video, Settings, MonitorSmartphone, PencilRuler, Mail } from "lucide-react";

export default function ServicosSection() {
  return (
    <section className="w-full max-w-[1728px] mx-auto px-4 md:px-[90px] py-[25px] space-y-[10px] bg-gray-300">
      {/* Top Title */}
      <div className="w-full max-w-[1548px] mx-auto space-y-[10px]">
      <div className="flex items-center h-[27px]">
  <p className="font-['Poppins'] font-semibold text-[18px] leading-[100%] text-[#00000099] uppercase mr-[10px]">
    SERVIÇOS
  </p>
  <div className="w-[242px] border-b-[1px] border-[#FF6100]"></div>
</div>


        <p className="w-full max-w-[364px] font-['Poppins'] font-semibold text-[26px] leading-[100%] text-[#000000] uppercase">
          Confira nossos serviços
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1548px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] py-[10px]">
        {/* Card 1 */}
        <div className="w-full bg-transparent rounded-[15px] flex flex-col justify-between p-[15px]">
          <p className="font-['Poppins'] font-medium text-[20px] leading-[100%] text-[#000000CC]">
            Integramos estratégias com visão de futuro, abordagens criativas e tecnologias de ponta para oferecer experiências excepcionais ao cliente que impulsionam o crescimento e envolvem os mercados-alvo.
          </p>
          <div className="w-full max-w-[256px] h-[60px] bg-[#FF6100] rounded-[5px] flex items-center justify-between px-[10px] mt-[20px] md:mt-[7px]">
            <p className="w-[194px] h-[27px] font-['Poppins'] font-semibold text-[18px] text-white">
              Ver todos os serviços
            </p>
            <ArrowRight className="w-[32px] h-[32px] text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Reusable Card Template */}
        {[
          {
            icon: <PieChart className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />,
            title: <>Marketing &<br /> Estratégias</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <Video className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />,
            title:  <>Publicidade &<br /> Audiovisual</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <Video className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />,
            title: <>Publicidade &<br /> Audiovisual</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <PieChart className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />,
            title: <>Marketing &<br /> Estratégias</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          },
          {
            icon: <PieChart className="w-[32px] h-[32px] text-[#FF6100]" strokeWidth={2} />,
            title: <>Marketing &<br /> Estratégias</>,
            text: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"
          }

        ].map((card, index) => (
          <div
            key={index}
            className="w-full h-auto bg-transparent border-[1px] border-white rounded-[15px] p-[15px] space-y-[10px]"
          >
            <div className="w-[52px] h-[52px] rounded-[10px] bg-white flex items-center justify-center">
              {card.icon}
            </div>
           <p className="font-['Poppins'] font-semibold text-[24px] leading-[120%] text-black ">

              {card.title}
            </p>
            <p className="font-['Poppins'] font-medium text-[20px] leading-[100%] text-[#000000CC]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 
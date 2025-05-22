import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image"; 

export default function TestimonialsSection() {
  return (
    <section
      className="w-full min-h-[420px] max-h-[700px] h-auto bg-[#FF6100] mx-auto px-4 sm:px-6 lg:px-[60px] pt-[25px] pb-[25px] flex flex-col lg:flex-row gap-[20px] max-w-[1728px]"
    >
      {/* Esquerda */}
      <div className="w-full lg:w-[540px] h-auto flex flex-col gap-[10px]">
        <p className="w-full max-w-[581px] h-auto font-['Poppins'] font-bold text-[28px] lg:text-[36px] leading-[100%] text-white flex items-center">
          Nossos clientes falam muito bem
        </p>
        <p className="w-full max-w-[582px] h-auto font-['Poppins'] font-medium text-[16px] lg:text-[20px] leading-[100%] text-white flex items-center">
          Veja diretamente aqueles que experimentaram o impacto de nossa parceria e alcançaram seus objetivos estratégicos.
        </p>

        {/* Ícones de navegação */}
        <div className="w-[120px] h-[50px] rounded-xl bg-[#FF6100] mt-[7px] mb-[7px] px-[10px] flex justify-between items-center">
          <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center rotate-180">
            <ChevronRight className="text-[#FF6100] w-5 h-5" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
            <ChevronRight className="text-[#FF6100] w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Direita */}
      <div className="w-full lg:w-[936px] h-auto overflow-x-auto flex gap-[16px] snap-x snap-mandatory pb-1 scrollbar-thin scrollbar-thumb-transparent">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-[260px] sm:w-[320px] lg:w-[370px] h-auto bg-white rounded-[15px] flex-shrink-0 p-[20px] flex flex-col justify-between snap-start"
          >
            {/* Estrelas */}
            <div className="w-full max-w-[200px] h-[32px] flex gap-[6px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] text-yellow-400" fill="currentColor" />
              ))}
            </div>

            {/* Testemunho */}
            <div className="flex-1 flex items-center">
              <p className="w-full max-w-[420px] h-auto font-['Poppins'] font-medium text-[16px] lg:text-[18px] leading-[140%] text-[#000000CC]">
                Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit
              </p>
            </div>

            {/* Perfil */}
           {/* Perfil */}
<div className="w-full max-w-[420px] h-auto flex gap-[12px] items-center mt-4">
  <Image
    src="/bae850c8b5f8624450378ac5ca4810047b22329f.png"
    alt="Avatar"
    width={70}
    height={70}
    className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full object-cover"
  />
              <div className="flex-1 h-auto flex flex-col justify-center">
                <p className="font-['Poppins'] font-semibold text-[16px] lg:text-[18px] leading-[100%] text-[#000000]">
                  André Bravo
                </p>
                <p className="font-['Poppins'] font-medium text-[14px] leading-[100%] text-[#000000CC]">
                  Coordenador Tecnológico
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

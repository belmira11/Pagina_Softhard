import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
   <section className="w-full bg-[#FF6100] px-4 sm:px-6 lg:px-12 py-10">
  <div className="flex flex-col lg:flex-row gap-10 w-full">
    
    {/* Esquerda: 40% */}
    <div className="w-full lg:w-[40%] flex flex-col gap-4 text-white">
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
        Nossos clientes falam muito bem
      </h2>
      <p className="text-base lg:text-lg font-medium leading-relaxed">
        Veja diretamente aqueles que experimentaram o impacto de nossa parceria e alcançaram seus objetivos estratégicos.
      </p>

      {/* Navegação */}
      <div className="flex gap-4 mt-4">
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition">
          <ChevronLeft className="text-[#FF6100] w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition">
          <ChevronRight className="text-[#FF6100] w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Direita: 60% */}
    <div className="w-full lg:w-[60%] flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-transparent">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] bg-white rounded-2xl p-6 shadow-md snap-start flex flex-col justify-between hover:shadow-xl transition"
        >
          {/* Estrelas */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>

          {/* Texto */}
          <p className="text-gray-800 text-sm lg:text-base leading-relaxed mb-4">
            Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit
          </p>

          {/* Perfil */}
          <div className="flex items-center gap-3 mt-auto">
            <Image
              src="/bae850c8b5f8624450378ac5ca4810047b22329f.png"
              alt="Avatar"
              width={70}
              height={70}
              className="rounded-full object-cover w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
            />
            <div>
              <p className="font-semibold text-gray-900 text-sm lg:text-base">André Bravo</p>
              <p className="text-gray-500 text-sm">Coordenador Tecnológico</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
}

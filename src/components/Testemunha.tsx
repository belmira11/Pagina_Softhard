import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { TestemunhaCard } from "./TestemunhaCard";

const testemunhas = [
  {
    nome: "André Bravo",
    cargo: "Coordenador Tecnológico",
    depoimento: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    avatar: "/bae850c8b5f8624450378ac5ca4810047b22329f.png"
  },
  {
    nome: "André Bravo",
    cargo: "Coordenador Tecnológico",
    depoimento: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    avatar: "/bae850c8b5f8624450378ac5ca4810047b22329f.png"
  },
  {
    nome: "André Bravo",
    cargo: "Coordenador Tecnológico",
    depoimento: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    avatar: "/bae850c8b5f8624450378ac5ca4810047b22329f.png"
  },
  {
    nome: "André Bravo",
    cargo: "Coordenador Tecnológico",
    depoimento: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    avatar: "/bae850c8b5f8624450378ac5ca4810047b22329f.png"
  },
  {
    nome: "André Bravo",
    cargo: "Coordenador Tecnológico",
    depoimento: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    avatar: "/bae850c8b5f8624450378ac5ca4810047b22329f.png"
  },
];

export default function Testemunha() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => Math.min(prev + 1, testemunhas.length - 1));
    }
  };

  const scrollToPrevious = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <section
      className="w-full max-w-[1728px] min-h-[320px] md:min-h-[420px] max-h-[900px] h-auto mx-auto px-4 sm:px-8 md:px-[40px] lg:px-[90px] py-6 md:py-[25px] flex items-center justify-center bg-[#FF6100]"
      style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--font-size-base)',
        background: '#FF6100',
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full h-full items-center justify-between">
        {/* Esquerda: 100% mobile, 40% desktop */}
        <div className="w-full md:w-[40%] flex flex-col gap-4 text-white justify-center mb-6 md:mb-0">
          <h2 className="font-primary text-xl md:text-2xl lg:text-4xl font-bold leading-tight" style={{ fontSize: 'var(--font-size-base)' }}>
            Nossos clientes falam muito bem.
          </h2>
          <p className="font-primary text-sm md:text-base lg:text-lg font-medium leading-relaxed" style={{ fontSize: 'var(--font-size-base)' }}>
            Veja diretamente aqueles que experimentaram o impacto de nossa parceria e alcançaram seus objetivos estratégicos.
          </p>

          {/* Navegação */}
          <div className="flex gap-4 mt-4">
            <button 
              onClick={scrollToPrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="text-[var(--color-primary)] w-6 h-6" />
            </button>
            <button 
              onClick={scrollToNext}
              disabled={currentIndex === testemunhas.length - 1}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="text-[var(--color-primary)] w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Direita: 100% mobile, 60% desktop */}
        <div 
          ref={containerRef}
          className="w-full md:w-[60%] flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-transparent h-full"
          style={{ minHeight: '220px', maxHeight: '900px' }}
        >
          {testemunhas.map((testemunha, index) => (
            <TestemunhaCard
              key={index}
              {...testemunha}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
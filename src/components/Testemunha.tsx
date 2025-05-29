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
    <section className="w-full bg-[var(--color-primary)] px-4 sm:px-6 lg:px-12 py-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        
        {/* Esquerda: 40% */}
        <div className="w-full lg:w-[40%] flex flex-col gap-4 text-[var(--color-white)]">
          <h2 className="font-[var(--font-family-primary)] text-[var(--font-size-4xl)] lg:text-[var(--font-size-5xl)] font-bold leading-tight">
            Nossos clientes falam muito bem
          </h2>
          <p className="font-[var(--font-family-primary)] text-[var(--font-size-base)] lg:text-[var(--font-size-lg)] font-medium leading-relaxed">
            Veja diretamente aqueles que experimentaram o impacto de nossa parceria e alcançaram seus objetivos estratégicos.
          </p>

          {/* Navegação */}
          <div className="flex gap-4 mt-4">
            <button 
              onClick={scrollToPrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-[var(--color-white)] flex items-center justify-center shadow-[var(--shadow-sm)] hover:scale-105 transition-[var(--transition-default)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="text-[var(--color-primary)] w-[var(--icon-size-sm)] h-[var(--icon-size-sm)]" />
            </button>
            <button 
              onClick={scrollToNext}
              disabled={currentIndex === testemunhas.length - 1}
              className="w-10 h-10 rounded-full bg-[var(--color-white)] flex items-center justify-center shadow-[var(--shadow-sm)] hover:scale-105 transition-[var(--transition-default)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="text-[var(--color-primary)] w-[var(--icon-size-sm)] h-[var(--icon-size-sm)]" />
            </button>
          </div>
        </div>

        {/* Direita: 60% */}
        <div 
          ref={containerRef}
          className="w-full lg:w-[60%] flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-transparent"
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

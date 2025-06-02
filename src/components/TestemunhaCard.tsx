import { Star } from "lucide-react";
import Image from "next/image";

interface TestemunhaCardProps {
  nome: string;
  cargo: string;
  depoimento: string;
  avatar: string;
}

export function TestemunhaCard({ nome, cargo, depoimento, avatar }: TestemunhaCardProps) {
  return (
    <div className="card min-w-[295px] sm:min-w-[300px] lg:min-w-[320px] bg-[var(--color-white)] rounded-xl p-6 hover:shadow-[var(--shadow-lg)] transition-[var(--transition-default)] snap-start flex flex-col justify-between gap-4">
      {/* Estrelas */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
        ))}
      </div>

      {/* Texto */}
      <p className="font-[var(--font-family-primary)] text-gray-800 text-xs leading-relaxed line-clamp-4">
        {depoimento}
      </p>

      {/* Perfil */}
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={`Avatar de ${nome}`}
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
        />
        <div className="min-w-0">
          <p className="font-[var(--font-family-primary)] font-semibold text-black text-xs truncate">{nome}</p>
          <p className="font-[var(--font-family-primary)] text-gray-600 text-[10px] truncate">{cargo}</p>
        </div>
      </div>
    </div>
  );
}

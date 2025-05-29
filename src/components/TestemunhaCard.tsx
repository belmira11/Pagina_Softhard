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
    <div className="card min-w-[220px] sm:min-w-[260px] lg:min-w-[300px] bg-[var(--color-white)] rounded-xl p-3 hover:shadow-[var(--shadow-lg)] transition-[var(--transition-default)] snap-start flex flex-col justify-between gap-2">
      {/* Estrelas */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" />
        ))}
      </div>

      {/* Texto */}
      <p className="font-[var(--font-family-primary)] text-[var(--text-semi-muted)] text-xs leading-relaxed line-clamp-3">
        {depoimento}
      </p>

      {/* Perfil */}
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={`Avatar de ${nome}`}
          width={32}
          height={32}
          className="rounded-full object-cover w-8 h-8"
        />
        <div className="min-w-0">
          <p className="font-[var(--font-family-primary)] font-semibold text-[var(--color-black)] text-xs truncate">{nome}</p>
          <p className="font-[var(--font-family-primary)] text-[var(--text-muted)] text-[10px] truncate">{cargo}</p>
        </div>
      </div>
    </div>
  );
} 
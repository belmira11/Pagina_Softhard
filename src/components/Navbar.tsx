import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["sobre", "servicos", "portfolio", "equipe", "contato"];

  return (
    <nav className="fixed top-[8px] inset-x-[20px] z-50 bg-[var(--color-primary)] text-[var(--color-white)] h-[70px] rounded-full border-b border-white/30 
      px-3 flex justify-between items-center max-w-[1200px] mx-auto gap-2">

      {/* Logo */}
      <div className="font-bold text-lg w-[120px] h-[40px] p-1 flex items-center justify-center">
        <div className="font-[var(--font-family-primary)] font-semibold text-sm leading-none text-[var(--color-white)]">
          SOFTHARD
        </div>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex h-[40px] items-center justify-center flex-1">
        <ul className="flex gap-1">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item}`}
                className="px-2 h-[30px] font-[var(--font-family-primary)] font-medium text-xs leading-none text-[var(--color-white)] hover:underline flex items-center justify-center transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão desktop */}
      <div className="hidden md:flex h-[36px] bg-[var(--color-white)] items-center rounded-full px-3">
        <button className="text-[var(--color-primary)] font-[var(--font-family-primary)] text-xs font-bold leading-none flex items-center justify-center hover:bg-[var(--color-hover)] transition-all">
          TORNAR SOFTCLIENTE
        </button>
      </div>

      {/* Menu hamburguer para mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-[var(--color-white)]" />
          ) : (
            <Menu className="w-5 h-5 text-[var(--color-white)]" />
          )}
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div
          className="fixed top-[70px] left-0 right-0 bg-[var(--color-primary)] text-[var(--color-white)] rounded-b-lg border-t border-white/30 shadow-md flex flex-col items-center py-2 space-y-2 z-40"
          onClick={() => setMenuOpen(false)}
        >
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              className="font-[var(--font-family-primary)] font-medium text-xs leading-none hover:underline"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button className="h-[32px] px-4 bg-[var(--color-white)] text-[var(--color-primary)] rounded-full font-[var(--font-family-primary)] text-xs font-bold leading-none hover:bg-[var(--color-hover)] transition-all">
            TORNAR SOFTCLIENTE
          </button>
        </div>
      )}
    </nav>
  );
}

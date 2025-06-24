'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["sobre", "servicos", "portfolio", "equipe", "contato"];

  const scrollToFormulario = (fromMobile = false) => {
    const section = document.getElementById("form-consulta");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (fromMobile) setMenuOpen(false); // Só fecha o menu se for do mobile
    }
  };

  return (
    <nav className="fixed top-[8px] inset-x-[20px] z-50 bg-[var(--color-primary)] text-[var(--color-white)] h-[60px] rounded-full border-b border-white/30 
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
        <button
          onClick={() => scrollToFormulario(false)} // Não fecha o menu aqui
          className="text-[var(--color-primary)] font-[var(--font-family-primary)] text-xs font-bold leading-none flex items-center justify-center hover:bg-[var(--color-hover)] focus:outline-none active:bg-[var(--color-hover)] transition-all"
        >
          TORNAR SOFTCLIENTE
        </button>
      </div>

      {/* Botão Começar + ícone menu mobile */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => scrollToFormulario(true)}
          className="bg-[var(--color-white)] text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full hover:bg-[var(--color-hover)] focus:outline-none active:bg-[var(--color-hover)] transition"
        >
          Começar
        </button>

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
        >
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              className="font-[var(--font-family-primary)] font-medium text-xs leading-none hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button
            onClick={() => scrollToFormulario(true)} // Aqui fecha o menu
            className="h-[32px] px-4 bg-[var(--color-white)] text-[var(--color-primary)] rounded-full font-[var(--font-family-primary)] text-xs font-bold leading-none hover:bg-[var(--color-hover)] focus:outline-none active:bg-[var(--color-hover)] transition-all"
          >
            TORNAR SOFTCLIENTE.
          </button>
        </div>
      )}
    </nav>
  );
}

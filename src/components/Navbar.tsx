import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["sobre", "servicos", "portfolio", "equipe", "contato"];

  return (
    <nav
      className="fixed top-0 left-0 z-50 bg-[#FF6100] text-white h-[90px] rounded-full border-b border-white/30 
      my-[10px] mx-[25px] px-6 flex justify-between items-center 
      max-w-[1550px] w-[calc(100%-50px)] gap-[15px]"
    >
      {/* Logo */}
      <div className="font-bold text-xl w-[160px] h-[50px] p-[10px] gap-[10px] flex items-center justify-center">
        <div className="w-[106px] h-[30px] font-['Poppins'] font-semibold text-[20px] leading-[100%] tracking-[0%] text-white flex items-center justify-center">
          SOFTHARD
        </div>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex w-[1072px] h-[50px] p-[10px] items-center justify-center">
        <ul className="flex gap-[15px]">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item}`}
                className="w-[85px] h-[30px] font-['Poppins'] font-medium text-[20px] leading-[100%] tracking-[0%] text-white hover:underline flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão desktop */}
      <div className="hidden md:flex w-[238px] h-[60px] rounded-xl pt-[7px] pr-[10px] pb-[7px] pl-[10px] gap-[10px] bg-white items-center rounded-full">
        <button className="w-[218px] h-[44px] bg-white text-[#FF6100] rounded-full font-['Poppins'] font-bold leading-[100%] tracking-[0%] flex items-center justify-center hover:bg-orange-100">
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
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div
          className="fixed top-[90px] left-0 right-0 bg-[#FF6100] text-white rounded-b-xl border-t border-white/30 shadow-lg flex flex-col items-center py-4 space-y-4 z-40"
          onClick={() => setMenuOpen(false)} // fecha menu ao clicar em algum item
        >
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              className="font-['Poppins'] font-medium text-[20px] leading-[100%] tracking-[0%] hover:underline"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button className="w-[218px] h-[44px] bg-white text-[#FF6100] rounded-full font-['Poppins'] font-bold leading-[100%] tracking-[0%] hover:bg-orange-100">
            TORNAR SOFTCLIENTE
          </button>
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Mail } from "lucide-react"; // Ícone importado do Lucide

export default function ChatButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-[10px] right-[10px] w-[90px] h-[90px] z-50 transition-all duration-300 ease-in-out
        ${show ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}
      `}
    >
      <button
        aria-label="Abrir chat"
        className="w-[90px] h-[90px] bg-[#FF6100] border-[3px] border-white rounded-full flex items-center justify-center shadow-lg"
      >
        <Mail size={34} color="white" />
      </button>
    </div>
  );
}

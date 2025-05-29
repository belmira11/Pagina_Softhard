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
      className={`fixed bottom-[15px] right-[15px] w-[60px] h-[60px] z-50 transition-[var(--transition-default)]
        ${show ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}
      `}
    >
      <button
        aria-label="Abrir chat"
        className="w-[60px] h-[60px] bg-[var(--color-primary)] border-2 border-[var(--color-white)] rounded-full flex items-center justify-center shadow-[var(--shadow-lg)]"
      >
        <Mail size={24} color="white" />
      </button>
    </div>
  );
}

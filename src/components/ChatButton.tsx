import { useState, useEffect } from "react";

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
        {/* Ícone de email */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[34px] h-[34px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
}

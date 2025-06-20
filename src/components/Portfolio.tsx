import { useState } from "react";
import { Check } from "lucide-react";

export default function PortfolioMain() {
  const [filtro, setFiltro] = useState("Todos os projetos");

  const tabs = [
    "Todos os projetos",
    "Desenvolvimento Web",
    "Design Gráfico",
    "Suporte Audiovisual",
  ];

  const projetos = [...Array(8)].map((_, index) => {
    const categoria =
      [0, 4].includes(index)
        ? "Desenvolvimento Web"
        : [1, 5].includes(index)
        ? "Design Gráfico"
        : [2, 6].includes(index)
        ? "Suporte Audiovisual"
        : "Desenvolvimento Web";

    const imageNumber =
      [0, 4].includes(index)
        ? 1
        : [1, 5].includes(index)
        ? 2
        : [2, 6].includes(index)
        ? 3
        : 1;

    return { id: index, categoria, imageNumber };
  });

  const projetosFiltrados =
    filtro === "Todos os projetos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro);

  return (
    <div className="w-full max-w-screen-2xl min-h-screen px-4 sm:px-8 lg:px-[90px] py-6 bg-gray-300 mx-auto">
      {/* Header Section */}
      <div className="w-full mb-6">
        <div className="flex items-center space-x-4 mb-2">
          <p className="font-semibold text-sm text-gray-500 font-sans">
            PORTFÓLIO
          </p>
          <div className="flex-1 h-px bg-orange-500 max-w-[120px]" />
        </div>
        <h2 className="font-semibold text-lg md:text-xl uppercase text-black font-sans">
          Confira nosso portfólio.
        </h2>
      </div>

     {/* Tabs Section */}
<div className="w-full mb-8">
  <div className="flex flex-wrap gap-3 justify-center">
    {tabs.map((tab, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setFiltro(tab)}
        className={`rounded-full py-1.5 px-2.5 flex items-center space-x-2 focus:outline-none transition-colors duration-200 ${
          filtro === tab ? "bg-white" : "bg-gray-100"
        }`}
      >
        <div
          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 ${
            filtro === tab ? "bg-orange-500" : "bg-orange-300"
          }`}
        >
          <Check
            className={`w-6 h-5 text-white ${
              filtro === tab ? "" : "opacity-50"
            }`}
          />
        </div>
        <span
          className={`font-semibold text-xs whitespace-nowrap font-sans ${
            filtro === tab ? "text-orange-500" : "text-orange-300"
          }`}
        >
          {tab}
        </span>
      </button>
       ))}
       </div>
       </div>


      {/* Portfolio Grid */}
      <div className="w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projetosFiltrados.map(({ id, imageNumber }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={`/portfolio/img${imageNumber}.jpg`}
                alt={`Projeto ${id + 1}`}
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

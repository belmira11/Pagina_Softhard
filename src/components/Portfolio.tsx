import { Check } from "lucide-react";

export default function PortfolioMain() {
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
          Confira nosso portfólio
        </h2>
      </div>

      {/* Tabs Section */}
      <div className="w-full mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "Todos os projetos",
            "Desenvolvimento Web",
            "Design Gráfico",
            "Suporte Audiovisual",
          ].map((tab, i) => (
            <div
              key={i}
              className={`rounded-full py-3 px-4 flex items-center space-x-2 shadow-sm ${
                i === 0 ? "bg-white" : "bg-gray-100 rounded-md"
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-[10px] h-[8px] text-white" />
              </div>
              <p className="font-semibold text-sm text-orange-500 whitespace-nowrap font-sans">
                {tab}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => {
            const imageNumber = [0, 4].includes(index)
              ? 1
              : [1, 5].includes(index)
              ? 2
              : [2, 6].includes(index)
              ? 3
              : 1;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`/portfolio/img${imageNumber}.jpg`}
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

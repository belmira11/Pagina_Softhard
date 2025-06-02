import { Check } from "lucide-react";

export default function PortfolioMain() {
  return (
    <div className="w-full max-w-[1728px] h-[900px] px-[90px] py-[25px] bg-gray-300">
      {/* Header Section */}
      <div className="w-full max-w-[1548px] mb-[25px]">
        <div className="flex items-center space-x-[15px] mb-[10px]">
          <p className="font-semibold text-[14px] leading-[100%] text-gray-500 font-sans">
            PORTFÓLIO
          </p>
          <div className="flex-1 h-[1px] bg-orange-500 max-w-[120px]" />
        </div>
        <h2 className="font-semibold text-[20px] leading-[100%] uppercase text-black font-sans">
          Confira nosso portfólio
        </h2>
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-[1548px] mb-[35px]">
        <div className="flex flex-wrap space-x-[10px] justify-center">

          {/* Tab 1 - Active */}
          <div className="rounded-full py-[12px] px-[16px] flex items-center bg-white space-x-[8px] shadow-sm">
            <div className="w-[20px] h-[20px] rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-[10px] h-[8px] text-white" />
            </div>
            <p className="font-semibold text-[14px] text-orange-500 whitespace-nowrap font-sans">
              Todos os projetos
            </p>
          </div>

          {/* Tab 2 */}
          <div className="rounded-[5px] py-[12px] px-[16px] flex items-center bg-gray-100 space-x-[8px]">
            <div className="w-[20px] h-[20px] rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-[10px] h-[8px] text-white" />
            </div>
            <p className="font-semibold text-[14px] text-orange-500 whitespace-nowrap font-sans">
              Desenvolvimento Web
            </p>
          </div>

          {/* Tab 3 */}
          <div className="rounded-[5px] py-[12px] px-[16px] flex items-center bg-gray-100 space-x-[8px]">
            <div className="w-[20px] h-[20px] rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-[10px] h-[8px] text-white" />
            </div>
            <p className="font-semibold text-[14px] text-orange-500 whitespace-nowrap font-sans">
              Design Gráfico
            </p>
          </div>

          {/* Tab 4 */}
          <div className="rounded-[5px] py-[12px] px-[16px] flex items-center bg-gray-100 space-x-[8px]">
            <div className="w-[20px] h-[20px] rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-[10px] h-[8px] text-white" />
            </div>
            <p className="font-semibold text-[14px] text-orange-500 whitespace-nowrap font-sans">
              Suporte Audiovisual
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="w-full max-w-[1678px] px-[25px]">
        <div className="grid grid-cols-4 gap-[25px]">
          {[...Array(8)].map((_, index) => {
            // Define qual imagem usar baseado na posição
            let imageNumber;
            if (index === 0 || index === 4) {
              imageNumber = 1;
            } else if (index === 1 || index === 5) {
              imageNumber = 2;
            } else if (index === 2 || index === 6) {
              imageNumber = 3;
            } else if (index === 3 || index === 7) {
              imageNumber = 1;
            }
            
            return (
              <div 
                key={index}
                className="aspect-[400/290] rounded-[15px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={`/portfolio/img${imageNumber}.jpg`}
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

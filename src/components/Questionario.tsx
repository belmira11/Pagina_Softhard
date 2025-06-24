'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqList = [
  {
    pergunta: 'O que é a Softhard?',
    resposta:
      'A Softhard é uma academia e empresa de soluções digitais que oferece formação, consultoria e desenvolvimento de projetos nas áreas de tecnologia e comunicação.',
  },
  {
    pergunta: 'Quais serviços vocês oferecem?',
    resposta:
      'Oferecemos marketing digital, desenvolvimento web, design gráfico, consultoria tecnológica e muito mais — tudo feito sob medida para o seu negócio.',
  },
  {
    pergunta: 'Como posso inscrever-me em uma formação?',
    resposta:
      'Você pode acessar a seção "Serviços" ou "Formações", escolher a opção desejada e preencher o formulário com seus dados.',
  },
  {
    pergunta: 'As formações são presenciais ou online?',
    resposta:
      'Nossas formações são majoritariamente online, mas também oferecemos opções presenciais em datas específicas.',
  },
  {
    pergunta: 'Como posso entrar em contato com a Softhard?',
    resposta:
      'Você pode entrar em contato conosco através do formulário no site, pelo e-mail contato@softhard.com ou pelo nosso WhatsApp disponível na página inicial.',
  },
  {
    pergunta: 'A Softhard desenvolve projetos personalizados para empresas?',
    resposta:
      'Sim! Desenvolvemos soluções digitais sob medida para atender às necessidades específicas de cada empresa, desde sites institucionais até sistemas completos.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 px-2 md:px-8 bg-gray-300 text-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-left text-lg md:text-xl font-bold mb-8">
          Questões Frequentes
        </h2>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl transition w-full md:w-[90%] mx-auto"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-3 md:px-6 py-1 md:py-2 flex justify-between items-center text-left text-xs md:text-sm font-semibold text-black min-h-0"
              >
                {item.pergunta}
                {openIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openIndex === index && (
                <div className="px-3 md:px-6 pb-1 md:pb-2 text-xs md:text-xs text-black">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
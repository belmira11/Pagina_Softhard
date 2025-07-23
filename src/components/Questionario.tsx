'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = [
    {
      pergunta: 'Quem é a Softhard e o que ela faz de diferente?',
      resposta:
        'A Softhard é mais do que uma empresa de tecnologia — somos uma academia de inovação que forma talentos e transforma ideias em soluções digitais incríveis.',
    },
    {
      pergunta: 'Como vocês podem ajudar o meu negócio a crescer?',
      resposta:
        'Com estratégias personalizadas de marketing digital, desenvolvimento web sob medida e uma abordagem criativa que coloca os seus objetivos em primeiro lugar.',
    },
    {
      pergunta: 'Quero fazer parte! Como me inscrevo nas formações?',
      resposta:
        'É fácil! Acesse a seção "Formações", escolha a área do seu interesse e preencha o formulário com seus dados. Nós cuidamos do resto.',
    },
    {
      pergunta: 'As formações são online ou presenciais?',
      resposta:
        'Oferecemos formações online para todo o país e turmas presenciais em Luanda em datas especiais. Flexibilidade que se adapta a você!',
    },
    {
      pergunta: 'Como entro em contato com a Softhard?',
      resposta:
        'Você pode nos chamar no WhatsApp, mandar um e-mail para contato@softhard.com ou preencher o formulário na seção "Contato". Estamos sempre prontos para conversar!',
    },
    {
      pergunta: 'Posso contratar a Softhard para um projeto exclusivo?',
      resposta:
        'Sim! Desenvolvemos projetos personalizados que atendem às necessidades da sua empresa, com foco em inovação, usabilidade e impacto digital.',
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[var(--color-bg-muted)] py-14 px-4 md:px-8 text-black font-primary"
    >
      <div className="max-w-[1210px] mx-auto">
        {/* Título alinhado à esquerda */}
        <div className="mb-10 text-left">
          <p className="uppercase text-xs text-text-muted font-bold tracking-wide mb-1">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-text-semi-muted mt-2">
            Ainda com dúvidas? Aqui estão algumas respostas para te ajudar.
          </p>
        </div>

        {/* Lista de perguntas - cards mais largos */}
        <div className="space-y-5">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all w-full"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left text-sm font-semibold text-black hover:bg-gray-50 transition"
              >
                {item.pergunta}
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary" />
                ) : (
                  <ChevronDown size={20} className="text-primary" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-sm text-gray-600 transition-all duration-300 ease-in-out">
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

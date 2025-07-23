'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContatoSection() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado pelo seu contato, ${form.nome}!`);
    setForm({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-10 px-4 sm:px-6 md:px-8 bg-pink-50 text-gray-800">
      {/* Título alinhado à esquerda */}
      <div className="mb-6">
        <h2 className="text-left text-2xl sm:text-3xl font-bold leading-tight text-orange-500">
          <span className="flex items-center gap-2">
            Contacto
            <span className="w-10 h-0.5 bg-red-400 ml-1"></span>
          </span>
          <span className="block text-gray-900">Fale Conosco</span>
        </h2>
      </div>

      {/* Formulário responsivo centralizado */}
      <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-[820px] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md grid gap-5"
        >
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Seu email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <input
            type="text"
            name="assunto"
            value={form.assunto}
            onChange={handleChange}
            required
            placeholder="Assunto"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <textarea
            name="mensagem"
            rows={4}
            value={form.mensagem}
            onChange={handleChange}
            required
            placeholder="Escreva sua mensagem"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-red-500 text-white text-sm font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all"
          >
            Enviar Mensagem <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

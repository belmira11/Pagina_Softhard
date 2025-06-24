'use client';
import { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

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
    <section id="contato" className="py-6 px-4 md:px-6 bg-pink-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <h2 className="text-left text-lg md:text-xl font-bold leading-tight">
            <span className="flex items-center gap-2">
              Entre
              <span className="w-8 h-0.5 bg-red-400 ml-1"></span>
            </span>
            <span className="ml-5 block">em Contato</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Formulário */}
          <div className="bg-white p-3 rounded-lg shadow-sm space-y-3">
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Nome"
              className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            <input
              type="text"
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              required
              placeholder="Assunto"
              className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            <textarea
              name="mensagem"
              rows={3}
              value={form.mensagem}
              onChange={handleChange}
              required
              placeholder="Mensagem"
              className="w-full border border-gray-300 rounded-md px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-red-400 resize-none focus:outline-none"
            />
            <div className="text-left">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-orange-500 text-white font-semibold py-1.5 px-4 text-xs rounded-full hover:bg-red-500 transition cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="bg-white p-3 rounded-lg shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="text-orange-500" size={14} />
                <p>Rua dos Engenheiros, Luanda - Angola</p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="text-orange-500" size={14} />
                <p>+244 923 456 789</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="text-orange-500" size={14} />
                <p>contato@softhard.ao</p>
              </div>
              <div className="flex gap-2.5 mt-2">
                <a href="https://facebook.com/academiasofthard" target="_blank" rel="noopener noreferrer">
                  <Facebook className="text-red-400 hover:text-red-500" size={16} />
                </a>
                <a href="https://instagram.com/academiasofthard" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-red-400 hover:text-red-500" size={16} />
                </a>
                <a href="https://linkedin.com/company/academiasofthard" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-red-400 hover:text-red-500" size={16} />
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-md overflow-hidden w-full aspect-video min-h-[120px]">
              <iframe
                src="https://maps.google.com/maps?q=Luanda,%20Angola&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
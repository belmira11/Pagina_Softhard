'use client';
import { useState } from 'react';

export default function FormConsulta() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    empresa: '',
    servico: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Consulta enviada com sucesso!\nNome: ${form.nome}\nTelefone: ${form.telefone}\nEmpresa: ${form.empresa}\nServiço: ${form.servico}`);
    setForm({ nome: '', telefone: '', empresa: '', servico: '' });
  };

  return (
    <section id="form-consulta" className="bg-[var(--color-primary)] text-white py-12 px-6">
      <div className="max-w-xl mx-auto bg-white text-black p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-[var(--color-primary)]">Consulta Gratuita</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
          <input
            type="tel"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="Telefone (WhatsApp)"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nome da empresa"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
          <select
            name="servico"
            value={form.servico}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="" disabled>Selecione um serviço de interesse</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Desenvolvimento Web">Desenvolvimento Web</option>
            <option value="Design Gráfico">Design Gráfico</option>
            <option value="Consultoria Tecnológica">Consultoria Tecnológica</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white py-2 rounded-full text-sm font-bold hover:bg-[var(--color-hover)] transition"
          >
            Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
}

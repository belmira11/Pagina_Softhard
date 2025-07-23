'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function HowWeWorkSection() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => setShowForm((prev) => !prev);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
  };

  return (
    <section
      className="w-full min-h-[494px] py-10 bg-[var(--color-border)]"
      style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--font-size-base)',
      }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-[90px]">
        {/* Lado esquerdo */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="inline-flex items-center bg-white rounded-md px-2 py-1 border border-white/20 w-fit">
            <span className="text-[var(--color-primary)] text-[10px] font-bold">
              NÃO PERCA
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-black)]">
            Revolucione sua experiência digital hoje
          </h2>

          <p className="text-sm text-[var(--text-semi-muted)] leading-relaxed">
            A Strategia acelera o crescimento do seu negócio por meio de soluções inovadoras e tecnologia de ponta.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Atendimento 24/7h", "Suporte Premium", "Prontidão para começar."].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 bg-white rounded-md px-2 py-1 border border-white/30"
              >
                <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] text-[10px] font-semibold whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleToggleForm}
            className="bg-gradient-to-r from-[var(--color-primary)] to-[#E55100] hover:from-[#E55100] hover:to-[#D84315] px-4 py-2 text-xs font-semibold rounded-full text-white w-fit mt-2"
          >
            Marcar Consulta Gratuita
          </button>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-lg p-4 mt-4 shadow-md flex flex-col gap-3 w-full max-w-lg text-sm"
            >
              <label className="flex flex-col">
                Nome
                <input type="text" required className="mt-1 border border-gray-300 rounded px-2 py-1" />
              </label>
              <label className="flex flex-col">
                WhatsApp
                <input type="tel" required className="mt-1 border border-gray-300 rounded px-2 py-1" />
              </label>
              <label className="flex flex-col">
                Nome da Empresa
                <input type="text" className="mt-1 border border-gray-300 rounded px-2 py-1" />
              </label>
              <label className="flex flex-col">
                Serviço de Interesse
                <select required className="mt-1 border border-gray-300 rounded px-2 py-1">
                  <option value="">Selecione um serviço</option>
                  <option value="Marketing Digital">Marketing Digital</option>
                  <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                  <option value="Branding">Branding</option>
                  <option value="Consultoria Estratégica">Consultoria Estratégica</option>
                </select>
              </label>
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[#D84315] text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Enviar
              </button>
            </form>
          )}
        </div>

        {/* Lado direito - Imagem */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[344px] overflow-hidden rounded-3xl">
            <Image
              src="/fff.jpg"
              alt="Como Trabalhamos"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

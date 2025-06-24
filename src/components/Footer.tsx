'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscreveste com o email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-white py-12 px-6 mb-4">
      <div className="relative bg-orange-500 pt-24 pb-6 px-6 rounded-[30px] shadow-lg text-white max-w-7xl mx-auto">

        {/* Notificação */}
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-[#3427E1] w-[90%] md:w-[60%] px-6 py-5 flex flex-col md:flex-row items-center justify-between shadow-lg text-white text-xs md:text-sm rounded-bl-[40px] rounded-tr-[40px]">
          <p className="font-medium text-center md:text-left mb-3 md:mb-0 leading-tight">
            Receba Notificações de <br /> Atualizações e novidades!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full md:w-auto items-center">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-white whitespace-nowrap">Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white border-0 border-b border-white outline-none placeholder-white text-xs min-w-[150px]"
                placeholder=""
                required
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full hover:bg-orange-400 transition uppercase text-xs"
            >
              subscrever
            </button>
          </form>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between gap-10">
          {/* Logo e slogan */}
          <div className="flex flex-col items-start gap-2">
            <br />
            <br />
            <div className="flex items-center gap-3">
              <Image src="/academia-white.png" alt="Logo" width={48} height={48} />
              <div className="flex flex-col">
                <p className="text-lg font-bold"> SOFTHARD</p>
                <p className="text-sm">Um clique, um mundo de Oportunidades</p>
              </div>
            </div>
          </div>

          {/* Links reais */}
          <div className="pl-2 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm justify-center">
            <div>
              <p className="font-semibold text-white text-base mb-2">Empresa</p>
              <ul className="space-y-1">
                <li><a href="/sobre" className="text-white/80 hover:text-white transition">Sobre</a></li>
                <li><a href="/equipa" className="text-white/80 hover:text-white transition">Equipa</a></li>
                <li><a href="/softhard" className="text-white/80 hover:text-white transition">Softhard</a></li>
                <li><a href="/laboratorio" className="text-white/80 hover:text-white transition">Laboratório Softhard</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white text-base mb-2">Oportunidades</p>
              <ul className="space-y-1">
                <li><a href="/bolsas" className="text-white/80 hover:text-white transition">Bolsas de Estudo</a></li>
                <li><a href="/estagios" className="text-white/80 hover:text-white transition">Estágios</a></li>
                <li><a href="/professor" className="text-white/80 hover:text-white transition">Quero ser Professor</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white text-base mb-2">Sistema</p>
              <ul className="space-y-1">
                <li><a href="/privacidade" className="text-white/80 hover:text-white transition">Políticas de Privacidade</a></li>
                <li><a href="/termos" className="text-white/80 hover:text-white transition">Termos</a></li>
                <li><a href="/feedback" className="text-white/80 hover:text-white transition">Feedback</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white text-base mb-2">Redes Sociais</p>
              <div className="flex gap-4 mt-2 flex-wrap">
                <a href="https://facebook.com/academiasofthard" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><Facebook size={20} /></a>
                <a href="https://instagram.com/academiasofthard" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><Instagram size={20} /></a>
                <a href="https://linkedin.com/company/academiasofthard" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><Linkedin size={20} /></a>
                <a href="https://github.com/academiasofthard" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><Github size={20} /></a>
                <a href="https://youtube.com/@academiasofthard" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8">
          <hr className="border-white opacity-70 my-4 w-4/5 mx-auto" />
          <p>
            © {new Date().getFullYear()} Academia Softhard. Todos os Direitos Reservados. <br />
            Feito pelo <a href="https://www.facebook.com" target="_blank" className="font-bold underline text-black">Laboratório Softhard</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

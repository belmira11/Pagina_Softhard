import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Equipe = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Denilson Costa",
      title: "Chief Executive Officer",
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 2,
      name: "Denilson Costa",
      title: "Chief Executive Officer",
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 3,
      name: "Denilson Costa",
      title: "Chief Executive Officer",
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 4,
      name: "Denilson Costa",
      title: "Chief Executive Officer",
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 5,
      name: "Denilson Costa",
      title: "Chief Executive Officer",
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 6,
      name: "Denilson Costa",
      title: "Chief Executive Officer",
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <section className="mx-auto flex flex-col items-center bg-[var(--color-bg-muted)] px-4 py-10">
      {/* Cabeçalho */}
      <div className="w-full max-w-[1200px] flex flex-col gap-[10px] mb-6">
        <div className="flex items-center gap-2">
          <p className="font-primary text-xs font-semibold text-text-muted uppercase">EQUIPE</p>
          <div className="h-px bg-primary flex-1 max-w-[150px]" />
        </div>
        <h2 className="text-lg md:text-2xl font-bold uppercase text-black font-primary">
          CONHEÇA OS NOSSOS PROFISSIONAIS
        </h2>
      </div>

      {/* Grid de Cards */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex bg-white border-2 border-white rounded-[8px] overflow-hidden hover:shadow-md transition w-full h-[160px]"
          >
            {/* Imagem */}
            <div className="w-[100px] h-full relative flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-l-[8px]"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 p-3 flex flex-col justify-between">
              <div>
                <h3 className="font-primary font-semibold text-base text-black mb-1">
                  {member.name}
                </h3>
                <div className="text-xs text-text-semi-muted">
                  <div className="font-medium mb-1">{member.title}</div>
                  <p className="text-xs leading-snug">{member.description}</p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex gap-2 mt-3">
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-md hover:bg-primary/10 transition">
                  <Facebook size={16} color="#FF6100" strokeWidth={2} />
                </a>
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-md hover:bg-primary/10 transition">
                  <Instagram size={16} color="#FF6100" strokeWidth={2} />
                </a>
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-md hover:bg-primary/10 transition">
                  <Linkedin size={16} color="#FF6100" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipe;

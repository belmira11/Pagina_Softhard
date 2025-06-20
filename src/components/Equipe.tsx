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
      id: 2, name: "Denilson Costa", title: "Chief Executive Officer",
       description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
        image: "/imagem.png", socials: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
    },
    {
      id: 3, name: "Denilson Costa", title: "Chief Executive Officer",
       description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
        image: "/imagem.png", socials: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
    },
    {
      id: 4, name: "Denilson Costa", title: "Chief Executive Officer", 
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
        image: "/imagem.png", socials: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
    },
    {
      id: 5, name: "Denilson Costa", title: "Chief Executive Officer", 
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.", 
      image: "/imagem.png", socials: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
    },
    {
      id: 6, name: "Denilson Costa", title: "Chief Executive Officer", 
      description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum.",
      image: "/imagem.png", socials: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
    }
  ];

  return (
    <section className="w-full bg-[#F8EDED] px-4 sm:px-6 lg:px-[60px] py-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Título */}
        <div className="flex items-center gap-2 mb-4">
          <p className="font-poppins text-xs font-semibold text-[#00000099]">EQUIPA</p>
          <div className="h-px bg-[#FF6100] flex-1 max-w-[150px]" />
        </div>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold uppercase text-black mb-6">
          CONHEÇA OS NOSSOS PROFISSIONAIS
        </h2>

        {/* Grid com 2 colunas e centralizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col sm:flex-row bg-[#EDF1F4] border border-white rounded-md overflow-hidden hover:shadow transition w-full max-w-[480px] mx-auto"
            >
              {/* Imagem */}
              <div className="w-full sm:w-[140px] h-[160px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-semibold text-sm text-black mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs text-[#000000CC]">
                    <div className="font-medium mb-1">{member.title}</div>
                    <p className="text-[11px] leading-snug">{member.description}</p>
                  </div>
                </div>

                {/* Redes sociais */}
                <div className="flex gap-2 mt-3">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-white rounded-md hover:bg-white transition">
                    <Facebook size={16} color="#FF6100" strokeWidth={2} />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-white rounded-md hover:bg-white transition">
                    <Instagram size={16} color="#FF6100" strokeWidth={2} />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-white rounded-md hover:bg-white transition">
                    <Linkedin size={16} color="#FF6100" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipe;

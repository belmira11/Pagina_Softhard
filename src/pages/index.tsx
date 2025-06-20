
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ChatButton from "@/components/ChatButton";
import AboutSobre from "@/components/AboutSobre";
import Testemunha from "@/components/Testemunha";
import Servico from "@/components/Servico";
import HowWork from "@/components/HowWork";
import Trabalhamos from "@/components/Trabalhamos";
import Portfolio from "@/components/Portfolio";
import Equipe from "@/components/equipe";
export default function Home() {
  return (
    <>
     <Navbar/>  
     <Banner/>
     <ChatButton/>
       <AboutSobre/>
       <Testemunha/>
        <Servico/>
        <HowWork/>
         <Trabalhamos/>
         <Portfolio/>
         <Equipe/>
     </>
  );
}


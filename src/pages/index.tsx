
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ChatButton from "@/components/ChatButton";
import AboutSobre from "@/components/AboutSobre";
import Testemunha from "@/components/Testemunha";
import Servico from "@/components/Servico";
import HowWork from "@/components/HowWork";
import Trabalhamos from "@/components/Trabalhamos";
export default function Home() {
  return (
    <>
     <div className="bg-white min-h-screen">
    

     <Navbar/>
    
     <Banner/>
     <ChatButton/>
       <AboutSobre/>
       <Testemunha/>
        <Servico/>
        <HowWork/>
         <Trabalhamos/>
     </div>
    </>
  );
}

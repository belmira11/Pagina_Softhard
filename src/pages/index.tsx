import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ChatButton from "@/components/ChatButton";
import AboutSobre from "@/components/AboutSobre";
import Testemunha from "@/components/Testemunha";
import Servico from "@/components/Servico";
import HowWork from "@/components/HowWork";
import Trabalhamos from "@/components/Trabalhamos";
import Portfolio from "@/components/Portfolio";
import Equipe from "@/components/Equipe"
import FAQSection from "@/components/Questionario";
import ContatoSection from "@/components/Contato";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
      <Head>
        <title>Softhard - Tecnologia Comunicação</title>
        <meta name="description" content="Encontre conosco um departamento de marketing externo para a sua empresa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Softhard - Tecnologia Comunicação" />
        <meta property="og:description" content="Encontre conosco um departamento de marketing externo para a sua empresa." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Head>
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
      <FAQSection/>
      <ContatoSection/>
      <Footer/>
    </>
  );
}


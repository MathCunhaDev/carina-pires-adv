import { Metadata } from "next";
import * as Molecules from "@/components/molecules";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Home - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Home - Carina Pires Advocacia",
  keywords:
    "Advogado, Advogado criminal, Advogado bancario, Advogado trabalhista, Advogado civil, Advogado de familia, Advogado inventario, Advogado imobiliário, Pensão alimentícia, Divórcio, Regularização de imovel, Golpe do pix, Ação de busca e apreensão, Habeas corpus preventivo, Maconha legalizada, Danos morais, Processo criminal, Intimação, Fórum criminal, Fórum cível, Escritorio de advocacia",
};

export default function Home() {
  return (
    <>
      <section className="hero-container">
        <Organisms.Hero
          key={"hero"}
          title="Defendendo seus direitos, protegendo seu futuro."
        >
          Entendemos que cada caso é único e merece atenção personalizada. Somos
          um escritório de advocacia especializado com visão 360º e comprometido
          em oferecer soluções jurídicas eficazes e acessíveis para você e sua
          família em todas as etapas da sua vida.
        </Organisms.Hero>
        <Organisms.Carousel />
      </section>
      <Atoms.SalesTitle>Somos especialistas no que fazemos</Atoms.SalesTitle>
      <Molecules.ProofData />
      <Organisms.ContactCard />
      <Organisms.Review />
      <Organisms.RightsCards />
    </>
  );
}

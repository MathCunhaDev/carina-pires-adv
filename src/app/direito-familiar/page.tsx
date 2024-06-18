import { Metadata } from "next";
import { realEstateCardsData } from "@/constants/realEstateCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Família - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Família - Carina Pires Advocacia",
  keywords:
    "advocacia familiar, advogado de família, direito de família, divórcio, guarda de filhos, pensão alimentícia, inventário, partilha de bens, mediação familiar, consultoria familiar",
};

export default function Familia() {
  return (
    <>
      <Atoms.MainTitle>
        Advocacia Especializada em Direito de Família
      </Atoms.MainTitle>
      <Atoms.SubTitle>
        Criando soluções para a vida da sua família
      </Atoms.SubTitle>
      <Atoms.Description>
        Oferecemos uma ampla gama de serviços especializados para a resolução de
        diversos aspectos da vida familiar, do início ao fim.
      </Atoms.Description>
      <Organisms.CaseCards cards={realEstateCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

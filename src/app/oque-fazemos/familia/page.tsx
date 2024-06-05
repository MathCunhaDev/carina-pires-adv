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
      <Atoms.MainTitle>Família</Atoms.MainTitle>
      <Atoms.SubTitle>Conheça todos os nossos casos famíliares</Atoms.SubTitle>
      <Organisms.CaseCards cards={realEstateCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

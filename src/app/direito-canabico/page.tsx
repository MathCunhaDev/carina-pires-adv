import { Metadata } from "next";
import { cannabisCardsData } from "@/constants/cannabisCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Cannabis - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Cannabis - Carina Pires Advocacia",
  keywords:
    "advocacia canábica, direito canábico, habeas corpus preventivo, cannabis, autorização para plantio, maconha, maconha medicinal, terapia canábica, cdb, óleo de maconha, agronomia canábica, maconha legalizada",
};

export default function Canabico() {
  return (
    <>
      <Atoms.MainTitle>
        Advocacia Especializada Em Direito Canábico
      </Atoms.MainTitle>
      <Atoms.SubTitle>Viabilizando Tratamento Canábico</Atoms.SubTitle>
      <Atoms.Description>
        Atuação no âmbito preventivo de plantio, porte e consumo de cannabis
        para fins medicinais.
      </Atoms.Description>
      <Organisms.CaseCards cards={cannabisCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

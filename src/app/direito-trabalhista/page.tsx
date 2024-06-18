import { Metadata } from "next";
import { laborCardsData } from "@/constants/laborCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Trabalhista - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Trabalhista - Carina Pires Advocacia",
  keywords:
    "advocacia trabalhista, advogado trabalhista, direito trabalhista, reclamatória trabalhista, consultoria trabalhista, assédio no trabalho, demissão por justa causa, direitos do trabalhador, negociação coletiva, acidente de trabalho",
};

export default function Trabalhista() {
  return (
    <>
      <Atoms.MainTitle>
        Advocacia Especializada em Direito do Trabalho
      </Atoms.MainTitle>
      <Atoms.SubTitle>Garantindo seus direitos trabalhistas</Atoms.SubTitle>
      <Atoms.Description>
        Oferecemos uma ampla gama de soluções para relações trabalhistas
      </Atoms.Description>
      <Organisms.CaseCards cards={laborCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

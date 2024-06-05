import { Metadata } from "next";
import { criminalCardsData } from "@/constants/criminalCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Criminal - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Criminal - Carina Pires Advocacia",
  keywords:
    "advocacia criminal, advogado criminalista, defesa criminal, direito penal, crimes econômicos, tribunal do júri, processo penal, consultoria criminal, habeas corpus, assessoria criminal",
};

export default function Criminal() {
  return (
    <>
      <Atoms.MainTitle>Criminal</Atoms.MainTitle>
      <Atoms.SubTitle>Conheça todos os nossos casos criminais</Atoms.SubTitle>
      <Organisms.CaseCards cards={criminalCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

import { Metadata } from "next";
import { bankCardsData } from "@/constants/bankCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Bancário - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Bancário - Carina Pires Advocacia",
  keywords:
    "advocacia bancária, advogado bancário, assessoria jurídica bancária, direito bancário, contrato bancário, litígio bancário, consultoria bancária, compliance bancário, direito financeiro, legislação bancária",
};

export default function Bancario() {
  return (
    <>
      <Atoms.MainTitle>
        Encontre soluções para seus problemas bancários
      </Atoms.MainTitle>
      <Atoms.SubTitle>
        Especialistas em resolver questões bancárias
      </Atoms.SubTitle>
      <Organisms.CaseCards cards={bankCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

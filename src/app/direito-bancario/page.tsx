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
    "advocacia bancária, advogado bancário, assessoria jurídica bancária, direito bancário, contrato bancário, litígio bancário, consultoria bancária, compliance bancário, direito financeiro, legislação bancária, golpe do pix",
};

export default function Bancario() {
  return (
    <>
      <Atoms.MainTitle>
        Advocacia Especializada em Direito Bancário
      </Atoms.MainTitle>
      <Atoms.SubTitle>Protegendo Seus Interesses Financeiros </Atoms.SubTitle>
      <Atoms.Description>
        Oferecemos uma ampla gama de serviços para proteger seus interesses
        financeiros. Com anos de experiência no setor, estamos preparados para
        lidar com litígios bancários, negociações de dívidas, contratos
        financeiros e outras questões relacionadas a instituições financeiras.
      </Atoms.Description>
      <Organisms.CaseCards cards={bankCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

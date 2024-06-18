import { Metadata } from "next";
import { realEstateCardsData } from "@/constants/realEstateCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Imobiliário - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Imobiliário - Carina Pires Advocacia",
  keywords:
    "advocacia imobiliária, advogado imobiliário, direito imobiliário, contrato de compra e venda, regularização de imóveis, financiamento imobiliário, consultoria imobiliária, litígio imobiliário, locação de imóveis, usucapião",
};

export default function Imobiliario() {
  return (
    <>
      <Atoms.MainTitle>
        Advocacia Especializada em Direito Imobiliário
      </Atoms.MainTitle>
      <Atoms.SubTitle>
        Segurança Jurídica em Transações Imobiliárias
      </Atoms.SubTitle>
      <Atoms.Description>
        Oferecemos uma gama completa de serviços imobiliários de alto nível para
        a realização de transações imobiliárias de pequeno, médio e grande
        porte.
      </Atoms.Description>
      <Organisms.CaseCards cards={realEstateCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

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
      <Atoms.MainTitle>Imobiliário</Atoms.MainTitle>
      <Atoms.SubTitle>
        Conheça todos os nossos casos imobiliários
      </Atoms.SubTitle>
      <Organisms.CaseCards cards={realEstateCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

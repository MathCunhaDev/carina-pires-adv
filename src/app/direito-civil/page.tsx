import { Metadata } from "next";
import { realEstateCardsData } from "@/constants/realEstateCardsData";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Cível - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Cível - Carina Pires Advocacia",
  keywords:
    "advocacia cível, advogado cível, direito cível, processo cível, litígio cível, ações cíveis, consultoria cível, defesa cível, direito civil, mediação cível",
};

export default function Civel() {
  return (
    <>
      <Atoms.MainTitle>
        Advocacia Especializada Em Direito Civil
      </Atoms.MainTitle>
      <Atoms.SubTitle>
        Defendendo Seus Direitos Em Todas As Áreas Do Processo Cível
      </Atoms.SubTitle>
      <Organisms.CaseCards cards={realEstateCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

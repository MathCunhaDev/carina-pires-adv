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
      <Atoms.MainTitle>
        Advocacia Especializada em Direito Criminal
      </Atoms.MainTitle>
      <Atoms.SubTitle>
        Defendendo Seus Direitos em Todas as Fases do Processo Penal
      </Atoms.SubTitle>
      <Atoms.Description>
        Na Carina Pires Advocacia, nossa missão é proteger seus direitos e
        garantir um julgamento justo em todas as fases do processo penal. Com
        anos de experiência e um profundo conhecimento das leis criminais,
        estamos capacitados para fornecer uma defesa estratégica e dedicada aos
        nossos clientes. Se você está enfrentando acusações criminais, não
        precisa enfrentar isso sozinho. Nossa equipe de advogados criminalistas
        está pronta para atuar rapidamente, assegurando que seus direitos sejam
        preservados e que você receba uma defesa robusta e personalizada. Entre
        em contato conosco para uma consulta inicial e descubra como nossa
        experiência pode fazer a diferença no seu caso. Estamos aqui para
        defender você com determinaçãoes e integridade.
      </Atoms.Description>
      <Organisms.CaseCards cards={criminalCardsData} />
      <Organisms.ContactCard />
    </>
  );
}

import Image1 from "/public/criminal-case-1.png";
import Image2 from "/public/criminal-case-2.png";
import Image3 from "/public/criminal-case-3.png";
import Image4 from "/public/criminal-case-4.png";
import Image5 from "/public/criminal-case-5.png";
import Image6 from "/public/criminal-case-6.png";
import Image7 from "/public/criminal-case-7.png";
import Image8 from "/public/criminal-case-8.png";
import Image9 from "/public/criminal-case-9.png";

import { StaticImageData } from "next/image";

export interface CrimeLandingCardsProps {
  image: StaticImageData;
  title: string;
  cases: string[];
}

export const crimeLandingCards: CrimeLandingCardsProps[] = [
  {
    image: Image1,
    title: "Crimes cometidos por funcionários públicos:",
    cases: ["Crime praticado por funcionário público"],
  },
  {
    image: Image2,
    title: "Prisão e medidas relacionadas:",
    cases: [
      "Prisão em flagrante e prisão preventiva",
      "Liberdade provisória e medidas cautelares",
    ],
  },
  {
    image: Image3,
    title: "Instrução processual e recursos criminais:",
    cases: [
      "Estratégia sólida e revisão criteriosa em todas as fases do processo, buscando sempre o melhor resultado.",
    ],
  },
  {
    image: Image4,
    title: "Acordos de colaboração premiada e não persecução penal:",
    cases: [
      "Soluções eficazes e benefícios maximizados em situações complexas antes do julgamento.",
    ],
  },
  {
    image: Image5,
    title: "Execução e revisão criminal:",
    cases: [
      "Defesa contínua e reabertura de processos para corrigir injustiças e garantir seus direitos.",
    ],
  },
  {
    image: Image6,
    title: "Assistência à vítima:",
    cases: [
      "Apoio jurídico completo para vítimas de crimes, garantindo que a justiça seja feita.",
    ],
  },
  {
    image: Image7,
    title: "Crimes contra a ordem pública:",
    cases: ["Organização criminosa", "Tráfico de drogas"],
  },
  {
    image: Image8,
    title: "Crimes contra a pessoa:",
    cases: ["Violência doméstica", "Crimes contra a honra"],
  },
  {
    image: Image9,
    title: "Crimes econômicos e financeiros:",
    cases: ["Lavagem de dinheiro", "Crime tributário"],
  },
];

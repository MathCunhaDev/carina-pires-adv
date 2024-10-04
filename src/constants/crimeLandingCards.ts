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
    image: Image3,
    title: "Crimes Contra a Honra:",
    cases: [
      "Especialistas em defesa contra calúnia, difamação e injúria. Defenda sua honra com o suporte de uma equipe altamente qualificada.",
    ],
  },
  {
    image: Image4,
    title: "Crimes Patrimoniais:",
    cases: [
      "Defesa experiente em casos de roubo, furto, estelionato e outros crimes contra o patrimônio. Garantimos uma atuação precisa e eficaz para resguardar seus direitos.",
    ],
  },
  {
    image: Image5,
    title: "Crimes Sexuais:",
    cases: [
      "Especialização em defesa de casos complexos como estupro e assédio sexual, com garantia de confidencialidade e abordagem técnica. Buscamos a melhor estratégia para o seu caso.",
    ],
  },
  {
    image: Image6,
    title: "Direito Penal Preventivo:",
    cases: [
      "Estratégias jurídicas para evitar que situações de risco se transformem em processos criminais. Conte com defesa legal especializada para proteger sua integridade e reputação desde o início.",
    ],
  },
  {
    image: Image8,
    title: "Crimes Contra a Vida:",
    cases: [
      "Atuação estratégica e experiente em casos de homicídio, tentativa de homicídio e lesão corporal.",
    ],
  },
  {
    image: Image9,
    title: "Crimes Econômicos:",
    cases: [
      "Defesa robusta em casos de corrupção, lavagem de dinheiro e outros crimes econômicos. Expertise jurídica para lidar com casos de alta complexidade.",
    ],
  },
];

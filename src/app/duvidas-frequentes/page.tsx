import { frequentlyQuestions } from "@/constants/frequentlyQuestions";
import { Metadata } from "next";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Duvidas frequentes - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Duvidas frequentes - Carina Pires Advocacia",
};

export default function Duvidas() {
  return (
    <>
      <Atoms.Container>
        <Organisms.Collapse items={frequentlyQuestions} />
      </Atoms.Container>
      <Organisms.ContactCard />
    </>
  );
}

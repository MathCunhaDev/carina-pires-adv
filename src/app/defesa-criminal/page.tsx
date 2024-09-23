import { Metadata } from "next";
import * as Organisms from "@/components/organisms";
import * as Molecules from "@/components/molecules";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Defesa Criminal - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Defesa Criminal - Carina Pires Advocacia",
  keywords: "",
};

export default function DefesaCriminal() {
  return (
    <>
      <Organisms.LandingHero />
      <Atoms.Divider />
      <Organisms.LandingCard />
      <Atoms.Divider />
      <Organisms.LandingProofCard />
      <Organisms.landingFaq />
      <Molecules.landingFooter />
    </>
  );
}

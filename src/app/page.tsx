import * as Molecules from "@/components/molecules";
import * as Organisms from "@/components/organisms";
import * as Atoms from "@/components/atoms";

export default function Home() {
  return (
    <>
      <Organisms.Header />
      <main className="main">
        <section className="hero-container">
          <Organisms.Hero
            key={"hero"}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          >
            Quisque convallis tellus id nulla lacinia condimentum. Integer
            tempus hendrerit dictum.
          </Organisms.Hero>
          <Organisms.Carousel />
        </section>
        <Atoms.SalesTitle>Somos especialistas no que fazemos</Atoms.SalesTitle>
        <Molecules.ProofData />
        <Organisms.ContactCard />
        <Organisms.Review />
        <Organisms.RightsCards />
      </main>
      <Organisms.Footer />
    </>
  );
}

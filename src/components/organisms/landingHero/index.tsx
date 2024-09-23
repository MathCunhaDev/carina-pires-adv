"use client";

import * as Atoms from "@/components/atoms";
import "./styles.scss";

export function LandingHero() {
  return (
    <section className="landing-hero">
      <section className="landing-hero-container">
        <section className="landing-hero-left">
          <section className="landing-hero-texts">
            <Atoms.LandingHeroTitle>
              Defesa criminal de excelência.
            </Atoms.LandingHeroTitle>
            <Atoms.LandingHeroSubtitle
              texts={["Controle absoluto em ", "cada detalhe"]}
            />
          </section>
          <Atoms.LandingText>
            Advogada especializada em direito criminal: quando sua vida está em
            jogo, apenas “bom”, não é suficiente.
          </Atoms.LandingText>
          <Atoms.LandingText>
            Não arrisque sua liberdade com o profissional errado. Contrate a
            melhor defesa estratégica, com garantia de excelência na busca dos
            melhores resultados para você.
          </Atoms.LandingText>
          <Atoms.LandingButton type="primary">
            Fale com a advogada
          </Atoms.LandingButton>
        </section>
        <section className="landing-hero-right"></section>
      </section>
    </section>
  );
}

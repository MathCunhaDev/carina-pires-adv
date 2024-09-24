"use client";

import { crimeLandingCards } from "@/constants/crimeLandingCards";
import retratoMobile from "/public/background-retrato-mobile.png";
import retratoDesktop from "/public/background-retrato.png";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import * as Atoms from "@/components/atoms";
import "./styles.scss";

export function LandingCard() {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="landing-card-container">
        <Atoms.LandingSubtitle>Áreas de atuação:</Atoms.LandingSubtitle>
        <section className="landing-card-wrapper">
          {crimeLandingCards.map((item, index) => (
            <section className="landing-card-item" key={index}>
              <article className="landing-card-item-wrapper">
                <Image
                  width={237}
                  height={208}
                  src={item.image}
                  alt={item.title}
                />
                <p className="landing-card-item-title">{item.title}</p>
                {item.cases.map((caseItem, caseIndex) => (
                  <p className="landing-card-item-text" key={caseIndex}>
                    {caseItem}
                  </p>
                ))}
              </article>
            </section>
          ))}
        </section>
        <Atoms.LandingButton type="secondary">AGENDE AGORA</Atoms.LandingButton>
      </section>
      <section className="portrait">
        <Image
          src={isMobile ? retratoMobile : retratoDesktop}
          alt="Imagem da advogada"
        />
      </section>
    </>
  );
}

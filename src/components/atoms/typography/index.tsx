import { ReactNode } from "react";
import "./styles.scss";

interface ITypography {
  children: string | ReactNode | ReactNode[];
  type?: string;
}

interface ITypographyArray {
  texts: string[];
}

export function MainTitle({ children }: ITypography) {
  return <h1 className="main-title">{children}</h1>;
}

export function SalesTitle({ children }: ITypography) {
  return <h2 className="sales-title">{children}</h2>;
}

export function SubTitle({ children }: ITypography) {
  return <h2 className="sub-title">{children}</h2>;
}

export function AnchorsTitle({ children }: ITypography) {
  return <h2 className="anchors-title">{children}</h2>;
}

export function Description({ children }: ITypography) {
  return <article className="description">{children}</article>;
}

export function Paragraph({ children }: ITypography) {
  return <p className="paragraph">{children}</p>;
}

export function Article({ children }: ITypography) {
  return <article className="article">{children}</article>;
}

export function LandingHeroTitle({ children }: ITypography) {
  return <h1 className="landing-hero-title">{children}</h1>;
}

export function LandingHeroSubtitle({ texts }: ITypographyArray) {
  const first = texts[0];
  const second = texts[1];

  return (
    <h3 className="landing-hero-subtitle">
      {first}
      <span>{second}</span>
    </h3>
  );
}

export function LandingSubtitle({ children, type }: ITypography) {
  return <h2 className={`landing-subtitle ${type}`}>{children}</h2>;
}

export function LandingText({ children }: ITypography) {
  return <h2 className="landing-text">{children}</h2>;
}

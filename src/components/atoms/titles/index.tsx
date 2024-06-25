import "./styles.scss";

interface ITitles {
  children: string;
}

export function MainTitle({ children }: ITitles) {
  return <h1 className="main-title">{children}</h1>;
}

export function SalesTitle({ children }: ITitles) {
  return <h2 className="sales-title">{children}</h2>;
}

export function SubTitle({ children }: ITitles) {
  return <h2 className="sub-title">{children}</h2>;
}

export function AnchorsTitle({ children }: ITitles) {
  return <h2 className="anchors-title">{children}</h2>;
}

export function Description({ children }: ITitles) {
  return <article className="description">{children}</article>;
}

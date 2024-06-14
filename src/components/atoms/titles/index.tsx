import "./styles.scss";

interface ISalesTitle {
  children: string;
}

export function SalesTitle({ children }: ISalesTitle) {
  return <h2 className="sales-title">{children}</h2>;
}

export function MainTitle({ children }: ISalesTitle) {
  return <h1 className="main-title">{children}</h1>;
}

export function SubTitle({ children }: ISalesTitle) {
  return <h2 className="sub-title">{children}</h2>;
}

export function Description({ children }: ISalesTitle) {
  return <article className="description">{children}</article>;
}

import "./styles.scss";

interface ISalesTitle {
  children: string;
}

export function SalesTitle({ children }: ISalesTitle) {
  return <h2 className="sales-title">{children}</h2>;
}

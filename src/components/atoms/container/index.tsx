import "./styles.scss";

interface IContainer {
  children: React.ReactNode;
}

export function Container({ children }: IContainer) {
  return <section className="container">{children}</section>;
}

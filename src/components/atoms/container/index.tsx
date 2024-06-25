import "./styles.scss";

interface IContainer {
  children: React.ReactNode;
}

export function Container({ children }: IContainer) {
  return <section className="container">{children}</section>;
}

export function WrapperMobile({ children }: IContainer) {
  return <section className="wrapper-mobile">{children}</section>;
}

export function WrapperDesktop({ children }: IContainer) {
  return <section className="wrapper-desktop">{children}</section>;
}

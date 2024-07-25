"use client";

import { useEffect, useState } from "react";
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

export function FadeContainer({ children }: IContainer) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`fade-in-view ${isVisible ? "visible" : ""}`}>
      {children}
    </section>
  );
}

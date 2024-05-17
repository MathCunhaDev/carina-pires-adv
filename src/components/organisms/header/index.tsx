"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo-bold-azul-svg.svg";
import { MessageFilled } from "@ant-design/icons";
import * as Atoms from "@/components/atoms";
import "./styles.scss";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setIsScrolled(scrollY > 10 ? true : false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", onScroll, true);

      return () => document.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <section className="header-left">
        <Image
          className="header-logo"
          src={Logo}
          alt="Logo Carina Advocacia"
          title="Logo Carina Advocacia"
        />
        <nav role="navigation">
          <ul className="header-list">
            <li className="header-item">
              <Link href={"#"}>Oque fazemos</Link>
            </li>
            <li className="header-item">
              <Link href={"#"}>Sobre nós</Link>
            </li>
            <li className="header-item">
              <Link href={"#"}>Dúvidas frequentes</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="header-right">
        <Atoms.ContactButton type="blue" icon={<MessageFilled />}>
          Consulte um especialista
        </Atoms.ContactButton>
      </section>
    </header>
  );
}

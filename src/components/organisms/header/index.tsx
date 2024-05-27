"use client";

import { useState } from "react";
import { CloseOutlined, MenuOutlined, MessageFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo-bold-azul-svg.svg";
import * as Atoms from "@/components/atoms";
import "./styles.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
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
        <Atoms.ContactButton
          type="blue"
          icon={<MessageFilled />}
          eventName="headerDesktop"
        >
          Consulte um especialista
        </Atoms.ContactButton>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="header-right-menu-button"
        >
          <MenuOutlined style={{ fontSize: "20px" }} />
        </button>
      </section>
      <section className={`header-menu ${isMenuOpen ? "opened" : "closed"}`}>
        <section className="header-menu-left">
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
          <Atoms.ContactButton
            type="blue"
            icon={<MessageFilled />}
            eventName="headerMobile"
          >
            Consulte um especialista
          </Atoms.ContactButton>
        </section>
        <section className="header-menu-right">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="header-menu-right-button"
          >
            <CloseOutlined style={{ fontSize: "20px" }} />
          </button>
        </section>
      </section>
    </header>
  );
}

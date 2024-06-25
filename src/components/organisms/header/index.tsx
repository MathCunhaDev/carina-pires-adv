"use client";

import { useState } from "react";
import {
  CloseOutlined,
  MenuOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { whatWeDoItems } from "@/constants/whatWeDoItems";
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
        <a href="/">
          <Image
            className="header-logo"
            src={Logo}
            alt="Logo Carina Advocacia"
            title="Logo Carina Advocacia"
          />
        </a>
        <section className="header-navigation">
          <nav role="navigation">
            <h3>Oque fazemos</h3>
            <ul className="header-list">
              {whatWeDoItems.map((item, index) => (
                <li className="header-list-item" key={index}>
                  <Image src={item.icon} alt={item.text} title={item.text} />
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="header-left-link" href="/duvidas-frequentes">
            Dúvidas frequentes
          </Link>
          <Link className="header-left-link" href="/quem-somos">
            Quem somos
          </Link>
        </section>
      </section>
      <section className="header-right">
        <Atoms.ContactButton
          type="blue"
          icon={<WhatsAppOutlined />}
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
            <h3 className="header-menu-item-title">Áreas de atuação</h3>
            <ul className="header-list">
              {whatWeDoItems.map((item, index) => (
                <li className="header-list-item header-menu-item" key={index}>
                  <Image src={item.icon} alt={item.text} title={item.text} />
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="header-menu-left-ask" href="/duvidas-frequentes">
            Dúvidas frequentes
          </Link>
          <Link className="header-menu-left-who" href="/quem-somos">
            Quem somos
          </Link>
          <Atoms.ContactButton
            type="blue"
            icon={<WhatsAppOutlined />}
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

import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo-bold-branco-svg.svg";
import { ContactButton } from "@/components/atoms";
import { whatWeDoItems } from "@/constants/whatWeDoItems";
import {
  InstagramFilled,
  LinkedinFilled,
  TikTokFilled,
  WhatsAppOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import "./styles.scss";

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer-top">
        <section className="footer-section">
          <Image src={Logo} alt="Logo Carina Advocacia" />
          <article className="footer-text">
            Carina Pires Advogada é um escritório de advocacia com mais de 5
            anos de experiência sediado em São Paulo, oferecendo serviços
            jurídicos especializados para pessoas físicas e empresas no Brasil
            todo e no exterior. Estamos comprometidos com a resolução eficiente
            e eficaz dos problemas dos nossos clientes, sempre priorizando a
            ética e a transparência em cada caso. Entre em contato conosco hoje
            mesmo para agendar uma consulta inicial e descobrir como podemos
            ajudá-lo a resolver seus problemas legais.
          </article>
          <section className="footer-card">
            <p className="footer-card-title">
              Entre em contato conosco para entendermos como podemos ajudar
            </p>
            <ContactButton
              key={"footer"}
              type="blue"
              icon={<WhatsAppOutlined style={{ color: "white" }} />}
              eventName="footer"
            >
              Entre em contato
            </ContactButton>
            <section className="footer-card-socials">
              <a
                href="https://www.instagram.com/carinapires.adv/"
                target="_blank"
              >
                <InstagramFilled />
              </a>
              <a href="https://www.tiktok.com/@carinapires.adv" target="_blank">
                <TikTokFilled color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/carinapiresadv/"
                target="_blank"
              >
                <LinkedinFilled />
              </a>
              <a
                href="https://www.youtube.com/@carinapiresadv "
                target="_blank"
              >
                <YoutubeFilled />
              </a>
            </section>
          </section>
        </section>
        <section className="footer-section">
          <nav role="navigation">
            <h3>
              <Link href={"#"}>Áreas de atuação</Link>
            </h3>
            <ul className="footer-list">
              {whatWeDoItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="footer-section">
          <nav role="navigation">
            <h3>
              <Link href={"#"}>Sobre nós</Link>
            </h3>
            <ul className="footer-list">
              <li>
                <Link href={"#"}>Sobre nós</Link>
              </li>
              <li>
                <Link href={"#"}>Sobre nós</Link>
              </li>
              <li>
                <Link href={"#"}>Sobre nós</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="footer-section">
          <nav role="navigation">
            <h3>
              <Link href={"#"}>Dúvidas frequentes</Link>
            </h3>
            <ul className="footer-list">
              <li>
                <Link href={"#"}>Dúvidas frequentes</Link>
              </li>
              <li>
                <Link href={"#"}>Dúvidas frequentes</Link>
              </li>
              <li>
                <Link href={"#"}>Dúvidas frequentes</Link>
              </li>
            </ul>
          </nav>
        </section>
      </section>
      <section className="footer-bottom">
        <section className="footer-bottom-right">
          <p className="footer-bottom-disclaimer">
            &copy; 2024 Carina Pires Advocacia - OAB/SP n° 503.201 - Todos os
            direitos reservados.
          </p>
          <p className="footer-bottom-disclaimer">
            As informações neste site são apenas para fins informativos e não
            constituem aconselhamento profissional.
          </p>
        </section>
      </section>
    </footer>
  );
}

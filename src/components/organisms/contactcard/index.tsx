import { ClockCircleOutlined, MessageFilled } from "@ant-design/icons";
import { ContactButton } from "@/components/atoms";
import Logo from "/public/logo-bold-branco-svg.svg";
import Image from "next/image";
import "./styles.scss";

export function ContactCard() {
  return (
    <section className="contact-card">
      <section className="contact-card-container">
        <section className="contact-card-left">
          <h2 className="contact-card-title">
            Por que é importante agir rápido?
          </h2>
          <article className="contact-card-text">
            Seu caso possui um prazo de prescrição de acordo com a legislação
            Brasileira, o que significa que ele expira em uma determinada data.
            Por isso, é importante procurar a ajuda de um advogado especializado
            o mais rápido possível para evitar que o prazo expire e a situação
            se agrave.
          </article>
          <section className="contact-card-bottom">
            <ClockCircleOutlined style={{ fontSize: "30px" }} />
            <section className="contact-card-bottom-wrapper">
              <h3 className="contact-card-bottom-title">
                There is an expiration date on filing a case.
              </h3>
              <p className="contact-card-bottom-text">
                Dont give up your rights. Let us help you file your case today.
              </p>
            </section>
          </section>
        </section>
        <section className="contact-card-right">
          <section className="contact-card-right-image"></section>
          <section className="contact-card-right-container">
            <section className="contact-card-right-wrapper">
              <Image
                src={Logo}
                alt="Logo Carina Advocacia"
                title="Logo Carina Advocacia"
              />
              <p className="contact-card-right-text">
                Entre em contato hoje e veremos como podemos te ajudar.
              </p>
            </section>
            <ContactButton key={"footer"} type="blue" icon={<MessageFilled />}>
              Fale com um especialista
            </ContactButton>
          </section>
        </section>
      </section>
    </section>
  );
}

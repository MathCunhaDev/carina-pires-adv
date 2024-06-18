import { WhatsAppOutlined } from "@ant-design/icons";
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
            Um Hub Jurídico Pensado Inteiramente para Você
          </h2>
          <article className="contact-card-text">
            Mantenha-se informado com nossas publicações, alertas e boletins
            sobre os temas jurídicos mais relevantes e atuais. No Carina Pires
            Advocacia, estamos comprometidos em oferecer a você informações
            precisas e atualizadas para ajudá-lo a navegar pelas complexidades
            do direito. Nossa equipe de especialistas dedica-se a analisar as
            mudanças legislativas, decisões judiciais e tendências jurídicas,
            garantindo que você esteja sempre à frente e bem preparado para
            tomar decisões informadas.
          </article>
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
            <ContactButton
              key={"footer"}
              type="blue"
              icon={<WhatsAppOutlined />}
              eventName="contactCard"
            >
              Fale com um especialista
            </ContactButton>
          </section>
        </section>
      </section>
    </section>
  );
}

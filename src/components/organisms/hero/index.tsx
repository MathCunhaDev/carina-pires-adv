import { ContactButton } from "@/components/atoms";
import { WhatsAppOutlined } from "@ant-design/icons";
import "./styles.scss";

interface IHero {
  title: string;
  children: string;
}

export function Hero({ title, children }: IHero) {
  return (
    <section className="hero">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-text">{children}</p>
      <ContactButton type="white" icon={<WhatsAppOutlined />} eventName="hero">
        Consulte um especialista
      </ContactButton>
    </section>
  );
}

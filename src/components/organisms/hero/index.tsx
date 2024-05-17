import { ContactButton } from "@/components/atoms";
import { MessageFilled } from "@ant-design/icons";
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
      <ContactButton type="blue" icon={<MessageFilled />}>
        Consulte um especialista
      </ContactButton>
    </section>
  );
}

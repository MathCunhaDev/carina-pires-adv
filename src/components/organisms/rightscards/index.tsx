import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { rightsCardsItems } from "@/constants/rightsCardsItems";
import { MessageFilled } from "@ant-design/icons";
import { ContactButton } from "@/components/atoms";
import Image from "next/image";

import "./styles.scss";

export interface IRightsCardsItems {
  image: StaticImport;
  alt: string;
  title: string;
  text: string;
}

export function RightsCards() {
  return (
    <section className="rights-cards">
      <section className="rights-cards-bottom">
        {rightsCardsItems.map((card: IRightsCardsItems, index: number) => (
          <section className="rights-cards-item" key={index}>
            <Image src={card.image} alt={card.alt} />
            <h3 className="rights-cards-item-title">{card.title}</h3>
            <p className="rights-cards-item-text">{card.text}</p>
          </section>
        ))}
        <section className="rights-cards-bottom-last">
          <h3 className="rights-cards-bottom-last-title">CP</h3>
          <h4 className="rights-cards-bottom-last-subtitle">
            Pronto para começar?
          </h4>
          <p className="rights-cards-bottom-last-text">
            Entenda como podemos te ajudar, entre em contato para uma avaliação
            gratuita do seu caso.
          </p>
          <ContactButton
            key={"footer"}
            type="white"
            icon={<MessageFilled color="#001734" />}
            eventName="rightsCards"
          >
            Fale com um especialista
          </ContactButton>
        </section>
      </section>
    </section>
  );
}

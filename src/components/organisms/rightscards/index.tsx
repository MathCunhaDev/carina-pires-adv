import Image from "next/image";
import Image1 from "/public/rights-cards-1.jpg";
import Image2 from "/public/rights-cards-2.jpg";
import { MessageFilled } from "@ant-design/icons";
import { ContactButton } from "@/components/atoms";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "./styles.scss";

interface IRightsCardsData {
  image: StaticImport;
  alt: string;
  title: string;
  text: string;
}

const rightsCardsData: IRightsCardsData[] = [
  {
    image: Image1,
    alt: "Jovem negra em frente a um notebook",
    title: "Todos possuem direitos",
    text: "Você tem direitos legais em diversas áreas. Infelizmente, esses direitos são frequentemente ignorados ou até mesmo violados em muitas situações. Seja no ambiente de trabalho, em relações de consumo ou em questões familiares, é fundamental conhecer e defender seus direitos para garantir justiça e equidade em todas as áreas da vida.",
  },
  {
    image: Image2,
    alt: "Imagem de calculadora com custo zero",
    title: "O suporte necessário",
    text: "Sabemos que quando você está numa situação difícil, pode ser desesperador. Estamos aqui para te orientar e fornecer o suporte necessário para que você possa se concentrar no que realmente importa. Com a nossa ajuda, você pode enfrentar os desafios com mais confiança e tranquilidade.",
  },
];

export function RightsCards() {
  return (
    <section className="rights-cards">
      <section className="rights-cards-top">
        <h3 className="rights-cards-top-title">Localizados em São Paulo</h3>
        <p className="rights-cards-top-text">
          Nós representamos pessoas por todo o Brasil, em diversos tipos de
          casos e situações.
        </p>
      </section>
      <section className="rights-cards-bottom">
        {rightsCardsData.map((card: IRightsCardsData, index: number) => (
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

import "./styles.scss";

export interface ICaseCardsData {
  title: string;
  text: string;
}

interface ICaseCards {
  cards: ICaseCardsData[];
}

export function CaseCards({ cards }: ICaseCards) {
  return (
    <section className="case-cards">
      {cards.map((card: ICaseCardsData, index: number) => (
        <section className="case-cards-wrapper" key={index}>
          <a
            className="case-cards-item"
            href="https://wa.me/989288588"
            target="_blank"
          >
            <h3 className="case-cards-title">{card.title}</h3>
            <p className="case-cards-text">{card.text}</p>
          </a>
        </section>
      ))}
    </section>
  );
}

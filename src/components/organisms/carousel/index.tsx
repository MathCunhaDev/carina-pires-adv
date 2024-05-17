import { Carousel as AntdCarousel } from "antd";
import "./styles.scss";

const items = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et elementum purus, vitae vestibulum metus. Quisque convallis tellus id nulla lacinia condimentum. Integer tempus hendrerit dictum. ",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et elementum purus, vitae vestibulum metus. Quisque convallis tellus id nulla lacinia condimentum. Integer tempus hendrerit dictum. ",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et elementum purus, vitae vestibulum metus. Quisque convallis tellus id nulla lacinia condimentum. Integer tempus hendrerit dictum. ",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et elementum purus, vitae vestibulum metus. Quisque convallis tellus id nulla lacinia condimentum. Integer tempus hendrerit dictum. ",
  },
];

export function Carousel() {
  return (
    <section className="carousel">
      <AntdCarousel
        dots={false}
        arrows={true}
        vertical={true}
        infinite={true}
        // centerMode={true}
        slidesToShow={1}
      >
        {items.map((item: any, index: number) => (
          <section className="carousel-item" key={index}>
            <h2 className="carousel-item-title">{item.title}</h2>
            <p className="carousel-item-text">{item.text}</p>
          </section>
        ))}
      </AntdCarousel>
    </section>
  );
}

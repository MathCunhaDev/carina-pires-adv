import { carouselHomeItems } from "@/constants/carouselHomeItems";
import { Carousel as AntdCarousel } from "antd";
import "./styles.scss";

export function Carousel() {
  return (
    <section className="carousel">
      <AntdCarousel
        dots={false}
        arrows={true}
        infinite={true}
        centerMode={true}
        slidesToShow={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
            },
          },
        ]}
      >
        {carouselHomeItems.map((item: any, index: number) => (
          <section className="carousel-item" key={index}>
            <h2 className="carousel-item-title">{item.title}</h2>
            <p className="carousel-item-text">{item.text}</p>
          </section>
        ))}
      </AntdCarousel>
    </section>
  );
}

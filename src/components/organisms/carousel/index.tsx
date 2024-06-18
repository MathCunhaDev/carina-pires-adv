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
          <a href={item.link} key={index}>
            <section className="carousel-item">
              <h2 className="carousel-item-title">{item.title}</h2>
              <p className="carousel-item-text">{item.text}</p>
            </section>
          </a>
        ))}
      </AntdCarousel>
    </section>
  );
}

import { SocialProofsData } from "@/constants/socialProofsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Carousel as AntdCarousel } from "antd";
import * as Atoms from "@/components/atoms";
import "./styles.scss";

export function LandingProofCard() {
  return (
    <section className="landing-proof">
      <section className="landing-proof-wrapper">
        <Atoms.LandingSubtitle type="whitee">
          Casos de sucesso
        </Atoms.LandingSubtitle>
        <Atoms.LandingText>
          Veja os resultados de quem confiou sua liberdade nas mãos certas.
        </Atoms.LandingText>
      </section>
      <section className="landing-proof-container">
        <AntdCarousel
          dots={false}
          arrows={true}
          infinite={true}
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false,
              },
            },
          ]}
        >
          {SocialProofsData.map((item: any, index: number) => (
            <section className="landing-proof-item" key={index}>
              <h2 className="landing-proof-item-name">{item.name}</h2>
              <p className="landing-proof-item-text">{item.text}</p>
              <section className="landing-proof-item-feedback">
                <section className="landing-proof-item-stars">
                  <FontAwesomeIcon width={10} color="#23120E" icon={faStar} />
                  <FontAwesomeIcon width={10} color="#23120E" icon={faStar} />
                  <FontAwesomeIcon width={10} color="#23120E" icon={faStar} />
                  <FontAwesomeIcon width={10} color="#23120E" icon={faStar} />
                  <FontAwesomeIcon width={10} color="#23120E" icon={faStar} />
                </section>
                <p className="landing-proof-item-feedback-text">Feedback</p>
              </section>
            </section>
          ))}
        </AntdCarousel>
      </section>
      <Atoms.LandingButton type="primary">
        Agende agora e veja como podemos mudar sua vida
      </Atoms.LandingButton>
    </section>
  );
}

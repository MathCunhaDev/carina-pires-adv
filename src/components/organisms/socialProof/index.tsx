import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialProofsData } from "@/constants/socialProofsData";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GoogleOutlined } from "@ant-design/icons";
import { Carousel as AntdCarousel } from "antd";
import "./styles.scss";

export const SocialProof = () => {
  return (
    <section className="social-proofs">
      <AntdCarousel
        dots={false}
        arrows={true}
        slidesToShow={3}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              dots: false,
              slidesToShow: 1,
            },
          },
        ]}
      >
        {SocialProofsData.map((item: any, index: number) => (
          <section className="social-proofs-wrapper" key={index}>
            <section className="social-proofs-column">
              <h3 className="social-proofs-name">{item.name}</h3>
              <p className="social-proofs-text">{item.text}</p>
              <section className="social-proofs-stars">
                <FontAwesomeIcon width={50} color="#fbbc05" icon={faStar} />
                <FontAwesomeIcon width={50} color="#fbbc05" icon={faStar} />
                <FontAwesomeIcon width={50} color="#fbbc05" icon={faStar} />
                <FontAwesomeIcon width={50} color="#fbbc05" icon={faStar} />
                <FontAwesomeIcon width={50} color="#fbbc05" icon={faStar} />
              </section>
            </section>
            <GoogleOutlined />
          </section>
        ))}
      </AntdCarousel>
    </section>
  );
};

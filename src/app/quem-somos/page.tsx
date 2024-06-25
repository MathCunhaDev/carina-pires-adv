import Image from "next/image";
import Selfie from "/public/selfie.jpg";
import Peoples from "/public/peoples.png";
import { Metadata } from "next";
import { Col, Row } from "antd";
import * as Atoms from "@/components/atoms";

export const metadata: Metadata = {
  title: {
    default: "Quem somos - Carina Pires Advocacia",
    template: "%s - Carina Pires Advocacia",
  },
  description: "Quem somos - Carina Pires Advocacia",
};

export default function QuemSomos() {
  return (
    <>
      <Atoms.MainTitle>Quem Somos</Atoms.MainTitle>
      <Image
        className="who-we-are-background"
        src={Peoples}
        alt="Imagem com varias fotos 3x4 de pessoas"
      />
      <Atoms.Container>
        <Row align={"top"}>
          <Col md={24} lg={10}>
            <Atoms.WrapperDesktop>
              <Image
                className="selfie-image"
                src={Selfie}
                alt="Selfie da Carina Pires Advogada"
              />
            </Atoms.WrapperDesktop>
          </Col>
          <Col md={24} lg={14}>
            <Atoms.Article>
              <Atoms.SubTitle>Nossa História</Atoms.SubTitle>
              <Atoms.Paragraph>
                Em 2022, o Carina Pires Advocacia nasceu de um desejo profundo
                de transformação. Após anos de experiência em escritórios
                tradicionais e empresas de tecnologia, nossa fundadora decidiu
                que era hora de seguir sua verdadeira vocação. Ela queria mais
                do que apenas praticar a advocacia; queria transformar vidas,
                impactar a sociedade de maneira significativa e contribuir para
                um sistema judiciário mais justo, ágil e acessível. Assim, foi
                criado um escritório dedicado a oferecer serviços jurídicos
                inovadores com resultados surpreendentes.
              </Atoms.Paragraph>
            </Atoms.Article>
            <Atoms.WrapperMobile>
              <Image
                className="selfie-image"
                src={Selfie}
                alt="Selfie da Carina Pires Advogada"
              />
            </Atoms.WrapperMobile>
            <Atoms.Article>
              <Atoms.SubTitle>Nossa Inspiração</Atoms.SubTitle>
              <Atoms.Paragraph>
                O Carina Pires Advocacia foi profundamente influenciado por uma
                figura extraordinária: Dra. Ana Cristina, mãe da nossa
                fundadora, que advoga há mais de 30 anos. Sua dedicação
                incansável e paixão pela justiça sempre foram uma fonte de
                inspiração. Minha mãe me ensinou que a justiça transcende a lei
                e que, muitas vezes, elas podem estar em conflito. Seu conselho
                para ser justa, apesar de jurista, é algo que levo comigo todos
                os dias, reflete Carina.
              </Atoms.Paragraph>
            </Atoms.Article>
          </Col>
        </Row>
        <Col>
          <Atoms.Article>
            <Atoms.SubTitle>Missão e Valores</Atoms.SubTitle>
            <Atoms.Paragraph>
              Nossa missão é simples e poderosa: atender às necessidades dos
              clientes de maneira completa, engajada e eficiente. Nós
              valorizamos a transparência, a ética e resultados que superam
              expectativas, graças à integração e comprometimento da nossa
              equipe. Oferecemos um atendimento humanizado e personalizado,
              evitando terceirizações e garantindo um compromisso total com cada
              cliente.
            </Atoms.Paragraph>
          </Atoms.Article>
          <Atoms.Article>
            <Atoms.SubTitle>Áreas de Atuação</Atoms.SubTitle>
            <Atoms.Paragraph>
              Nosso escritório atua em diversas áreas do direito, com destaque
              para o direito canábico. Defendemos a descriminalização da
              cannabis para fins medicinais, acreditando em um futuro mais justo
              e compassivo. Também lidamos com direito penal e outras áreas,
              conforme descrito em www.carinapiresadv.com.br.
            </Atoms.Paragraph>
          </Atoms.Article>
          <Atoms.Article>
            <Atoms.SubTitle>Casos de Sucesso</Atoms.SubTitle>
            <Atoms.Paragraph>
              Nosso histórico de casos bem-sucedidos fala por si só. Abordamos
              cada situação com uma dedicação incansável e atenção minuciosa aos
              detalhes, sempre buscando resultados positivos para nossos
              clientes. Essa dedicação assegura um desempenho excepcional em
              cada ação.
            </Atoms.Paragraph>
          </Atoms.Article>
          <Atoms.Article>
            <Atoms.SubTitle>Visão para o Futuro</Atoms.SubTitle>
            <Atoms.Paragraph>
              O Carina Pires Advocacia não se contenta com o status quo. Estamos
              determinados a expandir nossas operações internacionalmente,
              alcançando regiões como Europa, EUA e China. Essa expansão será
              fundamentada no mercado canábico, que é extremamente promissor e
              refletirá em nossa saúde, liberdade, educação e muito mais.
              Prometemos um processo transparente e humanizado, com contato
              próximo durante toda a jornada do cliente.
            </Atoms.Paragraph>
          </Atoms.Article>
          <Atoms.Article>
            <Atoms.SubTitle>Inovação e Diferenciais</Atoms.SubTitle>
            <Atoms.Paragraph>
              Nós pensamos diferente. Inovamos em nossos processos internos,
              mantendo um controle eficiente das informações sem comprometer a
              qualidade do atendimento. Cada cliente recebe um tratamento
              dedicado e personalizado, assegurando um relacionamento contínuo e
              de confiança.
            </Atoms.Paragraph>
          </Atoms.Article>
          <Atoms.Article>
            <Atoms.Paragraph>
              Isso aqui é para os loucos. Os desajustados. Os rebeldes. Os
              criadores de caso. Os que são peças redondas nos buracos
              quadrados. Os que veem as coisas de forma diferente. Eles não
              gostam de regras. E não têm nenhum respeito pelo status quo. Você
              pode citá-los, discordar deles, glorificá-los ou vilipendiá-los.
              Mas a única coisa que você não pode fazer é ignorá-los. Porque
              eles mudam as coisas. Eles empurram a raça humana para a frente.
              E, enquanto alguns os veem como loucos, nós vemos gênios. Porque
              as pessoas loucas o suficiente para pensar que podem mudar o
              mundo, são aquelas que o fazem.
            </Atoms.Paragraph>
            <Atoms.Paragraph>
              Apple Inc. / Steave Jobs. Think Different. 1997. Texto
              publicitário
            </Atoms.Paragraph>
          </Atoms.Article>
        </Col>
      </Atoms.Container>
    </>
  );
}

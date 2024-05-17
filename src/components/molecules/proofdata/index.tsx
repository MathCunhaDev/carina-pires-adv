import "./styles.scss";

interface IProof {
  title: string;
  text: string;
}

const proofs: IProof[] = [
  {
    title: "500+ casos",
    text: "Mais de quinhentos processos e casos resolvidos ou em andamento.",
  },
  {
    title: "5 anos",
    text: "Possuímos mais de cinco anos de experiência nos mais diversos casos",
  },
  {
    title: "24 horas",
    text: "Estamos sempre prontos para atênde-lo, dia ou noite.",
  },
];

export function ProofData() {
  return (
    <section className="proof">
      {proofs.map((proof: IProof, index: number) => (
        <section className="proof-item" key={index}>
          <h3 className="proof-title">{proof.title}</h3>
          <p className="proof-text">{proof.text}</p>
        </section>
      ))}
    </section>
  );
}

import { proofsItems } from "@/constants/proofsItems";
import "./styles.scss";

export interface IProof {
  title: string;
  text: string;
}

export function ProofData() {
  return (
    <section className="proof">
      {proofsItems.map((proof: IProof, index: number) => (
        <section className="proof-item" key={index}>
          <h3 className="proof-title">{proof.title}</h3>
          <p className="proof-text">{proof.text}</p>
        </section>
      ))}
    </section>
  );
}

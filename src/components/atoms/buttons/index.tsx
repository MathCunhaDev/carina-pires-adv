import "./styles.scss";

interface IContactButton {
  type: "blue" | "white";
  icon: React.ReactElement;
  children: string;
}

export function ContactButton({ children, type, icon }: IContactButton) {
  return (
    <button
      className={`contact-button ${type === "blue" ? "blue" : "white"}`}
      type="button"
    >
      <span className="contact-button-icon">{icon}</span>
      <p className="contact-button-text">{children}</p>
    </button>
  );
}

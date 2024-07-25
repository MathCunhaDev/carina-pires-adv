"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import "./styles.scss";

interface IContactButton {
  type: "blue" | "white";
  icon: React.ReactElement;
  children: string;
  eventName: string;
}

export function ContactButton({
  children,
  type,
  icon,
  eventName,
}: IContactButton) {
  return (
    <button
      type="button"
      className={`contact-button ${type === "blue" ? "blue" : "white"}`}
      onClick={() => {
        sendGTMEvent({ event: eventName, value: "clicked" });
      }}
    >
      {icon}
      <a
        href="https://wa.me/989288588"
        target="_blank"
        className="contact-button-text"
      >
        {children}
      </a>
    </button>
  );
}

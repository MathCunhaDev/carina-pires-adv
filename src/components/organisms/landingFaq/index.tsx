"use client";

import { landingFaqItems } from "@/constants/landingFaqItems";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import * as Atoms from "@/components/atoms";
import "./styles.scss";

export function landingFaq() {
  return (
    <section className="landing-faq">
      <Atoms.LandingSubtitle>Dúvidas frequentes</Atoms.LandingSubtitle>
      <Collapse
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        items={landingFaqItems}
      />
    </section>
  );
}

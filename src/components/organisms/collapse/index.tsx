"use client";

import { useEffect, useRef, useState } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Flex, Radio, Row } from "antd";
import * as Atoms from "@/components/atoms";
import "./styles.scss";

export interface IQuestions {
  title: string;
  text: string;
}

interface ICollapseItem {
  title: string;
  anchor: string;
  questions: IQuestions[];
}

interface ICollapse {
  items: ICollapseItem[];
}

export function Collapse({ items }: ICollapse) {
  const [activeRadioOption, setActiveRadioOption] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = openIndexes[index]
          ? `${ref.scrollHeight}px`
          : "0px";
      }
    });
  }, [openIndexes]);

  return (
    <Row className="collapse">
      <Col md={24} lg={8}>
        <aside role="navigation">
          <Flex vertical>
            <Atoms.AnchorsTitle>Navegue pelas perguntas</Atoms.AnchorsTitle>
            <Radio.Group
              onChange={(event) => {
                setVisibleItems(() =>
                  visibleItems.map((_: boolean, index: number) =>
                    index === event.target.value ? true : false
                  )
                );
                setActiveRadioOption(event.target.value);
              }}
              value={activeRadioOption}
            >
              <Flex vertical>
                <Radio value={0}>Direito Criminal</Radio>
                <Radio value={1}>Direito Bancário</Radio>
                <Radio value={2}>Direito Familiar</Radio>
                <Radio value={3}>Direito Imobiliário</Radio>
                <Radio value={4}>Direito Trabalhista</Radio>
                <Radio value={5}>Direito Cível</Radio>
                <Radio value={6}>Direito Canábico</Radio>
              </Flex>
            </Radio.Group>
          </Flex>
        </aside>
      </Col>

      <Col md={24} lg={16}>
        {items.map((item, index) => (
          <Flex
            vertical
            gap={20}
            key={index}
            id={item.anchor}
            style={{
              display: `${visibleItems[index] ? "flex" : "none"}`,
            }}
          >
            <Atoms.SubTitle>{item.title}</Atoms.SubTitle>
            <section className="collapse-container">
              {item.questions.map((item, index) => (
                <article className="collapse-item" key={index}>
                  <section className="collapse-item-wrapper">
                    <div
                      className="collapse-item-icon"
                      onClick={() => toggleItem(index)}
                    >
                      {openIndexes[index] ? (
                        <MinusCircleOutlined className="icon" />
                      ) : (
                        <PlusCircleOutlined className="icon" />
                      )}
                    </div>
                    <h3 className="collapse-item-title">{item.title}</h3>
                  </section>
                  <p
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className={`collapse-item-text ${
                      openIndexes[index] ? "open" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </section>
          </Flex>
        ))}
      </Col>
    </Row>
  );
}

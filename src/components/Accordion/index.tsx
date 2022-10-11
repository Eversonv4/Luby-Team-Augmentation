import React from "react";
import {
  AcordeonContainer,
  ContentBox,
  ContentText,
  ArrowRightIcon,
  HelpIcon,
} from "./styles";
import { IAccordionProps } from "./interface";

export function Accordeon({
  children,
  question,
  isOpen,
  AccordeonHeight,
  openAccordion,
  ...rest
}: IAccordionProps) {
  return (
    <AcordeonContainer {...rest}>
      <ContentBox isOpen={isOpen}>
        <label onClick={openAccordion}>
          <HelpIcon />
          <span>{question}</span>
          <ArrowRightIcon className="arrow-right-rotate" />
        </label>

        <ContentText
          AccordeonHeight={AccordeonHeight}
          className={isOpen ? "active" : ""}
          isOpen={isOpen}
        >
          {children}
        </ContentText>
      </ContentBox>
    </AcordeonContainer>
  );
}

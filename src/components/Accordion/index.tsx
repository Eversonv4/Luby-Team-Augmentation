import React, { ReactNode } from "react";
import {
  AcordeonContainer,
  ContentBox,
  ContentText,
  ArrowRightIcon,
  HelpIcon,
} from "./styles";

interface IAccordeonProps {
  question: string;
  children: ReactNode;
  isOpen: boolean;
  AccordeonHeight?: string;
  openAccordion: () => void;
}

export function Accordeon({
  children,
  question,
  isOpen,
  AccordeonHeight,
  openAccordion,
  ...rest
}: IAccordeonProps) {
  return (
    <AcordeonContainer {...rest}>
      <ContentBox isOpen={isOpen} className="contentBox">
        <label onClick={openAccordion}>
          <HelpIcon />
          <span>{question}</span>
          <ArrowRightIcon className="arrow" />
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

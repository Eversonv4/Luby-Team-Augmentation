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
  open: boolean;
  height?: string;
  handleOpenAcordion?: (param: string) => void;
  onClick: () => void;
}

export function Accordeon({
  children,
  question,
  open,
  height,
  handleOpenAcordion,
  ...rest
}: IAccordeonProps) {
  return (
    <AcordeonContainer {...rest}>
      <ContentBox open={open} className="contentBox">
        <label onClick={() => handleOpenAcordion}>
          <HelpIcon />
          <span>{question}</span>
          <ArrowRightIcon className="arrow" />
        </label>

        <ContentText
          height={height}
          className={open ? "active" : ""}
          open={open}
        >
          {children}
        </ContentText>
      </ContentBox>
    </AcordeonContainer>
  );
}

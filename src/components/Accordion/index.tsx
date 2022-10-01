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
  Accordeonheight?: string;
  handleOpenAcordion?: (param: string) => void;
  onClick: () => void;
}

export function Accordeon({
  children,
  question,
  open,
  Accordeonheight,
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
          Accordeonheight={Accordeonheight}
          className={open ? "active" : ""}
          open={open}
        >
          {children}
        </ContentText>
      </ContentBox>
    </AcordeonContainer>
  );
}

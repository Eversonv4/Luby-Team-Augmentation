import React, { ReactNode } from "react";
import { AcordeonContainer, ContentBox, ContentText } from "./styles";
import { IoMdHelpCircle } from "react-icons/io";

interface IAccordeonProps {
  children: ReactNode;
  open: string;
  height?: string;
  handleOpenAcordion: (param: string) => void;
}

export function Accordeon({
  children,
  open,
  height,
  handleOpenAcordion,
}: IAccordeonProps) {
  return (
    <AcordeonContainer>
      <ContentBox open={open === "dois"} className="contentBox">
        <label onClick={() => handleOpenAcordion("dois")}>
          <IoMdHelpCircle size={24} /> What is IT Team Augmentation?
        </label>

        <ContentText
          height={height}
          className={open === "dois" ? "active" : ""}
          open={open === "dois"}
        >
          {children}
        </ContentText>
      </ContentBox>
    </AcordeonContainer>
  );
}

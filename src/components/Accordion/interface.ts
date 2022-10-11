import React, { ReactNode } from "react";

export interface IAccordionProps {
  question: string;
  children: ReactNode;
  isOpen: boolean;
  AccordeonHeight?: string;
  openAccordion: () => void;
}

export interface IAccordionOpen {
  isOpen: boolean;
  AccordeonHeight?: string;
}

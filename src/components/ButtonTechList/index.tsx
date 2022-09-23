import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive: boolean;
}

export function ButtonTechList({ children, isActive, ...rest }: IButton) {
  return (
    <Button {...rest} isActive={isActive}>
      {children}
    </Button>
  );
}

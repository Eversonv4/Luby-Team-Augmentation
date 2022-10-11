import { Button } from "./styles";
import { IButton } from "./interface";

export function ButtonTechList({ TechTitle, isActive, ...rest }: IButton) {
  return (
    <Button {...rest} isActive={isActive}>
      {TechTitle}
    </Button>
  );
}

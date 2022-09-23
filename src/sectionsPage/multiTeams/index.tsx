import React from "react";
import {
  Container,
  ContainerLayout,
  Title,
  SubTitle,
  TechContainer,
} from "./styles";

export function MultiTeamsSection() {
  return (
    <Container>
      <ContainerLayout>
        <Title>
          From Specific Individuals to Complete Multidisciplinary Teams
        </Title>
        <SubTitle>
          We are ready to provide you with a full range of professionals,
          regardless of the chapters you are looking for. Our team only provides
          professionals from mid to senior level, here's what you can expect:
        </SubTitle>
      </ContainerLayout>

      <TechContainer></TechContainer>
    </Container>
  );
}

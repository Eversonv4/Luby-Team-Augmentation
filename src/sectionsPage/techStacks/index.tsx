import React from "react";
import {
  Container,
  ContainerLayout,
  Title,
  SubTitle,
  StackContainer,
  TechContainer,
  StackListContainer,
} from "./styles";

import { ButtonStackList } from "@components/ButtonStackList";
import { StackList } from "@components/StackList/StackList";
import { StackListData } from "@shared/utils/StackListData";

export function StacksSection() {
  return (
    <Container>
      <ContainerLayout>
        <Title>Main Tech Stacks on the Market</Title>
        <SubTitle>
          Our professionals have mastered a vast repertoire of technologies and
          are constantly updated with the latest trends in the sector.
        </SubTitle>

        <StackContainer>
          <TechContainer>
            <ButtonStackList isActive={true}>Back-End</ButtonStackList>
            <ButtonStackList isActive={false}>Front-End</ButtonStackList>
            <ButtonStackList isActive={false}>Mobile</ButtonStackList>

            <ButtonStackList isActive={false}>Databases</ButtonStackList>

            <ButtonStackList isActive={false}>Cloud</ButtonStackList>

            <ButtonStackList isActive={false}>
              Infrastructure and CI/CD
            </ButtonStackList>

            <ButtonStackList isActive={false}>
              Quality Assurance
            </ButtonStackList>

            <ButtonStackList isActive={false}>Data</ButtonStackList>
          </TechContainer>
          <StackListContainer>
            <StackList stacklist={StackListData.backend} />
          </StackListContainer>
        </StackContainer>
      </ContainerLayout>
    </Container>
  );
}

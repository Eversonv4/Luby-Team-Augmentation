import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerLayout,
  Title,
  SubTitle,
  StackContainer,
  TechContainer,
  StackListContainer,
} from "./styles";

import { StackProps, StackItem } from "./interface";

import { ButtonStackList } from "@components/ButtonStackList";
import { StackList } from "@components/StackList/StackList";
import { StackListData } from "@shared/dataLists/StackListData";

export function StacksSection() {
  const [selectedStack, setSelectedStack] = useState<StackProps>("backend");
  const [stackActive, setStackActive] = useState<StackItem[]>([]);

  function handleStackList(stack: StackProps) {
    setSelectedStack(stack);
    setStackActive(StackListData[stack]);
  }

  useEffect(() => {
    handleStackList(selectedStack);
  }, [selectedStack]);

  return (
    <Container id="techstacks-section">
      <ContainerLayout>
        <Title>Main Tech Stacks on the Market</Title>
        <SubTitle>
          Our professionals have mastered a vast repertoire of technologies and
          are constantly updated with the latest trends in the sector.
        </SubTitle>

        <StackContainer>
          <TechContainer>
            <ButtonStackList
              isActive={selectedStack === "backend"}
              onClick={() => handleStackList("backend")}
            >
              Back-End
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "frontend"}
              onClick={() => handleStackList("frontend")}
            >
              Front-End
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "mobile"}
              onClick={() => handleStackList("mobile")}
            >
              Mobile
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "databases"}
              onClick={() => handleStackList("databases")}
            >
              Databases
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "cloud"}
              onClick={() => handleStackList("cloud")}
            >
              Cloud
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "infrastructure"}
              onClick={() => handleStackList("infrastructure")}
            >
              Infrastructure and CI/CD
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "quality"}
              onClick={() => handleStackList("quality")}
            >
              Quality Assurance
            </ButtonStackList>

            <ButtonStackList
              isActive={selectedStack === "data"}
              onClick={() => handleStackList("data")}
            >
              Data
            </ButtonStackList>
          </TechContainer>
        </StackContainer>
        <StackListContainer>
          {selectedStack === "backend" && <StackList stacklist={stackActive} />}

          {selectedStack === "frontend" && (
            <StackList stacklist={stackActive} />
          )}

          {selectedStack === "mobile" && <StackList stacklist={stackActive} />}

          {selectedStack === "databases" && (
            <StackList stacklist={stackActive} />
          )}

          {selectedStack === "cloud" && <StackList stacklist={stackActive} />}

          {selectedStack === "infrastructure" && (
            <StackList stacklist={stackActive} />
          )}

          {selectedStack === "quality" && <StackList stacklist={stackActive} />}

          {selectedStack === "data" && <StackList stacklist={stackActive} />}
        </StackListContainer>
      </ContainerLayout>
    </Container>
  );
}

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

import { motion, Variants } from "framer-motion";

import { ButtonTechList } from "@components/ButtonTechList";
import { StackList } from "@components/StackList/List";
import { StackListData } from "@shared/dataLists/StackListData";

const AnimationSection: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 5,
    },
  },
};

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
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={AnimationSection}
      >
        <ContainerLayout>
          <Title>Main Tech Stacks on the Market</Title>
          <SubTitle>
            Our professionals have mastered a vast repertoire of technologies
            and are constantly updated with the latest trends in the sector.
          </SubTitle>

          <StackContainer>
            <TechContainer>
              <ButtonTechList
                isActive={selectedStack === "backend"}
                onClick={() => handleStackList("backend")}
                TechTitle="Back-End"
              />

              <ButtonTechList
                isActive={selectedStack === "frontend"}
                onClick={() => handleStackList("frontend")}
                TechTitle="Front-End"
              />

              <ButtonTechList
                isActive={selectedStack === "mobile"}
                onClick={() => handleStackList("mobile")}
                TechTitle="Mobile"
              />

              <ButtonTechList
                isActive={selectedStack === "databases"}
                onClick={() => handleStackList("databases")}
                TechTitle="Databases"
              />

              <ButtonTechList
                isActive={selectedStack === "cloud"}
                onClick={() => handleStackList("cloud")}
                TechTitle="Cloud"
              />

              <ButtonTechList
                isActive={selectedStack === "infrastructure"}
                onClick={() => handleStackList("infrastructure")}
                TechTitle="Infrastructure and CI/CD"
              />

              <ButtonTechList
                isActive={selectedStack === "quality"}
                onClick={() => handleStackList("quality")}
                TechTitle="Quality Assurance"
              />

              <ButtonTechList
                isActive={selectedStack === "data"}
                onClick={() => handleStackList("data")}
                TechTitle="Data"
              />
            </TechContainer>
          </StackContainer>
          <StackListContainer>
            {selectedStack && <StackList stacklist={stackActive} />}
          </StackListContainer>
        </ContainerLayout>
      </motion.div>
    </Container>
  );
}

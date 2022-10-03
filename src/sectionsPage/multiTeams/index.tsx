import React, { useEffect, useState } from "react";
import { ButtonTechList } from "@components/ButtonTechList";
import { TeamsListData } from "@shared/dataLists/TeamsListData";

import {
  Container,
  ContainerLayout,
  Title,
  SubTitle,
  TechContainer,
  TeamsListContainer,
  TechlistContainer,
} from "./styles";

import { TeamsProps } from "./inteface";
import { TeamsList } from "@components/TeamsList/TeamsList";

import { motion, Variants } from "framer-motion";

export function MultiTeamsSection() {
  // TODO multi teams

  const [chooseTeam, setChooseTeam] = useState<TeamsProps>("tech");
  const [listActive, setListActive] = useState<string[]>([]);

  function handleTeamActive(team: TeamsProps) {
    setChooseTeam(team);
    setListActive(TeamsListData[team]);
  }

  useEffect(() => {
    handleTeamActive(chooseTeam);
  }, [chooseTeam]);

  const FadeAnimation: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };

  return (
    <Container id="multiteams-section">
      <motion.article
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeAnimation}
      >
        <ContainerLayout>
          <Title>
            From Specific Individuals to Complete Multidisciplinary Teams
          </Title>
          <SubTitle>
            We are ready to provide you with a full range of professionals,
            regardless of the chapters you are looking for. Our team only
            provides professionals from mid to senior level, here's what you can
            expect:
          </SubTitle>
        </ContainerLayout>

        <TechContainer>
          <TeamsListContainer>
            <ButtonTechList
              onClick={() => setChooseTeam("tech")}
              isActive={chooseTeam === "tech"}
            >
              Technology
            </ButtonTechList>
            <ButtonTechList
              onClick={() => setChooseTeam("product")}
              isActive={chooseTeam === "product"}
            >
              Product
            </ButtonTechList>
            <ButtonTechList
              onClick={() => setChooseTeam("design")}
              isActive={chooseTeam === "design"}
            >
              Design
            </ButtonTechList>
          </TeamsListContainer>
          <TechlistContainer>
            {chooseTeam && <TeamsList techlist={listActive} />}
          </TechlistContainer>
        </TechContainer>
      </motion.article>
    </Container>
  );
}

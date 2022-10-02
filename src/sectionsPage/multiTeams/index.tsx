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

  return (
    <Container id="multiteams-section">
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
          {chooseTeam === "tech" && <TeamsList techlist={listActive} />}
          {chooseTeam === "product" && <TeamsList techlist={listActive} />}
          {chooseTeam === "design" && <TeamsList techlist={listActive} />}
        </TechlistContainer>
      </TechContainer>
    </Container>
  );
}

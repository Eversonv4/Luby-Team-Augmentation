import React, { useEffect, useState } from "react";
import { ButtonTechList } from "@components/ButtonTechList";
import { TeamsListData } from "@shared/utils/TeamsListData";

import {
  Container,
  ContainerLayout,
  Title,
  SubTitle,
  TechContainer,
  TeamsListContainer,
  TechlistContainer,
} from "./styles";
import { TeamsList } from "@components/TeamsList/TeamsList";

export function MultiTeamsSection() {
  const [chooseTeam, setChooseTeam] = useState<"tech" | "product" | "design">(
    "tech"
  );
  const [listActive, setListActive] = useState<string[]>([]);

  function handleTeamActive(team: "tech" | "product" | "design") {
    setChooseTeam(team);
    setListActive(TeamsListData[team]);
  }

  useEffect(() => {
    console.log("entrou");
    handleTeamActive(chooseTeam);
  }, [chooseTeam]);

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

import React, { useState } from "react";

import {
  Container,
  ContainerLayout,
  Title,
  TitleHighlight,
  AcordeonContainer,
  ContentBox,
  ContentText,
} from "./styles";

import { Accordeon } from "@components/Accordion";

export function FaqSection() {
  const [open, setOpen] = useState("");

  function handleOpenAcordion(value: string) {
    console.log("alo");
    if (value === open) {
      setOpen("");
      return;
    }
    setOpen(value);
  }

  return (
    <Container>
      <ContainerLayout>
        <TitleHighlight>F.A.Q</TitleHighlight>
        <Title>Team Augmentation Frequently Asked Questions</Title>

        <Accordeon handleOpenAcordion={handleOpenAcordion} open={open}>
          <p>
            Team Augmentation if the full outsourcing of a technical position to
            a third party company. The company will be responsible for providing
            a professional with the same requirements of the job description
            your company has created for that position.
          </p>

          <p>
            This practice is very common to add technical talent to your team on
            an on-demand basis so your company can scale as fast as your growth
            goals.
          </p>

          <p>
            At Luby we have a robust yet flexible talent acquisition and
            sourcing process that guarantees access to top tier IT talent. We
            cover different chapters, technology stacks and mid to senior level
            professionals.
          </p>
        </Accordeon>
      </ContainerLayout>
    </Container>
  );
}

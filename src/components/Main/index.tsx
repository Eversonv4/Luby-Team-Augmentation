import React from "react";
import {
  MainSection,
  MainTitle,
  SubTitle,
  BgImage,
  Description,
} from "./styles";
import { Header } from "@components/Header";

export function MainContent() {
  return (
    <MainSection>
      <Header />
      <BgImage
        src="/assets/background-sections/outsourcing-lp-bg.jpg"
        alt="background image"
      />
      <MainTitle>Team Augmentation</MainTitle>
      <SubTitle>Top Tier IT Professionals</SubTitle>
      <Description id="identificador">
        Immediately available personnel and custom-made sourcing process, all
        with the same quality level of Luby’s more than 20 years of experience
        in IT projects across several industries, both domestically and
        internationally.
      </Description>
    </MainSection>
  );
}

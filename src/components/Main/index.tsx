import React from "react";
import {
  MainSection,
  MainTitle,
  SubTitle,
  BgImage,
  Description,
  ActionBtnContainer,
} from "./styles";
import { Header } from "@components/Header";
import Link from "next/link";

import { FiChevronDown } from "react-icons/fi";

export function MainContent() {
  return (
    <MainSection>
      <Header />
      <BgImage
        src="/assets/background-sections/outsourcing-lp-bg.webp"
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

      <ActionBtnContainer>
        <span>
          <Link href="#">Contact Us</Link>
          <FiChevronDown />
        </span>
        <h4>Decrease Ramp-Up Time and Costs</h4>
      </ActionBtnContainer>
    </MainSection>
  );
}

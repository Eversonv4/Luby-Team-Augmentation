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

export function HomeSection() {
  return (
    <MainSection>
      <Header />
      <BgImage
        src="/assets/background-sections/outsourcing-lp-bg.webp"
        alt="background image"
        loading="lazy"
        width="1200"
        height="900"
      />
      <MainTitle>Team Augmentation</MainTitle>
      <SubTitle>Top Tier IT Professionals</SubTitle>
      <Description id="identificador">
        Immediately available personnel and custom-made sourcing process, all
        with the same quality level of Luby's more than 20 years of experience
        in IT projects across several industries, both domestically and
        internationally.
      </Description>

      <ActionBtnContainer>
        <Link href="#contact-section">
          <span>Contact Us</span>
        </Link>
        <h4>Decrease Ramp-Up Time and Costs</h4>
      </ActionBtnContainer>
    </MainSection>
  );
}

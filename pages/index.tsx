import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { MainContent } from "@sections/Main";
import { CompaniesSection } from "@sections/companies";
import { ScaleTechTeamSection } from "@sections/scaleTechTeam";
import { BenefitsSection } from "@sections/benefits";
import { ThePillars } from "@sections/thePillars";
import { MultiTeamsSection } from "@sections/multiTeams";
import { StacksSection } from "@sections/techStacks";

function Home() {
  return (
    <>
      <MainContent />
      <CompaniesSection />
      <ScaleTechTeamSection />
      <BenefitsSection />
      <ThePillars />
      <MultiTeamsSection />
      <StacksSection />
    </>
  );
}

export default Home;

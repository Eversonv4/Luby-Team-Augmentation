import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MainContent } from "@sections/Main";
import { CompaniesSection } from "@sections/companies";
import { ScaleTechTeamSection } from "@sections/scaleTechTeam";
import { BenefitsSection } from "@sections/benefits";

function Home() {
  return (
    <>
      <MainContent />
      <CompaniesSection />
      <ScaleTechTeamSection />
      <BenefitsSection />
    </>
  );
}

export default Home;

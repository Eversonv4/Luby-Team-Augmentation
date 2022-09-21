import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MainContent } from "@sections/Main";
import { CompaniesSection } from "@sections/companies";

function Home() {
  return (
    <>
      <MainContent />
      <CompaniesSection />
    </>
  );
}

export default Home;

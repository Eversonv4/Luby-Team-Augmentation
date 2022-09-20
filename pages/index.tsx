import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MainContent } from "@components/Main";

function Home() {
  return (
    <div className={styles.main}>
      <MainContent />
    </div>
  );
}

export default Home;

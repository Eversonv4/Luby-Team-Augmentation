import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MainContent } from "@components/Main";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <MainContent />
    </div>
  );
};

export default Home;

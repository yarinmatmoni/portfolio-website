import Head from "next/head";
import MainSection from "../components/mainSection/MainSection";
import AboutSection from "../components/aboutSection/AboutSection";
import SkillsSection from "../components/skillsSection/SkillsSection";
import ProjectsSection from "../components/projectsSection/ProjectsSection";
import ContactSection from "../components/contactSection/ContactSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yarin Matmoni - Portfolio</title>
        <meta name="keywords" content="Yarin Matmoni , portfolio"></meta>
        <meta name="author" content="Yarin Matmoni"></meta>
      </Head>
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

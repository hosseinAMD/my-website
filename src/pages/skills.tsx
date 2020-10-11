import Head from "next/head";
import Hero from "components/Skills/Hero";
import SkillList from "components/Skills/SkillList";

const Skills: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Skills and Abilities | Hossein Ahmadi</title>
      </Head>
      <Hero />
      <SkillList />
    </div>
  );
};

export default Skills;

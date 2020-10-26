import EducationList from "components/Education/EducationList";
import Hero from "components/Education/Hero";
import Head from "next/head";

const Works: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Academic Experiences | Hossein Ahmadi</title>
      </Head>
      <Hero />
      <EducationList />
    </div>
  );
};

export default Works;

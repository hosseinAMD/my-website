import Hero from "components/Work/Hero";
import WorkList from "components/Work/WorkList";
import Head from "next/head";

const Works: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Work Experiences | Hossein Ahmadi</title>
      </Head>
      <Hero />
      <WorkList />
    </div>
  );
};

export default Works;

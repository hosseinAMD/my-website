import { IAbility } from "models/Ability";
import {
  DiJsBadge,
  DiLess,
  DiResponsive,
  DiReact,
  DiUikit,
  DiScrum,
  DiGit,
  DiNodejs,
} from "react-icons/di";
import { SiRedux, SiTypescript, SiTimescale } from "react-icons/si";
import { FaSchool, FaMobile } from "react-icons/fa";
import SkillItem from "./SkillItem";

const SkillList: React.FC = () => {
  const abilities: IAbility[] = [
    {
      icon: <DiJsBadge />,
      description:
        "Create modern websites and web applications by HTML, CSS and JavaScript",
    },
    {
      icon: <DiLess />,
      description:
        "Experienced in creating beautiful styles using CSS processors (Less, Sass)",
    },
    {
      icon: <FaMobile />,
      description: "Strong experience in responsive and mobile-friendly design",
    },
    {
      icon: <DiReact />,
      description:
        "Strong experience in development of powerful and optimized React applications",
    },
    {
      icon: <DiUikit />,
      description:
        "Implementation of User interfaces using libraries like TailwindCSS, Bootstrap, Material UI, AntDesign",
    },
    {
      icon: <SiRedux />,
      description:
        "Deep understanding of React Hooks, React Context and State managers like Redux",
    },
    {
      icon: <SiTypescript />,
      description: "Experienced in development of applications by TypeScript",
    },
    {
      icon: <DiScrum />,
      description: "Experienced in working in Agile Scrum Teams",
    },
    {
      icon: <DiGit />,
      description:
        "Structured projects and development process in Git, GitHub and GitLab",
    },
    {
      icon: <DiNodejs />,
      description: "Familiar with NodeJS, Python and Django",
    },
    {
      icon: <SiTimescale />,
      description:
        "Ability to program and adjust timelines and milestones of projects and release products in-time",
    },
    {
      icon: <FaSchool />,
      description:
        "Strong experience in teaching and caring junior developers and students",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <div className="mx-4 lg:w-2/3 lg:mx-auto flex-col space-y-3">
        {abilities.map((item, index) => (
          <SkillItem
            key={index}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList;

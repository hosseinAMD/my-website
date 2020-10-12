import { IWork } from "models/Work";
import WorkItem from "./WorkItem";

export const workList: IWork[] = [
  {
    company: "NINIX",
    role: "FRONT END DEVELOPER",
    start: "APRIL 2020",
    end: "CURRENTLY EMPLOYED",
    keys: [
      "Implemented web applications and websites from concept through deployment",
      "Develop and design useful reports in graph format",
      "Participation in technical research and design meetings",
    ],
  },
  {
    company: "PACHALCHI",
    role: "FRONT END DEVELOPER",
    start: "MARCH 2019",
    end: "APRIL 2020",
    keys: [
      "Implemented online shop, admin panels and support panels from concept through deployment",
      "Standardized all products in a very well mobile-friendly and responsive design",
      "Assessed UX and UI designs for technical feasibility",
      "Collaborated with product and development team members to implement new feature developments",
    ],
  },
  {
    company: "PARSINEGARAN NOYAN ALBORZ",
    role: "WEB DEVELOPER",
    start: "MARCH 2016",
    end: "MARCH 2019",
    keys: [
      "Implemented websites and web applications in large scales and compressed times",
      "Improved products visually and deployed in a high responsive and mobile friendly design",
      "High participation of idea box meetings and adjusting proposals",
    ],
  },
];

const WorkList: React.FC = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:space-y-0">
      {workList.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </div>
  );
};

export default WorkList;

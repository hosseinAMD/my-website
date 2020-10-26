import { IEducation } from "models/Education";
import EducationItem from "./EducationItem";

export const educationList: IEducation[] = [
  {
    title: "MASTER OF SOFTWARE ENGINEERING",
    university: "ISLAMIC AZAD UNIVERSITY",
    city: "TERHAN",
    start: "CURRENTLY STUDYING",
    end: "2019",
  },
  {
    title: "BACHELOR OF SOFTWARE ENGINEERING",
    university: "KHARAZMI UNIVERSITY",
    city: "TEHRAN",
    start: "2014",
    end: "2019",
  },
];

const EducationList: React.FC = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0">
      {educationList.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </div>
  );
};

export default EducationList;

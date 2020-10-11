import { cloneElement } from "react";
import { IAbility } from "models/Ability";

export interface SkillItemProps extends IAbility {}

const SkillItem: React.FC<SkillItemProps> = ({ icon, description }) => {
  return (
    <div className="flex flex-row shadow-md rounded-lg">
      <p className="w-1/12 text-2xl bg-blue-500 text-white rounded-l-lg p-3">
        {cloneElement(icon, { className: "mx-auto" })}
      </p>
      <p className="w-11/12 p-3 rounded-r-lg bg-gray-200 text-gray-800">
        {description}
      </p>
    </div>
  );
};

export default SkillItem;

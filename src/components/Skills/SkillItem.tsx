import { IAbility } from "models/Ability";

export interface SkillItemProps extends IAbility {}

const SkillItem: React.FC<SkillItemProps> = ({ icon, description }) => {
  return (
    <div>
      <p>{icon}</p>
      <p>{description}</p>
    </div>
  );
};

export default SkillItem;

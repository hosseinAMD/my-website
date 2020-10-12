import { IWork } from "models/Work";

export interface WorkItemProps extends IWork {}

const WorkItem: React.FC<WorkItemProps> = ({
  company,
  role,
  start,
  end,
  keys,
}) => {
  return (
    <div>
      <p>{role}</p>
      <p>{company}</p>
      <p>
        {start} - {end}
      </p>
      <p>Key Qualifications & Responsibilities:</p>
      <ul>
        {keys.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkItem;

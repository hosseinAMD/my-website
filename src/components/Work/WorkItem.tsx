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
    <div className="bg-gray-200 rounded-lg p-3 mx-3 shadow-md">
      <p className="text-gray-600 text-sm font-semibold">
        {start} - {end}
      </p>
      <p className="text-blue-800 text-xl font-bold">{role}</p>
      <p className="text-gray-800 text-lg font-semibold">{company}</p>
      <div className="h-1 bg-blue-800 m-2"></div>
      <p className="text-sm text-gray-800 font-semibold">
        Key Qualifications & Responsibilities:
      </p>
      <ul className="mt-2 text-sm list-disc list-inside text-gray-800">
        {keys.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkItem;

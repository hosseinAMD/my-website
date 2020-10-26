import { IEducation } from "models/Education";

export interface EducationItemProps extends IEducation {}

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  university,
  city,
  start,
  end,
}) => {
  return (
    <div className="bg-gray-200 rounded-lg p-3 mx-3 shadow-md">
      <p className="text-gray-600 text-sm font-semibold">
        {start} - {end}
      </p>
      <p className="text-green-800 text-xl font-bold">{title}</p>
      <p className="text-gray-800 text-lg font-semibold">
        {university} - {city}
      </p>
    </div>
  );
};

export default EducationItem;

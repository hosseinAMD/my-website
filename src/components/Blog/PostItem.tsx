import { IPost } from "models/Post";

export interface PostItemProps extends IPost {}

const PostItem: React.FC<PostItemProps> = ({
  title,
  description,
  image,
  url,
  publication,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow relative pb-3 w-72 mx-auto">
      <img src={image} alt={title} className="rounded-t-lg h-48" />
      <p className="p-3">
        <a
          href={url}
          target="_blank"
          className="text-blue-600 font-semibold transition duration-150 hover:text-blue-900"
        >
          {title}
        </a>
      </p>
      <p className="text-gray-900 text-sm px-2">{description}</p>
      <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs rounded-tr-lg rounded-bl-lg p-1">
        {publication}
      </span>
    </div>
  );
};

export default PostItem;

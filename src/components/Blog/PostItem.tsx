import { IPost } from "models/Post";

export interface PostItemProps extends IPost {}

const PostItem: React.FC<PostItemProps> = ({
  title,
  image,
  url,
  publication,
}) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>
        <a href={url} target="_blank">
          {title}
        </a>
      </p>
      <p>
        <span>{publication}</span>
      </p>
    </div>
  );
};

export default PostItem;

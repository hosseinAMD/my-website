import { IPost } from "models/Post";
import PostItem from "./PostItem";

export const posts: IPost[] = [
  {
    title: "Next.js Tutorial : Static and Dynamic Routing",
    description: "Why you should use Next.js and the basic concepts of routing",
    image: "/img/next-1.jfif",
    url:
      "https://codeburst.io/next-js-tutorial-static-and-dynamic-routing-fba70e26359a",
    publication: "codeburst",
  },
  {
    title: "How to use React Context — Part 1 : Class Components",
    description: "A practical guide into React Context",
    image: "/img/context-1.jfif",
    url: "https://codeburst.io/how-to-use-react-context-part-1-1e4ce38fe2dd",
    publication: "codeburst",
  },
  {
    title: "React Hooks: How to use useEffect()",
    description: "Basic concepts and practical tutorial of useEffect()",
    image: "/img/effect.jpeg",
    url:
      "https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f",
    publication: "Javascript in Plain English",
  },
  {
    title: "React Hooks for beginners, Sweet and a little complex",
    description: "How to use useState() in React",
    image: "/img/hook.jpeg",
    url:
      "https://medium.com/weekly-webtips/react-hooks-for-beginners-sweet-and-a-little-complex-31a1225bd2f7",
    publication: "Weekly Webtips",
  },
];

const PostList: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <p className="text-3xl text-center font-bold text-gray-900 mb-6">Blog</p>
      <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:space-y-0">
        {posts.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

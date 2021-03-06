import PostList from "components/Blog/PostList";
import Head from "next/head";

const Blog: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blogs | Hossein Ahmadi</title>
      </Head>
      <PostList />
    </div>
  );
};

export default Blog;

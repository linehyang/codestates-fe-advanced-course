import Head from "next/head";
import axios from "axios";

import Header from "../components/Header";
import Posts from "../components/Posts";

interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = ({ posts }: { posts: Array<PostsType> }) => {
  const PAGE_TITLE = "게시물 리스트";

  return (
    <>
      <Head>
        <title>Codestates FE advanced</title>
      </Head>
      <Header title={PAGE_TITLE} />
      <main>
        <Posts posts={posts} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const postsres = await axios("https://jsonplaceholder.typicode.com/posts");
  const posts: Array<PostsType> = postsres.data;

  return {
    props: { posts },
  };
}

export default Home;

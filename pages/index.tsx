import Head from "next/head";
import axios from "axios";

import Header from "../components/Header";

interface dataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = ({ posts }: { posts: Array<dataType> }) => {
  const PAGE_TITLE = "게시물 리스트";

  return (
    <>
      <Head>
        <title>Codestates FE advanced</title>
      </Head>
      <Header title={PAGE_TITLE} />
      <main>
        {posts.map(({ id, title, userId }) => {
          return (
            <div key={id}>
              <div>{id}</div>
              <div>{title}</div>
              <div>{userId}</div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios("https://jsonplaceholder.typicode.com/posts");
  const posts: Array<dataType> = res.data;

  return {
    props: { posts },
  };
}

export default Home;

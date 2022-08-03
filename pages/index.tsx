import Head from "next/head";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_TITLE = "게시물 리스트";
  const POST_LIMIT = 10;
  const offset = (currentPage - 1) * POST_LIMIT;
  const MAX_PAGE = Array.from(
    { length: Math.ceil(posts.length / POST_LIMIT) },
    (v, i) => i + 1
  );

  return (
    <>
      <Head>
        <title>Codestates FE advanced</title>
      </Head>
      <Header title={PAGE_TITLE} />
      <main>
        <Posts posts={posts} offset={offset} postLimit={POST_LIMIT} />
        <PageNationContainer>
          <PageButton
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            idx={0}
          >
            &lt;
          </PageButton>
          {MAX_PAGE.map((pageNumbr, idx) => {
            return (
              <PageButton
                key={`page : ${pageNumbr}`}
                onClick={() => setCurrentPage(pageNumbr)}
                currentPage={currentPage}
                idx={idx + 1}
              >
                {pageNumbr}
              </PageButton>
            );
          })}
          <PageButton
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === MAX_PAGE.length}
            idx={0}
          >
            &gt;
          </PageButton>
        </PageNationContainer>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const postsres = await axios("https://jsonplaceholder.typicode.com/posts");
  const posts: Array<PostsType> = postsres.data;

  return {
    props: { posts },
  };
};

export default Home;

const PageNationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 100px;
  padding-bottom: 10px;
`;

const PageButton = styled.button<{ currentPage?: number; idx?: number }>`
  width: 50px;
  height: 50px;
  border: 1px solid #c8c8c8;
  margin-top: 10px;
  font-size: 15px;
  background-color: ${(props) =>
    props.currentPage === props.idx ? "#6876BC" : "#D9D9D9"};
`;

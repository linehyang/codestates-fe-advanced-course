import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";

import Header from "../components/Header";
import PostDetail from "../components/PostDetail";
import CommentDetail from "../components/CommentDetail";

interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentsType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Detail = ({
  posts,
  comments,
}: {
  posts: PostsType;
  comments: Array<CommentsType>;
}) => {
  const PAGE_TITLE = "게시물 상세";

  return (
    <>
      <Head>
        <title>Codestates FE advanced</title>
      </Head>
      <Header title={PAGE_TITLE} />
      <main>
        <PostDetail posts={posts} />
        <CommentDetail comments={comments} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postsres = await axios(
    `https://jsonplaceholder.typicode.com/posts/${context.query.posts}`
  );

  const posts: PostsType = postsres.data;

  const commentsres = await axios(
    `https://jsonplaceholder.typicode.com/comments?postId=${context.query.posts}`
  );
  const comments: Array<CommentsType> = commentsres.data;

  return {
    props: { posts, comments },
  };
};

export default Detail;

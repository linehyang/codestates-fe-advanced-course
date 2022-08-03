import styled from "styled-components";

interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetail = ({ posts }: { posts: PostsType }) => {
  return (
    <PostsDetailContainer>
      <h2>게시물</h2>
      <Post>
        <PostTitle>
          <div>{posts.title}</div>
          <div>작성자: {posts.userId}</div>
        </PostTitle>
        <PostBody>{posts.body}</PostBody>
      </Post>
    </PostsDetailContainer>
  );
};

export default PostDetail;

const PostsDetailContainer = styled.div`
  margin: 50px 100px 0;

  > h2 {
    margin: 0 0 10px 10px;
    font-weight: 700;
    font-size: 20px;
  }
`;

const Post = styled.div`
  width: 100%;
  height: 250px;
  background-color: #d9d9d9;
  border-radius: 20px;
`;

const PostTitle = styled.div`
  border-bottom: 3px solid #fff;
  height: 100px;
  padding: 30px 10px 20px 30px;

  > div:first-child {
    height: 80%;
    font-size: 20px;
    font-weight: 700;
  }

  > div:last-child {
    text-align: end;
    padding-right: 5px;
  }
`;

const PostBody = styled.div`
  height: 150px;
  padding: 30px 10px 20px 30px;
`;

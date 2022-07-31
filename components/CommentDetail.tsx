import styled from "styled-components";

interface CommentsType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentDetail = ({ comments }: { comments: Array<CommentsType> }) => {
  console.log(comments);
  return (
    <CommentDetailContainer>
      <h2>댓글 {comments.length}개</h2>
      {comments.map(({ name, body, id, postId }) => {
        return (
          <Comment key={`${postId}_${id}st comment`}>
            <CommentName>{name}</CommentName>
            <CommentBody>{body}</CommentBody>
          </Comment>
        );
      })}
    </CommentDetailContainer>
  );
};

export default CommentDetail;

const CommentDetailContainer = styled.div`
  margin: 50px 100px 0;

  > h2 {
    margin: 0 0 10px 10px;
    font-weight: 700;
    font-size: 20px;
  }
`;

const Comment = styled.div`
  width: 100%;
  height: 130px;
  background-color: #d9d9d9;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const CommentName = styled.div`
  height: 50px;
  padding: 10px 10px 10px 30px;
  border-bottom: 3px solid #fff;
  font-size: 20px;
  font-weight: 700;
`;

const CommentBody = styled.div`
  padding: 10px 10px 10px 30px;
`;

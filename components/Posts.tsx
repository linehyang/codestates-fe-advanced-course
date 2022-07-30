import styled from "styled-components";
import { Fragment } from "react";

interface dataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = ({ posts }: { posts: Array<dataType> }) => {
  return (
    <PostsContainer>
      <TableContainer>
        <Thead>
          <tr>
            <th>번호</th>
            <th>제목 / 댓글</th>
            <th>작성자</th>
          </tr>
        </Thead>
        <tbody>
          <TableMargin value={30} />
          {posts.map((post) => {
            return (
              <Fragment key={`${post.id},${post.title}`}>
                <Post>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.userId}</td>
                </Post>
                <TableMargin value={10} />
              </Fragment>
            );
          })}
        </tbody>
      </TableContainer>
    </PostsContainer>
  );
};

export default Posts;

const PostsContainer = styled.div`
  margin: 50px 100px 0;
`;

const TableContainer = styled.table`
  width: 100%;
  text-align: center;
`;

const TableMargin = styled.tr<{ value: number }>`
  height: ${(props) => props.value}px;
`;

const Thead = styled.thead`
  font-weight: 700;
  height: 50px;
  background-color: #d9d9d9;

  > tr > th {
    vertical-align: middle;
  }

  > tr > th:first-child {
    width: 10%;
  }

  > tr > th:nth-child(2) {
    width: 80%;
  }

  > tr > th:last-child {
    width: 10%;
  }
`;

const Post = styled.tr`
  background-color: #d9d9d9;
  height: 80px;

  > td {
    vertical-align: middle;
  }

  > td:first-child {
    border-radius: 20px 0 0 20px;
  }

  > td:nth-child(2) {
    text-align: left;
  }

  > td:last-child {
    border-radius: 0 20px 20px 0;
  }
`;

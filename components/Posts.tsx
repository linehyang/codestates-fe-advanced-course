import styled from "styled-components";
import Link from "next/link";
import { Fragment } from "react";

interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = ({
  posts,
  offset,
  postLimit,
}: {
  posts: Array<PostsType>;
  offset: number;
  postLimit: number;
}) => {
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
          {posts
            .slice(offset, offset + postLimit)
            .map(({ id, title, userId }) => {
              return (
                <Fragment key={`${id},${title}`}>
                  <Link
                    href={{
                      pathname: "/detail",
                      query: { posts: id },
                    }}
                  >
                    <Post>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{userId}</td>
                    </Post>
                  </Link>
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

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Link href="/">
          <a>
            <Image src="/codeStates_Logo.jpeg" alt="Logo" layout="fill" />
          </a>
        </Link>
      </ImageContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  margin: 0 50px;
  border-bottom: 3px solid #ececec;

  > h1 {
    width: 100%;
    text-align: center;

    font-size: 25px;
    font-weight: 700;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  min-width: 150px;
  width: 10%;
  height: 90px;
`;

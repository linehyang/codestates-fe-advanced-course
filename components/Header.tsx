import styled from "styled-components";
import Image from "next/image";

const Header = ({ title }: { title: string }) => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Image src="/codeStates_Logo.jpeg" alt="Logo" layout="fill" />
      </ImageContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 0 50px;
  border-bottom: 3px solid #ececec;

  > h1 {
    width: 90%;
    font-weight: 700;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 100px;
  width: 10%;
  height: 100px;
`;

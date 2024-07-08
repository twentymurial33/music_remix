import styled from "styled-components";
import Image from "next/image";

function Header() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <Image src="logo.png" alt="Logo" height={40} width={20} />
        <StyledList>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <StyledSignIn>Sign in</StyledSignIn>
          </li>
          <li>
            <StyledRegister>Register</StyledRegister>
          </li>
        </StyledList>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const StyledWrapper = styled.div`
  background-color: #ff3366;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const StyledSignIn = styled.button`
  background-color: lightgray;
  color: black;
`;

const StyledRegister = styled.button`
  background-color: black;
  color: white;
`;
export default Header;

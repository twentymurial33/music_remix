import styled from "styled-components";

function Header() {
  return (
    <StyledWrapper>
      <h1>My Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <button>Sign Up</button>
        <button>Register</button>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: pink;
`;

export default Header;

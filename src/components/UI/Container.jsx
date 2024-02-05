import styled from "styled-components";

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;
import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 1.25rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin: 1.25rem 0.6rem;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: hidden;
    width: 50%;
  }
`;

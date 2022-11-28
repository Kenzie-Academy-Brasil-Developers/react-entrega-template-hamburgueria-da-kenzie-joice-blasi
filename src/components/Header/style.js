import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 140px;
  width: 100%;
  background-color: var(--grey-0);
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  div > img {
    height: 23px;
    width: 150px;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    height: 80px;

    div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

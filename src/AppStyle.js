import styled from "styled-components";

export const StyledContainer = styled.div`
  @media (min-width: 800px) {
    max-width: 780px;
    margin: 0 auto;
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;

    .products {
      width: 53%;
    }

    .cart {
      width: 45%;
    }
  }

  @media (min-width: 1000px) {
    max-width: 950px;

    .products {
      width: 60%;
    }

    .cart {
      width: 38%;
    }
  }
`;

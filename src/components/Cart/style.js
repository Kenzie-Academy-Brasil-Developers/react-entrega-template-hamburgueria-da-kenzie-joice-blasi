import styled from "styled-components";

export const StyledCart = styled.div`
  .container-title {
    background-color: var(--primary);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1rem 1.25rem;
  }

  .container-cart {
    background-color: var(--grey-0);
    padding: 1.25rem 0.8rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media (min-width: 800px) {
    position: sticky;
    top: 10px;
  }
`;

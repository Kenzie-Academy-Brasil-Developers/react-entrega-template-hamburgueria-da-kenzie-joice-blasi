import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  div:first-child {
    display: flex;
    gap: 0.625rem;
  }

  .container-image {
    width: 80px;
    height: 80px;
    background-color: var(--grey-20);
    text-align: center;
    border-radius: 5px;
  }

  .container-image > img {
    height: 100%;
    object-fit: cover;
  }

  .container-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .button-grey-default {
    border: none;
    border-radius: 8px;
    background-color: var(--grey-0);
    color: var(--grey-50);
    padding: 0.72rem 0.8rem;
  }

  .button-grey-default:hover {
    background-color: var(--grey-20);
    color: var(--grey-50);
  }
`;

export const StyledCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

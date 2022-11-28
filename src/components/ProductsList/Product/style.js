import styled from "styled-components";

export const StyledProduct = styled.li`
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  width: 250px;
  height: 360px;

  .container-image {
    background-color: var(--grey-0);
    width: 246px;
    height: 180px;
    text-align: center;
  }

  .container-image > img {
    height: 100%;
    object-fit: cover;
  }

  .container-info {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .button-colored-default {
    border: none;
    border-radius: 8px;
    background-color: var(--primary);
    color: #ffffff;
    padding: 0.72rem 1.25rem;
    width: fit-content;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .button-colored-default:hover {
    background-color: var(--primary-50);
  }
`;

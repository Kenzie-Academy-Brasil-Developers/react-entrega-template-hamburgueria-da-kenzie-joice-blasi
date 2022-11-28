import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #ffffff;
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  max-width: 300px;

  input {
    border: none;
    font-weight: 400;
    font-size: 1rem;
    max-width: 55%;
    color: var(--grey-50);
  }

  input::placeholder {
    color: var(--grey-20);
  }

  .button-colored-default {
    border: none;
    border-radius: 8px;
    background-color: var(--primary);
    padding: 0.72rem 1.25rem;
    max-width: 40%;
  }

  .button-colored-default:hover {
    background-color: var(--primary-50);
  }

  @media (min-width: 800px) {
    padding: 10px 15px;
  }
`;

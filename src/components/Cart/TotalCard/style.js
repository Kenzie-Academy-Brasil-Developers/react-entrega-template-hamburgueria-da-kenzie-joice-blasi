import styled from "styled-components";

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;

  .container-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  button {
    border: none;
    border-radius: 8px;
    background-color: var(--grey-20);
    color: var(--grey-50);
    padding: 0.72rem 0.8rem;
    width: 100%;
    font-weight: 600;
    font-size: 16px;
  }

  button:hover {
    background-color: var(--grey-50);
    color: var(--grey-20);
  }
`;

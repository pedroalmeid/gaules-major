import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  span {
    font-weight: 600;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
`;

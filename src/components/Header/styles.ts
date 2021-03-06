import styled from "styled-components";

export const Container = styled.header`
  background: var(--crayola-blue);
  width: 100%;
  height: 5rem;
  display: flex;

  @media (max-width: 565px) {
    height: auto;
    padding: 2rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  max-width: 64rem;
  margin: 0 auto;

  a {
    text-decoration: none;
    background: #fff;
    padding: 0.5rem 3rem;
    border-radius: 0.5rem;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    transition: filter 0.2s;

    p {
      color: var(--crayola-blue);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 565px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

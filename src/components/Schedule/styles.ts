import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 0;
  background: var(--xiketic-blue);
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: var(--crayola-blue);
      font-size: 1rem;
      font-weight: 600;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.65);
      }
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    padding-top: 2.5rem;

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 4rem;
    }

    nav {
      display: flex;
      gap: 3rem;
      align-items: center;

      a {
        height: 2.5rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        min-width: 16rem;
        transition: filter 0.2s;

        &:first-child {
          background: var(--crayola-blue);
        }

        &:last-child {
          background: var(--silver);
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;

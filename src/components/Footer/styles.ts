import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: var(--xiketic-blue);
  margin: 0;
  padding: 4rem 0 6rem 0;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Credits = styled.div`
  div:last-child {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p:last-child {
      color: var(--crayola-blue);

      a {
        text-decoration: none;
        font-weight: 500;
        color: var(--crayola-blue);
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.4;
        }
      }
    }
  }
`;

export const Social = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    color: var(--crayola-blue);
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.4;
    }
  }
`;

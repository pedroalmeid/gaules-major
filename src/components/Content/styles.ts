import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;
`;

export const Hero = styled.div`
  display: flex;
  padding-top: 3rem;
`;

export const Texts = styled.div`
  flex: 6;
  padding-top: 4rem;

  h1 {
    font-size: 3rem;

    span {
      color: var(--crayola-blue);
    }
  }

  p {
    margin-top: 2rem;
  }
`;

export const Photos = styled.div`
  flex: 4;
  display: grid;
  justify-content: flex-end;

  img:last-child {
    margin-top: -9rem;
    margin-left: 7.25rem;
  }
`;

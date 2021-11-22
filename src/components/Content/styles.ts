import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;
`;

export const Hero = styled.div`
  display: flex;
  padding-top: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }
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

  @media (max-width: 800px) {
    margin-top: 3rem;
    display: flex;
    align-items: center;

    img:last-child {
      margin-top: 0;
      margin-left: -2rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    img:last-child {
      margin-top: -4rem;
      margin-left: 0;
    }
  }
`;

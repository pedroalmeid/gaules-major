import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

type GameDayProps = {
  mainStream: boolean;
};

export const GameDay = styled.div<GameDayProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  header {
    font-size: 1.125rem;
    font-weight: 200;
    color: ${(props) =>
      props.mainStream ? "var(--space-blue)" : "var(--silver)"};
    text-decoration: underline;
    margin-bottom: 2.5rem;
  }
`;

export const Match = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    span {
      font-size: 1rem;
      font-weight: 700;
    }

    p {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

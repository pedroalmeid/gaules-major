import styled from "styled-components";

export const Container = styled.table`
  display: grid;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;

    th {
      font-size: 1.125rem;
      font-weight: 200;
      color: var(--space-blue);
      text-decoration: underline;
      text-align: center;
      margin: 1rem auto 0 auto; 
    }

    td {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

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
    }
  }
`;

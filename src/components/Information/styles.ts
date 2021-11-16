import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5.5rem;
  padding-bottom: 9rem;
  
  h2 {
    color: var(--heliotrope-purple);
    text-align: center;
    margin-bottom: 3rem;
  }

  div:last-child {
    margin-top: 7rem;
  }

`;

export const Dates = styled.table`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 21rem;

  tr {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    td p {
      text-align: right;
    }
  }
`
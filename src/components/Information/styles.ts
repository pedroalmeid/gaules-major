import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5.5rem;
  
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
  max-width: 21rem;
  margin: 0 auto;

  tr {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`
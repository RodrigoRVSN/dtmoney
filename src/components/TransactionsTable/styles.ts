import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  margin-top: 4rem;
  border-spacing: 0 0.5rem;

  th {
    padding: 1 2rem;
    text-align: left;
    padding: 1.4rem;
    color: var(--text-body);
    font-weight: 400;
  }

  td {
    background-color: var(--shape);
    color: var(--text-body);
    padding: 1.4rem;
    border: 0;

    &:first-child {
      color: var(--text-title);
    }

    &.outcome {
      color: var(--red);
    }

    &.income {
      color: var(--green);
    }
  }

  td > tr {
    border-radius: 0.25rem;
  }
`;

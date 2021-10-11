import styled from "styled-components";

interface Props {
  totalCard?: boolean;
}

export const Container = styled.div`
  margin-top: -5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const CardContent = styled.div<Props>`
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
    background-color: var(--shape);

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  strong {
    font-weight: 500;
    font-size: 2.25rem;
  }

  &.totalCard{
    background-color: var(--green);
  }
`;

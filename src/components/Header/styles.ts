import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: var(--blue);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  padding: 2rem 1rem 12rem;
`;

export const Button = styled.button`
  background-color: var(--blue-light);
  color: var(--shape);
  border: 0;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;

  transition: ease-in 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

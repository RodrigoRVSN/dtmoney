import { lighten, transparentize } from "polished";
import styled from "styled-components";

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  input {
    height: 4rem;
    padding: 1.4rem 1.5rem;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    background-color: var(--green);
    padding: 1.3rem 0;
    border: 0;

    font-weight: 600;
    font-size: 1rem;
    color: var(--shape);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TypeTransactionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0 1rem 0;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  padding: 1.1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  border: 1px solid #969cb3;
  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.25, colors[activeColor]) : "var(--shape)"};

  transition: border-color 0.3s;

  &:hover {
    border-color: ${lighten(0.1, "#969CB3")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: var(--text-title);
    font-size: 1rem;
  }
`;

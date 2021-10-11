import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #03045e;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }
  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  h2{
    color: var(--text-body);
  }
  
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-overlay{
    background-color: rgba(0,0,0,0.5);
    position: fixed;

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content{
    width: 100%;
    max-width: 580px;
    padding: 3rem;
    border-radius: 0.25rem;

    background-color: var(--background);
    position: relative;
  }

  .modal-close-button{
    position: absolute;
    top: 21px;
    right: 21px;

    cursor: pointer;

    transition: filter 0.3s;

    &:hover{
      filter: brightness(0.8);
    }
  }

  ::-webkit-scrollbar{
    background-color: var(--background);
    height: 0.5rem;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--blue-light);
    border-radius: 1rem;
  }
  `;

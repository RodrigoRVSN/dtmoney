import Modal from "react-modal";

import { Container, RadioBox, TypeTransactionContainer } from "./styles";

import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface ModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

Modal.setAppElement("#root");

export function ModalNewTransaction({ onRequestClose, isOpen }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, price, type, category };
    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <img
        className="modal-close-button"
        onClick={onRequestClose}
        src={closeSvg}
        alt="Fechar Modal"
      />
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Preço"
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <TypeTransactionContainer>
          <RadioBox
            type="button"
            isActive={type === "income"}
            onClick={() => setType("income")}
            activeColor="green"
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "outcome"}
            onClick={() => setType("outcome")}
            activeColor="red"
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TypeTransactionContainer>

        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

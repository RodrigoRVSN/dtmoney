import { Button, HeaderContainer, HeaderContent } from "./styles";

import logoSvg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="logo" />
        <Button onClick={onOpenTransactionModal}>Nova transação</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}

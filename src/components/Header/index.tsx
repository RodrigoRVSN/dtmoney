import { Button, HeaderContainer, HeaderContent } from "./styles";

import logoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="logo" />
        <Button>Nova transação</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}

import { Container, CardContent } from "./styles";

import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>

      <CardContent>
        <header>
          <span>Entradas</span>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 17400,00</strong>
      </CardContent>

      <CardContent>
        <header>
          <span>Saídas</span>
          <img src={outcomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 17400,00</strong>
      </CardContent>

      <CardContent className="totalCard">
        <header>
          <span>Total</span>
          <img src={totalSvg} alt="Entradas" />
        </header>
        <strong>R$ 17400,00</strong>
      </CardContent>

    </Container>
  );
}

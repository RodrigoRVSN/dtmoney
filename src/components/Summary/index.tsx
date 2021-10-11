import { Container, CardContent } from "./styles";

import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";
import { useTransactions } from "../../contexts/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcomes += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <CardContent>
        <header>
          <span>Entradas</span>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.incomes)}
        </strong>
      </CardContent>

      <CardContent>
        <header>
          <span>Saídas</span>
          <img src={outcomeSvg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.outcomes)}
        </strong>
      </CardContent>

      <CardContent className="totalCard">
        <header>
          <span>Total</span>
          <img src={totalSvg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </CardContent>
    </Container>
  );
}

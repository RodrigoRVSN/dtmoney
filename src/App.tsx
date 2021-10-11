import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { createServer, Model } from "miragejs";
import { useState } from "react";
import { ModalNewTransaction } from "./components/ModalNewTransaction";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela site",
          type: "income",
          category: "Work",
          amount: 8000,
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <ModalNewTransaction
        onRequestClose={handleCloseTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
    </>
  );
}

export default App;

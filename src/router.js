import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Feira from "pages/Feira";
import UsuarioProvider from "common/contexts/Usuario";
import CarrinhoProvider from "common/contexts/Carrinho";
import Carrinho from "pages/Carrinho";
import { PagamentoProvider } from "common/contexts/Pagamento";

export default function Routes() {
  const [nome, setNome] = React.useState("");
  const [saldo, setSaldo] = React.useState(0);
  return (
    <Router>
      <Switch>
        <PagamentoProvider>
          <UsuarioProvider>
            <Route exact path="/">
              <Login
                nome={nome}
                setNome={setNome}
                saldo={saldo}
                setSaldo={setSaldo}
              />
            </Route>
            <CarrinhoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </CarrinhoProvider>
          </UsuarioProvider>
        </PagamentoProvider>
      </Switch>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Feira from "pages/Feira";
import { UsuarioProvider } from "common/contexts/Usuario";
import Carrinho from "pages/Carrinho";
import { CarrinhoProvider } from "common/contexts/Carrinho";
import { PagamentoProvider } from "common/contexts/Pagamento";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
            <PagamentoProvider>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </PagamentoProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Feira from "pages/Feira";
import UsuarioProvider from "common/contexts/Usuario";
import CarrinhoProvider from "common/contexts/Carrinho";
import Carrinho from "pages/Carrinho";
import { PagamentoProvider } from "common/contexts/Pagamento";
import { UsuarioContext } from "common/contexts/Usuario";

export default function Routes() {
  const [nome, setNome] = React.useState("");
  const [saldo, setSaldo] = React.useState(0);
  return (
    <Router>
      <Switch>
        <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
          <Route exact path="/">
            <Login />
          </Route>
        </UsuarioContext.Provider>
        <Route path="/feira">
          <Feira />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </Router>
  );
}

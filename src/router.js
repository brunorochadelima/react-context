import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Feira from "pages/Feira";
import { UsuarioProvider } from "common/contexts/Usuario";
import Carrinho from "pages/Carrinho";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/feira">
            <Feira />
          </Route>
        </UsuarioProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </Router>
  );
}

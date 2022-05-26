import React from "react";
import { createContext } from "react";
export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuário'

export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = React.useState("");
  const [saldo, setSaldo] = React.useState(0);

  return (
    <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
      {children}
    </UsuarioContext.Provider>
  );
};

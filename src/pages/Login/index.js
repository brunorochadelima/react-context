import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "common/contexts/Usuario";

import { Input, InputLabel, InputAdornment } from "@material-ui/core";

function Login() {
  const history = useHistory();

  return (
    <Container>
      <UsuarioContext.Consumer>
        {({nome, setNome, saldo, setSaldo}) => (
          <>
            <Titulo>Insira o seu nome</Titulo>
            <InputContainer>
              <InputLabel>Nome</InputLabel>
              <Input
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Saldo</InputLabel>
              <Input
                type="number"
                value={saldo}
                onChange={(event) => setSaldo(event.target.value)}
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              disabled={nome.length < 4}
              onClick={() => history.push("/feira")}
            >
              Avançar
            </Button>
          </>
        )}
      </UsuarioContext.Consumer>
    </Container>
  );
}

export default Login;

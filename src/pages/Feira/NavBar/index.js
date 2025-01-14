import { Nav } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {useCarrinhoContext} from 'common/contexts/Carrinho'
import { useHistory } from 'react-router-dom'

export default function NavBar() {
  const {quantidadeCarrinho} = useCarrinhoContext();
  const history = useHistory();
  return (
    <Nav>
      <Logo />
      <IconButton
      disabled={quantidadeCarrinho === 0}>
        <Badge color="primary"
         badgeContent={quantidadeCarrinho}
         onClick={() => history.push('/carrinho')}
         >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}


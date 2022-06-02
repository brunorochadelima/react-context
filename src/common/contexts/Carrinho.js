import React from "react";
import { createContext, useContext } from "react";
export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState([]);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = React.useState();
  const [valorTotalCarrinho, setValorTotalCarrinho] = React.useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeCarrinho,
        setQuantidadeCarrinho,
        valorTotalCarrinho,
        setValorTotalCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado para isolar a responsabilidade de adicionar produto no carrinho
export const useCarrinhoContext = () => {
  const {
    carrinho,
    setCarrinho,
    quantidadeCarrinho,
    setQuantidadeCarrinho,
    valorTotalCarrinho,
    setValorTotalCarrinho,
  } = useContext(CarrinhoContext);

  function mudarQuantidade(id, quantidade) {
    return carrinho.map((itemDoCarrinho) => {
      if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
      return itemDoCarrinho;
    });
  }

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    );

    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }

    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  }

  function removerProduto(id, quantidade) {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    if (ehOUltimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
      );
    }

    setCarrinho(mudarQuantidade(id, -1));
  }

  React.useEffect(() => {
    const { novoTotal, novaQuantidade } = carrinho.reduce(
      (acumulador, produto) => ({
        novaQuantidade: acumulador.novaQuantidade + produto.quantidade,
        novoTotal: acumulador.novoTotal + produto.valor * produto.quantidade,
      }),
      { novoTotal: 0, novaQuantidade: 0 }
    );
    setQuantidadeCarrinho(novaQuantidade);
    setValorTotalCarrinho(novoTotal);
  }, [carrinho, setQuantidadeCarrinho, setValorTotalCarrinho]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeCarrinho,
    valorTotalCarrinho,
  };
};

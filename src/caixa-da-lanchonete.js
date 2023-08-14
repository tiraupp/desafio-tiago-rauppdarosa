import { cardapio } from "./bancodedados/cardapio.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    let carrinho = [];
    let valorPedido = 0;
    let quantidadeItens = 0;
    const itensEscolhido = itens.map((item) => {
      return item.split(",");
    });
    if (itensEscolhido.length === 0) {
      return "Não há itens no carrinho de compra!";
    }
    for (let produto of itensEscolhido) {
      if (produto[1] <= 0) {
        return "Quantidade inválida!";
      }
      const montarCarrinho = cardapio.find((item) => {
        return item.codigo === produto[0];
      });
      if (!montarCarrinho) {
        return "Item inválido!";
      }
      valorPedido += montarCarrinho.valor * produto[1];
      quantidadeItens += produto[1];
      carrinho.push({
        codigo: montarCarrinho.codigo,
        extra: montarCarrinho.extra,
        codigoExtra: montarCarrinho.codigoExtra,
      });
    }
    for (let produto of carrinho) {
      if (produto.extra) {
        const verificarExtra = carrinho.some((item) => {
          return produto.codigoExtra === item.codigo;
        });
        if (!verificarExtra) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }
    }
    switch (metodoDePagamento) {
      case "dinheiro":
        return `R$ ${String(((valorPedido * 0.95) / 100).toFixed(2)).replace(".",",")}`;
      case "debito":
        return `R$ ${String((valorPedido / 100).toFixed(2)).replace(".", ",")}`;
      case "credito":
        return `R$ ${String(((valorPedido * 1.03) / 100).toFixed(2)).replace(".",",")}`;
      default:
        return "Forma de pagamento inválida!";
    }
  }
}

export { CaixaDaLanchonete };

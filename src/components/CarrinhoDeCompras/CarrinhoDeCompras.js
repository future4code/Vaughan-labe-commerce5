import React from "react";
import styled from "styled-components";

const Carrinho = styled.div`
  border: 1px solid black;
`

class CarrinhoDeCompras extends React.Component{
  state = {
    adicionado: false,
    numeroItens: 0,
    valorTotal: 0
  }

  onClickAdicionar = () => {
    let novoNumeroItens;
  

  if(this.state.adicionado) {
    novoNumeroItens = this.state.numeroItens - 1;
  } else {
    novoNumeroItens = this.state.numeroItens + 1;
  }
  this.setState({
    adicionado: !this.state.adicionado,
    numeroItens: novoNumeroItens
  })
}

  removerProduto = (IdDeletar) => {
    const copiaLista = [...this.state.produtos]
    const produtos = copiaLista.filter((produto) => {
      return IdDeletar !== produto.id;
    })  
    this.setState({listaDeProdutos: produtos})}
  
  render(){
    return (
      <div>
        <button onClick={this.removerProduto}>Remover</button>
      </div>
    )
  }
}


export default CarrinhoDeCompras;
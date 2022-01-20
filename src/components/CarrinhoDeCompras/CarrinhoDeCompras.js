import React from 'react';
import './App.css';
import styled from 'styled-components';

CarrinhoDeComprasBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
`

class CarrinhoDeCompras extends React.Component {
  state = {
    produtos: [
      {id: 1, nome: "camisa estampada branca", preco: 50},
      {id: 2, nome: "camisa estampada preta", preco: 60}
    ]
  }

  removerProduto = (idDeletar) => {
    const copiaListaDeProdutos = [...this.state.produtos];
    const produtosRestantes = copiaListaDeProdutos.filter((produto) => {
      return idDeletar !== produto.id;
    })
    this.setState({produtos: produtosRestantes})
  }

  render(){
      return(
          <CarrinhoDeComprasBox>
              {produtos.nome}
              <button onClick={() => {this.removerProduto(produto.id);}}>Remover</button>
          </CarrinhoDeComprasBox>
      )
  }
}


export default CarrinhoDeCompras;

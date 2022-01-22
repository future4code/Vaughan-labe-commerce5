import React from "react";
import styled from "styled-components";


class CarrinhoDeCompras extends React.Component {
    state = {
        produtos: [
        {
          id: 1,
          name: 'Produto 1',
          price: 30,
          photo: 'https://picsum.photos/200/200?a=1'
        },
        {
          id: 2,
          name: 'Produto 2',
          price: 85,
          photo: 'https://picsum.photos/200/200?a=2'
        },
        {
          id: 3,
          name: 'Produto 3',
          price: 45,
          photo: 'https://picsum.photos/200/200?a=3'
        },
        {
          id: 4,
          name: 'Produto 4',
          price: 80,
          photo: 'https://picsum.photos/200/200?a=4'
        },
  
        {
          id: 5,
          name: 'Produto 5',
          price: 80,
          photo: 'https://picsum.photos/200/200?a=5'
        },
  
        {
          id: 6,
          name: 'Produto 6',
          price: 80,
          photo: 'https://picsum.photos/200/200?a=6'
        }
      ],
  
      query: "",
      minPrice:"",
      maxPrice: ""
    }
  
    updateQuery = (ev) => {
      this.setState({
        query: ev.target.value
      })
    }
    
    updateMinPrice = (ev) => {
      this.setState({
        minPrice: ev.target.value
      })
    }
    
    updateMaxPrice = (ev) => {
      this.setState({
        maxPrice: ev.target.value
      })
    }
  
    adicionarProduto = (IdParaAdicionar) => {
      const listaCopiada = [...this.state.produtos]
      const produtoAdicionado = listaCopiada.filter((prod) => {
          return IdParaAdicionar === prod.id;
      })
      this.setState({produtos: produtoAdicionado})

  } 
  

  removerProduto = (IdDeletar) => {
    const copiaLista = [...this.state.produtos]
    const listaDeProdutos = copiaLista.filter((produto) => {
      return IdDeletar !== produto.id;
    })  
    this.setState({produtos: listaDeProdutos})}
  
  render(){
    return (
      <div>
        <button onClick={() => {this.removerProduto()}}>Remover</button>
      </div>
    )
  }
}


export default CarrinhoDeCompras;
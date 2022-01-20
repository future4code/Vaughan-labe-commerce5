import React from 'react';
import './App.css';
import styled from 'styled-components'

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`
const Filtros = styled.div`
  border: 1px solid black;
`

const Produtos = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
  border: 1px solid black;
`

const Carrinho = styled.div`
  border: 1px solid black;
`

class App extends React.Component {

  // state = {}

  render() {
    return (
      <Root>
        <Filtros><h3>Filtros:</h3></Filtros>
        <Produtos><p>Quantidade de Produtos: </p> <p>Ordenação: </p></Produtos>
        <Carrinho><h3>Carrinho:</h3></Carrinho>
      </Root>    
    );
  }
}

export default App
import React from 'react';
import './App.css';
import styled from 'styled-components'

const RootDoRoot = styled.div`
  display: block;
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`
const Filtros = styled.div`
  border: 1px solid black;
`

const HeaderProdutos = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
  width: 100%;
`

const Produtos = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
  border: 1px solid black;
  flex-direction: column;
`

const Carrinho = styled.div`
  border: 1px solid black;
`

const CardContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

const ProductImg = styled.div`
  border: 1px solid black;
  /* display: flex; */
  flex-direction: column;
`
const listaProdutos = [
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
  }
]

class App extends React.Component {

  state = {
    query: ""
  }

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  render() {
    return (
      <RootDoRoot>
        <Root>
          <Filtros>
            <h3>Filtros:</h3>
            <div>
              <input
                placeholder='Pesquisa'
                value={this.state.query}
                onChange={this.updateQuery}
              />
            </div>
          </Filtros>

          <Produtos>
            <HeaderProdutos>
              <p>Quantidade de Produtos:</p>
              <label>Ordenação</label>
            </HeaderProdutos>

            <CardContainers>
              <ProductImg>
                <img src='https://picsum.photos/200' />
                <p>Produto 1</p>
                <button>adicionar ao carrinho</button>
              </ProductImg>

              <ProductImg>
                <img src='https://picsum.photos/200' />
                <p>Produto 2</p>
                <button>adicionar ao carrinho</button>
              </ProductImg>

              <ProductImg>
                <img src='https://picsum.photos/200' />
                <p>Produto 3</p>
                <button>adicionar ao carrinho</button>
              </ProductImg>

              <ProductImg>
                <img src='https://picsum.photos/200' />
                <p>Produto 4</p>
                <button>adicionar ao carrinho</button>
              </ProductImg>

            </CardContainers>

          </Produtos>

          <Carrinho><h3>Carrinho:</h3></Carrinho>
        </Root>
      </RootDoRoot>
    );
  }
}

export default App
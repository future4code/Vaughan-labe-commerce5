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
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

class App extends React.Component {

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



  render() {
    
    const osProdutos = this.state.produtos.map((produto) => {
      return <>
        <ProductImg>
          <img src={produto.photo}/>
          <p>{produto.name}</p>
          <button>Adicionar ao Carrinho</button>
        </ProductImg>
      </>
    })

    return <>
      <RootDoRoot>
        <Root>
          <Filtros>
            <h3>Filtros:</h3>
            {/* <div>
              <input
                placeholder='Pesquisa'
                value={this.state.query}
                onChange={this.updateQuery}
              />

              <input
                type= 'number'
                placeholder='Preço mínimo'
                value={this.state.query}
                onChange={this.updateMinPrice}
              />
            
              <input
                type= 'number'
                placeholder='Preço máximo'
                value={this.state.query}
                onChange={this.updateMaxPrice}
              />
            </div> */}
          </Filtros>

          <Produtos>
            <HeaderProdutos>
              <p>Quantidade de Produtos:</p> 
              <label>Ordenação</label>
            </HeaderProdutos>

            <CardContainers>
              {osProdutos}              
            </CardContainers>
            
          </Produtos>

          <Carrinho><h3>Carrinho:</h3></Carrinho>
        </Root>    
      </RootDoRoot>
    </>
  }
}

export default App
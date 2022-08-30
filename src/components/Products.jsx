import styled from "styled-components"
import { popularProducts } from "../data"

const Products = () => {
  return (
    <Container>
      <h1>POPULAR PRODUCTS</h1>
      <Wrapper>
        {popularProducts.map(product => {
          return (
            <Product product={product} key={`product${product.id}`} />
          )
        })}
      </Wrapper>
    </Container>
  )
}

const Product = (props) => {
  return (
    <ProductWrapper>
      <ProductForeground>
        <span class="material-symbols-outlined">
          heart_plus
        </span>
        <span class="material-symbols-outlined">
          visibility
        </span>
        <span class="material-symbols-outlined">
          add_shopping_cart
        </span>
      </ProductForeground>
      <ImageContainer>
        <img src={props.product.img} alt='product' />
      </ImageContainer>
    </ProductWrapper>
  )
}

const Container = styled.div`
  text-align: center;
  color: #fff;
  background-color: #cbc0c0;
  & h1 {
    margin: 0;
    padding: 32px 16px 16px;
  }
  user-select: none;
  padding-bottom: 48px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const ProductWrapper = styled.div`
  width: 200px;
  margin: 12px 60px;
  display: flex;
  justify-content: center;
`

const ProductForeground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 200px;
  width: 200px;
  margin: 8px;
  padding: 16px;
  transition: .1s ease;
  & span {
    display: none;
    color: #fff;
    padding: 8px;
    margin: 12px;
    border: solid #fff 2px;
    border-radius: 50%;
    cursor: pointer;
    transition: .1s ease;
    &:hover {
      background-color: #333;
    }
  }
  &:hover {
    background-color: #33333380;
    & span {
      display: inline;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  margin: 8px;
  padding: 16px;
  & img {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
`

export default Products
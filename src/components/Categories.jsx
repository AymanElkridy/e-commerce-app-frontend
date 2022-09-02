import styled from "styled-components"
import { categories } from "../data"

const Categories = () => {
  return (
    <Container>
      {categories.map(category => 
        <Category category={category} key={`category${category.id}`}/>  
      )}
    </Container>
  )
}

const Category = (props) => {
  return (
    <Wrapper>
      <CategoryImage>
        <img src={props.category.img} alt={props.category.title} />
      </CategoryImage>
      <CategoryTitle>
        <h1>{props.category.title}</h1>
      </CategoryTitle>
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 100%;
  background: rgb(248,248,255);
  background: linear-gradient(90deg, rgba(248,248,255,1) 0%, rgba(255,248,248,1) 50%, rgba(248,255,248,1) 100%);
  user-select: none;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 16px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 360px;
  margin: 24px 12px;
  cursor: pointer;
  transition: ease .5s;
  &:hover {
    filter: brightness(1.08);
    transform: scale(1.03);
  }
  @media screen and (max-width: 768px) {
    height: 256px;
    width: 100%;
    margin: 4px 24px;
  }
`

const CategoryImage = styled.div`
  height: 100%;
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CategoryTitle = styled.div`
  position: absolute;
  width: 265px;
  font-weight: 900;
  color: #fff;
  font-size: 14px;
`

export default Categories
import styled from "styled-components"
import { categories } from "../data"
import Category from "./Category"

const Categories = () => {
  return (
    <Container>
      {categories.map(category => 
        <Category category={category} key={`category${category.id}`}/>  
      )}
    </Container>
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
`

export default Categories
import styled from "styled-components"

const Category = (props) => {
  return (
    <Wrapper>
      <CategoryImage>
        <img src={props.category.img} />
      </CategoryImage>
      <CategoryTitle>
        <h1>{props.category.title}</h1>
      </CategoryTitle>
    </Wrapper>
  )
}

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
`

export default Category
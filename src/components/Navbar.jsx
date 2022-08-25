import styled from "styled-components"

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  min-width: 256px;
`

const Left = styled.div`
  flex: 1;
`

const Center = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
`

export default Navbar
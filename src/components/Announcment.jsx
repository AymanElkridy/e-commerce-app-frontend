import styled from "styled-components"

const Announcment = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          SUPER MEGA OFFERS UP TO 80% OFF
        </Text>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 28px;
  background-color: #06c25e;
  transition: .25s;
  cursor: pointer;
  &:hover {
      filter: brightness(1.1);
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    min-height: 28px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding-top: 4px;
`

const Text = styled.h3`
  margin: 0;
  color: #fff;
  text-transform: uppercase;
`

export default Announcment
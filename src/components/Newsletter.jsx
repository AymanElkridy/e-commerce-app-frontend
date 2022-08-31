import styled from "styled-components"

const Newsletter = () => {
  return (
    <Container>
      <TextWrapper>
        <Header>Our Newsletter</Header>
        <Text>Subscribe to our newsletter to stay up-to-date with our newest offers!</Text>
      </TextWrapper>
      <InputWrapper>
        <InputField placeholder="Enter your email" />
        <InputButton>
          <span class="material-icons">
            send
          </span>
        </InputButton>
      </InputWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 35vh;
  background: rgb(248,248,255);
  background: linear-gradient(90deg, rgba(248,248,255,1) 0%, rgba(255,248,248,1) 50%, rgba(248,255,248,1) 100%);
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Header = styled.h1`
  color: #000;
  margin: 0;
`

const Text = styled.p`
  color: #000;
  font-size: 20px;
  margin: 12px 0 24px;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 480px;
`

const InputField = styled.input`
  flex: 7;
  outline: none;
  height: 42px;
  font-size: 20px;
  padding-left: 12px;
  border: solid 2px #06c25e;
`

const InputButton = styled.button`
  flex: 1;
  background-color: #06c25e;
  border: 0;
  height: 48px;
  font-size: 32px;
  cursor: pointer;
  transition: .25s;
  &:hover {
    filter: brightness(1.1);
    box-shadow: 4px 0 8px #06c25e99;
  }
`

export default Newsletter
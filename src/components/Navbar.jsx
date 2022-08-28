import styled from "styled-components"

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>
            <span>EN</span>
          </Languages>
          <SearchContainer>
            <SearchBar placeholder="Search for products" />
            <SearchIcon>
              <span class="material-icons">
                search
              </span>
            </SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <h1>GODOT.</h1>
        </Center>
        <Right>
          <SignUp>
            <span>SIGN UP</span>
          </SignUp>
          <Login>
            LOGIN
          </Login>
        </Right>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff;
  user-select: none;
  position: sticky;
`

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  width: 90%;
  min-width: 256px;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Languages = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
  transition: .2s;
  text-decoration: underline transparent;
  &:hover {
    text-decoration-color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SearchContainer = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #999;
  border-radius: 14px;
  height: 28px;
  margin: 0 8px;
`

const SearchBar = styled.input`
  flex: 9;
  border: none;
  background: none;
  margin-left: 8px;
  &:focus {
    outline: none;
  }
`

const SearchIcon = styled.div`
  flex: 1;
  color: #777;
  padding-top: 2px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0 0;
  & h1 {
    margin: 0;
    font-size: 2.5rem;
    cursor: pointer;
    transition: .25s;
    &:hover {
      text-shadow: 0 0 8px #fff;
    }
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const SignUp = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  margin: 0 8px;
  & span {
    margin: 8px 8px 4px;
  }
  background-color: #06c25e;
  border: solid 2px #333;
  cursor: pointer;
  transition: .25s;
  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 0 8px #06c25e99;
  }
`

const Login = styled.div`
  padding: 8px 8px 4px;
  cursor: pointer;
  transition: .2s;
  text-decoration: underline transparent;
  &:hover {
    text-decoration-color: #fff;
  }
`

export default Navbar
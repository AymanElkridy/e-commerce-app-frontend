import styled from "styled-components"

const Navbar = () => {
  const toggleSearch = () => {
    document.getElementById('responsive-search-container').classList.toggle('hidden')
    const icon = document.getElementById('toggle-search-icon')
    icon.innerText = icon.innerText === 'search' ? 'close' : 'search'
  }

  const toggleMenu = () => {
    document.getElementById('responsive-menu').classList.toggle('hidden')
    const icon = document.getElementById('toggle-menu-icon')
    icon.innerText = icon.innerText === 'menu' ? 'close' : 'menu'
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <SearchIconResponsive onClick={toggleSearch}>
              <span class="material-icons" id="toggle-search-icon">
                search
              </span>
            </SearchIconResponsive>
            <Languages>
              <span class="material-icons">
                  language
              </span>
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
            <HamburgerButtonResponsive onClick={toggleMenu}>
              <span class="material-icons" id="toggle-menu-icon">
                menu
              </span>
            </HamburgerButtonResponsive>
          </Right>
        </Wrapper>
      </Container>
      <Responsive>
        <ResponsiveSearchContainer className="hidden" id="responsive-search-container">
          <SearchBar placeholder="Search for products" />
            <SearchIcon>
              <span class="material-icons">
                search
              </span>
            </SearchIcon>
        </ResponsiveSearchContainer>
        <ResponsiveMenu className="hidden" id="responsive-menu">
          <ul>
            <li>Language</li>
            <li>Sign Up</li>
            <li>Login</li>
          </ul>
        </ResponsiveMenu>
      </Responsive>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff;
  user-select: none;
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

const SearchIconResponsive = styled.div`
  height: 16px;
  width: 16px;
  padding: 8px;
  color: #fff;
  border: 2px solid #666;
  border-radius: 25%;
  display: none;
  cursor: pointer;
  &:active {
    background-color: #666;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Languages = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SearchBar = styled.input`
  flex: 9;
  border: none;
  background: none;
  margin-left: 8px;
  height: 24px;
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
  @media screen and (max-width: 768px) {
    display: none;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const HamburgerButtonResponsive = styled.div`
  height: 16px;
  width: 16px;
  padding: 8px;
  color: #fff;
  border: 2px solid #666;
  border-radius: 25%;
  display: none;
  cursor: pointer;
  &:active {
    background-color: #666;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Responsive = styled.div`
  display: flex;
  height: 0;
  user-select: none;
`

const ResponsiveSearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #999;
  border-radius: 14px;
  height: 28px;
  margin: 0 8px;
  position: relative;
  top: -12px;
  z-index: 1200;
  width: 256px;
  &.hidden {
    display: none;
  }
`

const ResponsiveMenu = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  border: solid 1px #999;
  margin-left: auto;
  height: fit-content;
  position: relative;
  top: -12px;
  z-index: 1200;
  width: 128px;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    & li {
      padding: 16px;
      border-bottom: solid 1px #999;
      width: 100%;
      transition: ease .1s;
      cursor: pointer;
      &:hover {
        background-color: #06c25e;
      }
    }
  }
  &.hidden {
    display: none;
  }
`

export default Navbar
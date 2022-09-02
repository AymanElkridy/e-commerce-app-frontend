import styled from "styled-components"
import { facebook, instagram, pinterest, twitter } from '../assets/img/social-icons/exports'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>GODOT.</Logo>
          <Desc>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Desc>
          <SocialIcons>
            <SocialIcon src={facebook} alt='facebook-icon' bg='1877f2' />
            <SocialIcon src={instagram} alt='instagram-icon' bg='dc2743' />
            <SocialIcon src={pinterest} alt='pinterest-icon' bg='bd081c' />
            <SocialIcon src={twitter} alt='twitter-icon' bg='1da1f2' />
          </SocialIcons>
        </Left>
        <Center>
          <h2>Useful Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Vendors</li>
            <li>Delivery</li>
            <li>Global</li>
            <li>Local</li>
            <li>Complaints</li>
          </ul>
        </Center>
        <Right>
          <h2>Contact Us</h2>
          <ContactItems>
            <Contact>
              <p><span class="material-icons">room</span></p><p>221B Baker Street, London, UK</p>
            </Contact>
            <Contact>
              <p><span class="material-icons">phone</span></p><p>+1 234 456 7890</p>
            </Contact>
            <Contact>
              <p><span class="material-icons">mail</span></p><p>contact-email@godot.dev</p>
            </Contact>
          </ContactItems>
        </Right>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  margin: 24px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 90%;
    min-width: 256px;
    text-align: center;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #333;
  }
`

const Logo = styled.h1`
  margin: 0 0 8px;
  user-select: none;
  cursor: pointer;
  width: fit-content;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

const Desc = styled.p`
  font-weight: 300;
  margin: 8px 0;
  width: 90%;
  text-align: justify;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SocialIcons = styled.div`
  margin-top: 16px;
  user-select: none;
  @media screen and (max-width: 768px) {
    margin-top: 8px;
    display: flex;
    justify-content: space-around;
    width: 280px;
  }
`

const SocialIcon = styled.img`
  width: 30px;
  background-color: #${props => props.bg};
  border-radius: 50%;
  padding: 5px;
  margin-right: 12px;
  transition: ease .25s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  & h2 {
    margin: 0 0 0 8px;
    padding: 0 0 0 8px;
    width: 70%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  & ul {
    list-style: none;
    font-weight: 300;
    columns: 2;
    margin: 8px 0 0 8px;
    padding: 8px 0 0;
    width: fit-content;
    @media screen and (max-width: 768px) {
      columns: unset;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0;
      & li:nth-child(n+6) {
        display: none;
      }
    }
    & li {
      margin: 4px;
      padding: 4px;
      &:nth-child(6) {
        padding-top: 8px;
        @media screen and (max-width: 768px) {
          padding-top: 4px;
        }
      }
      cursor: pointer;
    }
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80%;
  & h2 {
    margin: 0 0 8px 8px;
    padding: 0 0 8px 8px;
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ContactItems = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: left;
`

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    margin: 4px 0 4px 16px;
  }
`

export default Footer
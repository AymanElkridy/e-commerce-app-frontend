import styled from 'styled-components'
import Announcment from '../components/Announcment'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <Container>
      <Announcment />
      <Navbar />
      <Slider />
    </Container>
  )
}

const Container = styled.div`
  
`

export default Home
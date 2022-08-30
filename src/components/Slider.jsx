import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleSlideChange = (dir) => {
    if (dir === 'left') {
      slideIndex === 0 ? setSlideIndex(sliderItems.length - 1) : setSlideIndex(slideIndex - 1)
    } else {
      slideIndex === sliderItems.length - 1 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1)
    }
    console.log(slideIndex);
  }

  return (
    <Container>
      <Wrapper>
        <Arrow direction = 'left' onClick={() => {handleSlideChange('left')}}>
          <span class="material-icons">
            keyboard_arrow_left
          </span>
        </Arrow>
        <Slides slidesCount={sliderItems.length} slideIndex={slideIndex}>
          {sliderItems.map((item) => {
            return (
              <SingleSlide item={item}  key={`slide${item.id}`}/>
            )
          })}
        </Slides>
        <Arrow direction = 'right' onClick={() => {handleSlideChange('right')}}>
          <span class="material-icons">
            keyboard_arrow_right
          </span>
        </Arrow>
      </Wrapper>
    </Container>
  )
}

const SingleSlide = (props) => {
  return (
    <Slide bg = {props.item.bg}>
      <SliderImage>
        <img src={require(`../assets/img/slider/slide${props.item.id}.png`)} alt={props.item.desc}/>
      </SliderImage>
      <SliderText>
        <Title>{props.item.title}</Title>
        <Desc>{props.item.desc}</Desc>
        <SliderButton>TAKE A LOOK</SliderButton>
      </SliderText>
    </Slide>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 75vh;
  overflow: hidden;
  user-select: none;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #ffffff40;
  position: absolute;
  left: ${props => props.direction === 'left' && 'calc(5% + 12px)'};
  right: ${props => props.direction === 'right' && 'calc(5% + 12px)'};
  & .material-icons {
    font-size: 48px;
  }
  user-select: none;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background-color: #ffffff80;
  }
  z-index: 1000;
`

const Slides = styled.div`
  display: flex;
  height: 80vh;
  transition: ease 1s;
  translate: ${props => (props.slidesCount - 1) * 50 - (props.slideIndex * 100)}vw;
`

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${props => props.bg};
  width: 100vw;
  height: 100%;
`

const SliderImage = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  & img {
    height: 60vh;
    width: 75%;
    object-fit: cover;
    object-position: 0 0;
  }
`

const SliderText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

const Title = styled.span`
  display: block;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`

const Desc = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 4px;
  line-height: 24px;
`

const SliderButton = styled.button`
  border: solid 2px #000;
  background-color: transparent;
  padding: 8px;
  margin: 24px 0;
  width: fit-content;
  font-size: 16px;
  cursor: pointer;
`

export default Slider
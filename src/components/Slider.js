import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState, useEffect } from 'react';
import Styled from 'styled-components'
import { SliderItem } from '../data'
import {mobile} from '../Responsive'

const Container = Styled.div`
    height:100vh;
    display: flex;
    background-color:gray;
    position: relative;
    overflow: hidden;
    ${mobile({ display: 'none'})}
`

const Arrow = Styled.div`
    width:50px;
    height:50px;
    display: flex;
    border-radius:50%;
    justify-content: center;
    align-items: center;
    background-color:pink;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: ${props => props.direction === 'right' && "10px"};
    left: ${props => props.direction === 'left' && "10px"};
    cursor: pointer;
    opacity:0.5;
    z-index:2;
`

const Wrapper = Styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${porps => porps.bg};
`
const ImgContainer = Styled.div`
    flex:1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
`

const Image = Styled.img`
    height: 80%;
`

const InfoContainer = Styled.div`
    flex:1;
    padding:50px;
`

const Title = Styled.h1`
    font-size:30px;
    font-weight:500;
`
const Desc = Styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
 `
const Button = Styled.button`
    padding:10px;
    background-color:transparent;
    font-size:20px;
    cursor: pointer;
`






const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : SliderItem.length - 1)
        }
        else if (direction === "right") {
            setSlideIndex(slideIndex < SliderItem.length - 1 ? slideIndex + 1 : 0)

        }
    }

    // useEffect(() => {
    //     console.log("GGGGGG",slideIndex)
    //    }, [slideIndex])
    return (
        <div>
            <Container >
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftIcon />
                </Arrow>

                <Wrapper slideIndex={slideIndex}>
                    {SliderItem.map(item =>
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.image} />
                            </ImgContainer>
                            <InfoContainer >
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>Shop Now</Button>
                            </InfoContainer>
                        </Slide>
                    )}
                </Wrapper>


                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightIcon />
                </Arrow>


            </Container>
        </div>
    )
}

export default Slider

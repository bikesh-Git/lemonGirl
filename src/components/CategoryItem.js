import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import {mobile} from '../Responsive'

const Container =Styled.div`
    position: relative;
    margin: 3px;
    flex: 1;
    height: 70vh;
`
const Info =Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Image =Styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    ${mobile({ height: "30vh"})}

`
const Title =Styled.p`
    margin-bottom:20px;
    color: white;
`
const Button =Styled.button`
    background-color:white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border:none;
    padding:10px;
`


const Category = ({item}) => {
    return (
      
        <Container key={item.id}>
              <Link to= {`products/${item.cat}`}>
            <Image src={item.image}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
            </Link>
        </Container>
      
    )
}

export default Category

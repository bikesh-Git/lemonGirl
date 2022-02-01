import styled from 'styled-components'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import {Link} from 'react-router-dom'


const Info = styled.div`
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;
   background-color:gray;
   position: absolute;
   display: flex;
   z-index:3;
   background-color: rgba(0, 0, 0, 0.2);
   opacity: 5;
   cursor: pointer;
   opacity: 0;
`
const Container = styled.div`
    position: relative;
    flex:1;
    min-width:280px;
    margin:5px;
    height:350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    &:hover ${Info}{
        opacity: 1
    }
`
const Circle = styled.div`
    /* width: 200px;
    height:200px;
    border-radius:50%;
    background-color: #fff;
    position: absolute; */
`
const Image = styled.img`
    /* width: 100%; */
    height: 75%;
    z-index:2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    cursor: pointer;

    &:hover{ 
        background-color:white;
        transform: scale(1.1)
    }
`


const Product = ({ product }) => {

    

    return (
        <Container>
            {/* <Circle/> */}
                <Image src={product.image} />
                <Info>
                    <Icon>
                        <Link to={`/product/${product._id}`}><SearchOutlinedIcon /></Link>
                        
                    </Icon>
                    <Icon>
                        <ShoppingCartOutlinedIcon />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlinedIcon />
                    </Icon>
                </Info>
        </Container>
    )
}

export default Product

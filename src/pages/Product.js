import { useState, useEffect } from 'react'
import Styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { useDispatch } from 'react-redux'
import {addProduct} from '../redux/cartRedux'

const Container = Styled.div`
`
const Wrapper = Styled.div`
padding: 50px;
display: flex;
${mobile({ flexDirection: "column", padding: "10px" })}
`
const ImgContainer = Styled.div`
flex:1;
`
const Image = Styled.img`
width: 100%;
height: 90vh;
object-fit: contain ;
${mobile({ height: "40vh" })}
`
const InfoContainer = Styled.div`
flex:1;
padding: 0 50px;
${mobile({ padding: "10px" })}

`
const Title = Styled.h1`
font-weight: 200;
font-size:20px;
`
const Desc = Styled.p`
margin: 20px 0;
`
const Price = Styled.span`
font-weight: 100;
font-size:40px;
`

const FilterContainer = Styled.div`
width: 50%;
margin:30px 0;
display: flex;
justify-content:space-between;
${mobile({ width: "100%" })}

`

const Filter = Styled.div`

display: flex;
align-items:center;
`

const FilterText = Styled.span`

font-weight: 200;
font-size:20px;
`

const FilterColor = Styled.div`
width: 15px;
height: 15px;
border-radius:50%;
background-color:${props => props.color};
margin:5px;
cursor: pointer;
`
const FilterSize = Styled.div`
margin-left:20px;
`

const Select = Styled.select`
padding: 5px 0;

`

const Option = Styled.option`
`
const AddContainer = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
${mobile({ width: "100%" })}

`
const AmountContainer = Styled.div`
display: flex;
align-items: center;
font-weight:700;
`

const Amount = Styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0;

`

const Button = Styled.button`
padding: 15px;
border: 2px solid teal;
background-color:white;
font-weight: 500;
cursor: pointer;
&:hover{
    background-color:gray
}
`


const Product = () => {
    const dispatch =useDispatch()
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    console.log("koko", id)
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                console.log("products/find", res)
                setProduct(res.data)
            }
            catch (err) { console.log(err) }

        }
        getProduct()
    }, [id])

    const handleQuanity = (type)=>{
        if(type === 'des'){
            quantity > 1 && setQuantity( quantity - 1)
        }
        else{
            setQuantity(quantity + 1)
        }
    }

    const handleClick = ()=>{
        console.log('handleClick')
        dispatch(addProduct({...product , quantity , color , size}))
    }
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.picsum.photos/id/786/200/300.jpg?hmac=ukrca61AOMxrxsEnCf7j49AnyoIwIsyIikReiUhm6zQ" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}</Price>


                    <FilterContainer>
                        
                        <Filter>
                            <FilterColor disabled >color</FilterColor>
                            {product.color?.map(c =>
                                <FilterColor color={c} key={c} onClick={()=> setColor(c)}/>
                            )}
                        </Filter>

                        <Filter>
                            <FilterText> Size</FilterText>
                            <FilterSize>

                                <Select  onChange={(e)=> setSize(e.target.value)}>
                                    <Option disabled >Size</Option>
                                    {product.size?.map(s => <Option  key={s} >{s}</Option>  )}
                                </Select>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon onClick={()=>handleQuanity("des")}/>
                            <Amount>
                              {quantity}
                            </Amount>
                            <AddOutlinedIcon onClick={()=>handleQuanity("asc")}/>
                        </AmountContainer>
                        <Button onClick={()=>handleClick()}> Add To Cart</Button>
                    </AddContainer>


                </InfoContainer>



            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product

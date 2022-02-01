import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import { mobile } from '../Responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom';


const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`
`

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}

`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px;
`

const Bottom = styled.div`
display: flex;
padding: 20px;
${mobile({ flexDirection: "column" })}

`

const TopButton = styled.button`
`


const TopTexts = styled.div`
${mobile({ display: "none" })}

`

const TopText = styled.span`
`

const Info = styled.div`
flex: 2;

`

const Product = styled.div`
display:flex;
margin: 20px;
${mobile({ flexDirection: "column" })}


`
const ProductDetails = styled.div`
flex: 1;
height: 200px;
display: flex;
align-items: center;
justify-content: center;

`
const Image = styled.img`
width: 200px;
height: 200px;
object-fit:contain;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.div`
`
const ProductId = styled.div`
`
const ProductColor = styled.div`
height: 25px;
width: 25px;
border-radius:50%;
background-color: ${props => props.color};

`
const ProductSize = styled.div`
`

const PriceDetails = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Summary = styled.div`
flex: 1;
border: .5px solid gray;
padding: 20px;
height: 50vh;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;


`

const Amount = styled.div`
font-size: 24px;
${mobile({ margin: "20px" })}


`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`

const Hr = styled.hr`
background-color: #eee;
height:1px;
border:none;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 25px 0;
display: flex;
justify-content: space-between;
font-size: ${props => props.type == "total" && "24px"};
`
const SummaryTitleText = styled.div``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color:black;
color: white;
font-weight: 600;
`
// const SummaryTitle = styled.div``

const Cart = () => {
    const navigate = useNavigate();
    const Cart = useSelector(state => state.cart)
    console.log("cartData", Cart)
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
    }

    console.log("stripeToken", stripeToken, KEY)


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res =await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: Cart.total
                })
                console.log("ggg",res)
                // navigate('/success', { state: res.data })
            }
            catch (e) {

            }
        }
        stripeToken && makeRequest()

    }, [stripeToken, Cart.total, navigate])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag {Cart.products.lenght}</TopText>
                        <TopText> Wish List (0)</TopText>

                    </TopTexts>

                    <TopButton type="filled">CHECKOUT NOW</TopButton>

                </Top>

                <Bottom>
                    <Info>
                        {Cart.products.map(product =>
                            <Product key={product._id}>
                                <ProductDetails>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName> <b>Product:</b> {product.title} </ProductName>
                                        <ProductId> <b>Id:</b> {product._id}  </ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>size</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetails>


                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <RemoveOutlinedIcon />
                                        <Amount>
                                            {product.quantity}
                                        </Amount>
                                        <AddOutlinedIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>${product.price * product.quantity}</ProductPrice>
                                </PriceDetails>
                            </Product>
                        )}

                        <Hr />

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY  </SummaryTitle>

                        <SummaryItem>
                            <SummaryTitleText>Subtotal</SummaryTitleText>
                            <SummaryTitleText>${Cart.total}</SummaryTitleText>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryTitleText>Estimated Shoping</SummaryTitleText>
                            <SummaryTitleText>$343.342</SummaryTitleText>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryTitleText>Shoping Discount </SummaryTitleText>
                            <SummaryTitleText>$23</SummaryTitleText>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryTitleText>total</SummaryTitleText>
                            <SummaryTitleText>${Cart.total}</SummaryTitleText>
                        </SummaryItem>

                        <StripeCheckout
                            name="bikesh shoping"
                            image=""
                            billingAddress
                            shippingAddress
                            description={`Your total is ${Cart.total}`}
                            amount={Cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT</Button>
                        </StripeCheckout>
                    </Summary>
                
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart

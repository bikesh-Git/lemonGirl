import styled from "styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`
const Left = styled.div`
    flex:1;
`
const Logo = styled.h1`
    ${mobile({ marginLeft: "15px" })}
`
const Center = styled.div`
    /* padding: 20px; */
    flex:1;
    ${mobile({ display: 'none' })}
`
const SocialContainer = styled.div`
    margin-left: 10px;
    display: flex;
`
const SocialIcon = styled.div`
    margin:5px;
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    background-color:#${props => props.color};
    display: flex;
    justify-content:center;
    align-items:center;
    color:white;
`

const Right = styled.div`
    flex:1;
    /* padding: 20px; */
    ${mobile({ backgroundColor: '#fff8f8' })}
;`

const Title = styled.h2`
font-weight: 500;
margin-bottom: 10px;
`

const Desc = styled.div`
    margin:10px;
`
const List = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img``


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BIKESH</Logo>
              
                <Desc>
                    The “terms of use” are a bit different from privacy. They explain what the visitor agrees to by visiting the website. Like a disclaimer, they state that by using the site, the visitor agrees to certain things.
                </Desc>

                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>  ss csc sc  </Title>
                
                <List>
                    <ListItem>Useful links </ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Term</ListItem>
                    <ListItem>Order tracking</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>

                <ContactItem><LocationOnOutlinedIcon /> 8668673836 </ContactItem>
                <ContactItem><CallOutlinedIcon /> Pleasant Park Pune </ContactItem>
                <ContactItem><EmailOutlinedIcon /> Bikesh.verma13@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}

export default Footer

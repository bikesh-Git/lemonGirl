import Styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from '../Responsive'
import LogoImg1 from '../images/myssticoLogo.png'
import { Link } from 'react-router-dom'
import { Badge } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {logout } from '../redux/sliceRedux'


const Container = Styled.div`
    height: 60px;

    /* @media only screen and (max-width:380px){
        display: none;
    } */

    ${mobile({ height: "100px" })}
`
const Wrapper = Styled.div`
    padding:20px;
    display: flex;
    align-items: center;
    ${mobile({ padding: "10px 0 " })}

`
const Language = Styled.div`
    font-size:14px;
    cursor:pointer;
    ${mobile({ display: 'none' })}
`
const SearchContainer = Styled.div`
    
    display: flex;
    align-items: center;
    background-color:white;
    margin-left:25px;
    border: 0.5px solid gray;
    ${mobile({ marginLeft: "10px" })}
    
`
const Input = Styled.input`
padding: 5px;
    border: none;
    ${mobile({ width: "50px" })}
`

const LogoImg = Styled.img`
width: 40px;
height: 40px;
background-color:black;
`

const LogoText = Styled.h1`
font-weight: bold;
${mobile({ fontSize: '24px' })}
`

const Left = Styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Middle = Styled.div`
display: flex;
    flex: 1;
    text-align: center;
    ${mobile({ flexDirection: "column" })}

`
const Right = Styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = Styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  const dispatch =  useDispatch()
    const quantity = useSelector(state => state.cart.quantity)
    const user =useSelector(state=>state.user.currentUser)
    console.log("ff", quantity)

    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
        <div>
            <Container>
                <Wrapper>

                    <Left>
                        <Language>EN  </Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <SearchIcon style={{ color: 'gray', fontSize: "16px" }} />
                        </SearchContainer>
                    </Left>

                    <Middle>

                        <Link to="/"> <LogoImg src={LogoImg1} alt="" /> </Link>
                        <LogoText>MYSSTICO</LogoText>


                    </Middle>

                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        {user ? <MenuItem onClick={handleLogout}>Logout</MenuItem> :  <Link to ="/login"> <MenuItem>SIGN IN</MenuItem></Link>}
                      
                       
                        <MenuItem>
                          <Link to="/cart">
                          <Badge badgeContent={quantity} color="primary" >
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                          </Link>

                        </MenuItem>
                    </Right>

                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar

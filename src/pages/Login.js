
import {useState, useEffect} from 'react'
import Styled from 'styled-components'
import { mobile } from '../Responsive'
import {login} from '../redux/apiCalls'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'


const Container = Styled.div`
width:100%;
height:100vh;
background: 
linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url("https://loremflickr.com/cache/resized/65535_51536081755_1f6c4564ce_z_640_360_nofilter.jpg") center ;
object-fit:cover;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper = Styled.div`
width: 30%;
padding: 20px;
background-color:white;
${mobile({ width: "75%" })}

`
const Title = Styled.h1`
font-size: 22px;
font-weight:300;

`

const Form = Styled.form`
display: flex;
flex-direction: column;
/* flex-wrap: wrap; */
`

const Input = Styled.input`
flex: 1;
min-width: 40%;
padding:10px;
margin: 20px 10px 0px 0px;

`

const Button = Styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color:teal;
color: white;
cursor: pointer;
margin: 10px 0;

&:disabled{
    color: green;
    cursor: not-allowed;
}

`

const Link = Styled.a`
font-size:12px;
font-weight: 300;
margin: 10px 0;
text-decoration: underline;
cursor: pointer;
`

const Error = Styled.span`
color: red;

`


const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {isFetching,error} = useSelector(state=> state.user)


   const handleClick=(e) => {
       e.preventDefault()
        login(dispatch,{username,password})
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>


                    <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                    <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching} > LOGIN</Button>
                    {error && <Error>Something went wrong</Error>}
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login

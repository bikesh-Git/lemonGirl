import { useState } from 'react'
import Styled from 'styled-components'
import {mobile} from '../Responsive'

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
width: 40%;
padding: 20px;
background-color:white;
${mobile({width:"75%"})}

`
const Title = Styled.h1`
font-size: 22px;
font-weight:300;
`

const Form = Styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = Styled.input`
flex: 1;
min-width: 40%;
padding:10px;
margin: 20px 10px 0px 0px;

`
const Agreement = Styled.span` 
font-size: 12px;
font-weight: 300;
margin: 20px 0;
`


const Button = Styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color:teal;
color: white;
cursor: pointer;
`





const Register = () => {
    const [user, setUser] = useState({})

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
      

    }

    const handleClick = (e)=>{
        e.preventDefault();
    }

    return (
        <Container>
            <Wrapper>
            <Title> Create an account</Title>
            <Form>

                <Input placeholder="Name" name="name"/>    
                <Input placeholder="Last Name" name="lastname" onChange={(e)=>handleChange(e)}/>  

                <Input placeholder="Username" name="username"/> 
                <Input placeholder="Email" name="email"/>     
                <Input placeholder="Password" name="password"/>  
                <Input placeholder="confirm Password" name="cPassword" />  
                <Agreement> 
                    Bt creating an account i consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY </b>
                </Agreement>
                <Button onClick={handleClick}>  CREATE</Button>  
              
                
             </Form>
             </Wrapper>
        </Container>
    )
}

export default Register

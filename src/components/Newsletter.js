import Styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import { mobile } from '../Responsive'


const Container = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:60vh; 
    `
const Title = Styled.h1`
    font-size:70px;
    ${mobile({ fontSize: "50px" })}
     `
const Desc = Styled.div`
    padding: 10px 20px;
    font-size:24px;
    font-weight:300;
    ${mobile({ alignItems: "center" ,fontSize:"18px" })}
    `
const InputContainer = Styled.div`
    width: 50%;
    height:40px;
    background-color:white;
    display: flex;
    justify-content:space-between;
    /* align-items:center; */
    border : 1px solid gray;
    ${mobile({ width: "80%" })}
    `
const Input = Styled.input`
    flex: 8;
    border:none;  
`
const Button = Styled.button`
flex:1;
`


const Newsletter = () => {
    return (
        <div>
            <Container>
                <Title>Newsletter</Title>
                <Desc>csaacac scsaxsada d ad ad ads sds</Desc>
                <InputContainer>
                    <Input placeholder="Your email" />
                    <Button ><SendIcon /></Button>
                </InputContainer>

            </Container>
        </div>
    )
}

export default Newsletter

import styled  from "styled-components"

const Container = styled.div`
height: 30px;
font-size: 14px;
font-weight: bold;
background-color: teal;
color: #fff;
display: flex;
align-items: center;
justify-content: center;

`

const Announcement = () => {
    return (
        <Container>
            Superr Deal! Free Shipping on Order Over 5000 rupees...!!!
        </Container>
    )
}

export default Announcement

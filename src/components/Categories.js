import Styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {CategoriesData } from '../data'
import {mobile} from '../Responsive'

const Container =Styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ flexDirection: "column"})}
`

const Categories = () => {
    return (
            <Container>
                {CategoriesData.map(item =>{
                 return   <CategoryItem item={item}/>
                })}
               
            </Container>
    )
}

export default Categories

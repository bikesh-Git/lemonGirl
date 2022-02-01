import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import Styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive'

const Container = Styled.div`

`
const Title = Styled.h1`
`
const FilterContainer = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Filter = Styled.div`
display: flex;
margin:20px;
${mobile({margin: "0 20px",flexDirection:"column"})}
`

const FilterText = Styled.div`

margin-right: 20px;
font-size:20px;
font-weight:600;
${mobile({margin:"0px"})}

`
const Select = Styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0"})}
`
const Option = Styled.option`
`

const ProductList = () => {
    const location  = useLocation()
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("Newest")
    // console.log("jii",location.pathname.split("/")[2])
    const cat = location.pathname.split("/")[2]

    const handleFilter = (e)=>{
        const value = e.target.value

        setFilters({
            ...filters,
            [e.target.name]:value
        })

    }
    return (
        <Container>
            <Navbar />
            <Announcement />
                
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                   
                    <FilterText>
                    Filter Product:
                        <Select name="color" onChange={handleFilter}>
                            <Option disabled > Color </Option>
                            <Option >blue </Option>
                            <Option >green</Option>
                            <Option >red</Option>
                            <Option >pink</Option>
                            <Option >white</Option>
                            <Option >black</Option>
                        </Select>
                    </FilterText>
              
                    <FilterText >
                        <Select name="size"  onChange={handleFilter}>
                            <Option disabled > Size </Option>
                            <Option >S </Option>
                            <Option >M</Option>
                            <Option >L</Option>
                            <Option >XL</Option>
                        </Select>
                    </FilterText>

                </Filter>
               <FilterText>
                   Sort Product:
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="Newest"> Newest </Option>
                      
                        <Option value="asc" > Price (asc)</Option>
                        <Option value="desc" >Price (desc)</Option>
                    </Select>
                </FilterText> 
            
            </FilterContainer>

            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList

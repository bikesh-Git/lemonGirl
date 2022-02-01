import { useEffect, useState } from 'react'
// import { PopularProducts } from '../data';
import Product from './Product'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducs] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:8080/api/products?category=${cat}` : `http://localhost:8080/api/products`)
        console.log(res.data)
        setProducts(res.data)
      }
      catch (err) { console.log(err) }
    }
    getProducts()
  }, [cat])


  useEffect(() => {
    console.log("binnu",filters)
    // console.log("verma",Object.entries(filters))
    cat &&
      setFilteredProducs(
         products.filter(el =>
          Object.entries(filters).every(([key, value])=>
            el[key].includes(value)
          )
         )
      )
  }, [products,cat, filters])

  useEffect(() => {
    if(sort === "Newest"){
      setFilteredProducs((prev => 
          [...prev].sort((a,b)=>a.createdAt - b.createdAt)
          ))
      
    }
   else if(sort === "asc"){
      setFilteredProducs( prev => 
          [...prev].sort((a,b)=>a.price - b.price)   
      )
    }
    else{
      setFilteredProducs( prev => 
          [...prev].sort((a,b)=>b.price - a.price)
          )
    }
   
  }, [sort])


  return (
    <Container>
      {cat ? filteredProducts.map(product =>
        <Product product={product} key={product._id} />
      ) : products.slice(0,8).map(product =>
        <Product product={product} key={product._id} />
      )}
    </Container>
  )
}

export default Products

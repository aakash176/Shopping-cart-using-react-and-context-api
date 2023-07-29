import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import { CartItem } from '../Context'
const Products = () => {
  const {cart, setCart} = useContext(CartItem)
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const fetchProducts = async() => {
      let res = await axios.get('https://fakestoreapi.com/products')
      
      setProducts(res.data)
    }
    fetchProducts()
  },[])
  

  return (
    <div className="products__lists">
      {
        products.length>0?(
        products.map((prod) => (
          <SingleProduct prod={prod}/>
        ))
        ):(
          <p>Loading Data .....</p>
        )
      }
    </div>
  )
}

export default Products
import React, { useContext } from 'react'
import { CartItem } from '../Context'
import SingleProduct from './SingleProduct'
const Cart = () => {
  const {cart, setCart} = useContext(CartItem)
  return (
    <div className="products__lists">
      {
        cart.length>0?(
        cart.map((prod) => (
          <SingleProduct prod={prod}/>
        ))
        ):(
          <p>Loading Data .....</p>
        )
      }
    </div>
  )
}

export default Cart
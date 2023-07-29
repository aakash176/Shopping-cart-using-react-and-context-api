import React, { useContext } from 'react'
import { CartItem } from '../Context'
const SingleProduct = ({prod}) => {
  const {cart, setCart} = useContext(CartItem)
  
  return (
    <div className='product'>
      <img className='prod__img' src={prod.image} alt='product-image'/>
      <p><b>{prod.title}</b></p>
      <p><b>${prod.price}</b></p>
      {cart.includes(prod)? <button onClick={() => setCart(cart.filter((c) => c.title !== prod.title))}>Remove from Cart</button>:<button onClick={() => setCart([...cart, prod])}>Add to cart</button>}
      
    </div>
  )
}

export default SingleProduct
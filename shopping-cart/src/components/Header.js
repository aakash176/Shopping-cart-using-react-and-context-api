import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../Context'
const Header = () => {
  const {cart, setCart} = useContext(CartItem)
  let l = cart.length
  return (
    <div className='header__parent'>
        <div className="header">
            <h2>Context API Tutorial</h2>
        </div>
        <ul className='lists'>
            <Link to='/' style={{textDecoration:'none', margin:'1rem'}}><b className='li'>Products</b></Link>
            {
              l>0?<Link to='/cart' style={{textDecoration:'none', margin:'1rem'}}><b className='li'>Cart({l})</b></Link>:<Link to='/cart' style={{textDecoration:'none', margin:'1rem'}}><b className='li'>Cart</b></Link>
            }
            
        </ul>
    </div>
  )
}

export default Header
import React, { useContext } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { quantityCart } = useContext(CartContext)

  return (
    <div>
      <Link to='/cart'>
        <GiShoppingCart/>
        <input value={quantityCart} readOnly/>
      </Link>
      
    </div>
  )
}

export default CartWidget


import React, { useContext } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./Cart.css";

const CartWidget = () => {

  const { quantityCart } = useContext(CartContext)

  return (
    <div className='d-flex inline'>
     <div>
     <Link to='/cart'>
        <GiShoppingCart size="35"/>
      </Link>
     </div>
     <div>
     <p className='bg-primary dot'>{quantityCart}</p>
     </div>
    </div>
  )
}

export default CartWidget


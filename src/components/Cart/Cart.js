import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

    const { cart, removeFromCart, removeAll, totalPrice } = useContext(CartContext);

  return (
    <div>
        {cart == "" ? (
             <div>
             <p>¡El carrito está vacío!</p>
           </div>
        ) : ( cart.map((item) => (
         <div key={item.id} className='d-inline-flex'>
           <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src={item.imagen} />
          </Card>
         <Card style={{ width: '14rem' }}>
         <Card.Body>
           <Card.Title>{item.name}</Card.Title>
           <Card.Title>{`QUANTITY: ${item.initial}`}</Card.Title>
           <Card.Title>{`PRICE: ${item.price}`}</Card.Title>
           <Card.Title>{`SUBTOTAL: $${item.initial * item.price}`}</Card.Title>
           <Button onClick={() => removeFromCart(item.id)} variant="danger">Eliminar del Carrito</Button>
         </Card.Body>
       </Card>
         </div>
        ))
        )}
         {cart == "" ? (
        <div>
          <div className="total"></div>
          <div>
            <Button className='m-2' as={Link} to="/">
              Go Shopping!
            </Button>
            <div>
              <Button className='m-2' onClick={removeAll} disabled>
                vaciar carrito
              </Button>
              <Button className='m-2' disabled>
                FINALIZAR COMPRA
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Button className='bg-info m-2' as={Link} to="/">
            Continuar comprando
          </Button>
            <Button className='bg-danger m-2' onClick={removeAll}>
              vaciar carrito
            </Button>
            <Button className='bg-success m-2'>
              FINALIZAR COMPRA
            </Button>
            <div className='m-2'>TOTAL: ${totalPrice}</div>
          </div>
      )}
    </div>
  )
}

export default Cart

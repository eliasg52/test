import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, removeFromCart, removeAll, totalPrice } = useContext(CartContext);

  return (
    <div>
        {cart === "" ? (
             <div>
             <p>¡El carrito está vacío!</p>
           </div>
        ) : ( cart.map((item) => (
            <Row key={item.id} xs={1} md={2} className="g-4">
            <Col>
              <Card className='bg-light'>
                <Card.Img src={item.imagen} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle>{item.group}</Card.Subtitle>
                  <Card.Subtitle>{item.year}</Card.Subtitle>
                  <Card.Text>{`CANTIDAD ${item.initial}`}</Card.Text>
                  <Card.Text>{`PRICE $: ${item.price}`}</Card.Text>
                  <Card.Text>{`SUBTOTAL: $ ${item.initial * item.price}`}</Card.Text>
                  <Button className='bg-danger' onClick={() => removeFromCart(item.id)}>Eliminar del Carrito</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>
        ))
        )}
         {cart === "" ? (
        <div>
          <div className="total"></div>
          <div>
            <Button as={Link} to="/" className="continue">
              Go Shopping!
            </Button>
            <div>
              <Button onClick={removeAll} disabled>
                vaciar carrito
              </Button>
              <Button disabled>
                FINALIZAR COMPRA
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
        <div>TOTAL: ${totalPrice}</div>
        <div>
          <Button className='bg-info mt-4' as={Link} to="/">
            Continuar comprando
          </Button>
          <div>
            <Button className='bg-danger mt-4' onClick={removeAll}>
              vaciar carrito
            </Button>
            <Button className='bg-success mt-4'>
              FINALIZAR COMPRA
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Cart

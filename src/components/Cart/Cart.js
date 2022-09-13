import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, removeAll, totalPrice } =
    useContext(CartContext);

  return (
    <div className="cartContainer">
      <div className="cartTittle">
        <h2>Your Cart!</h2>
        <hr />
      </div>
      <hr />
      <Container className="cartGrid">
        <Row className="datosGrid">
          <Col m={2}>IMG</Col>
          <Col m={3}>NAME</Col>
          <Col m={2} className="datosCant">
            QUANTITY
          </Col>
          <Col m={2}>PRICE</Col>
          <Col m={2}>TOTAL PRICE</Col>
          <Col m={1}></Col>
        </Row>
        <Container className="containerProds">
          {!cart ? (
            <div className="vacio">
              <p>EMPTY!!!</p>
              <Button as={Link} to="/" className="continue">
                Go shopping!!
              </Button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <Row key={item.id} className="prodGrid">
                  <Col m={2} className="itemImg">
                    <Link to={`/detail/${item.id}`}>
                      <img
                        src={item.imagen}
                        width="100px"
                        alt={item.name}
                      ></img>
                    </Link>
                  </Col>
                  <Col m={3} className="itemName">
                    {item.name}
                  </Col>
                  <Col m={2} className="itemCont">
                    {item.initial}
                  </Col>
                  <Col m={2} className="itemPrice">{`$ ${item.price}`}</Col>
                  <Col m={2} className="subTotal">{`$ ${
                    item.initial * item.price
                  }`}</Col>
                  <Col m={1} className="itemClear">
                    <Button
                      className="clearProd"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Container>
      </Container>
      <hr />
      {!cart ? (
        <></>
      ) : (
        <div className="cartBottom">
          <div className="total">TOTAL: ${totalPrice}</div>
          <div className="cartButtons">
            <Button as={Link} to="/" className="continue">
              Continue Shopping
            </Button>
            <div className="bottomButtons">
              <Button className="clearCart" onClick={removeAll}>
                Clear Cart
              </Button>
              <Button as={Link} to="/checkout" className="finalizar ">
                GO PAY!
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

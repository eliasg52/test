import React, { useContext, useEffect, useState } from 'react';
import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { DB } from '../../api/FigurasFirebase';
import { CartContext } from '../../context/CartContext';
import { PulseLoader } from 'react-spinners';
import { FiCheckSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { GiHandTruck } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import logo from '../../imgNav/spiderman.png';
import Modal from 'react-bootstrap/Modal';
import './checkout.css';

function Checkout() {
  const { cart, removeAll, totalPrice } = useContext(CartContext);
  const [shipp, setShipp] = useState(0);
  const [motoActive, setMotoActive] = useState(false);
  const [correoActive, setCorreoActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState('');
  const handleClose = () => setShow(false);

  function selectMoto() {
    setShipp(950);
    setMotoActive(true);
    setCorreoActive(false);
  }
  function selectCorreo() {
    setShipp(450);
    setCorreoActive(true);
    setMotoActive(false);
  }

  useEffect(() => {
    setBuyerEmail(email1);
  }, [email1]);

  useEffect(() => {
    if (
      (buyerName !== '',
      buyerPhone !== '' && email1 === email2 && shipp > 0 && buyerEmail !== '')
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [shipp, buyerName, buyerPhone, email1, email2, buyerEmail]);

  const itemsBuyed = cart.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.initial,
  }));
  let order = {
    buyer: {
      name: buyerName,
      phone: buyerPhone,
      email: buyerEmail,
    },
    items: itemsBuyed,
    totalFigures: totalPrice,
    date: serverTimestamp(),
    shipping: shipp,
    totalPlusShipping: totalPrice + shipp,
  };

  const createOrder = () => {
    const orderInFirestore = async () => {
      const newOrderRef = doc(collection(DB, 'orders'));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    orderInFirestore()
      .then((res) => {
        setLoading(false);
        cart.forEach(async (item) => {
          const itemRef = doc(DB, 'products', item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.initial),
          });
        });
        removeAll();
        setId(res.id);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(true));
  };

  const handleClick = () => {
    createOrder();
    setShow(true);
  };

  const back = () => {
    setShow(false);
  };

  return (
    <div className="checkout">
      <div className="checkoutContainer">
        <header>
          <img src={logo} alt="logo" width="40px" />
          <p>| Enter your data to finalize the purchase!</p>
        </header>
        <div className="contentCheckout">
          <div className="orderBody">
            <h2>Summary of purchase</h2>
            <div className="productsContainer">
              {cart.map((item) => (
                <div key={item.id} className="product">
                  <img src={item.imagen} alt={item.name} width="80px" />
                  <div>
                    <h3>
                      {item.name} x {item.initial} u.
                    </h3>
                    <h4>${item.price} c/u</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="envios">
              <h2>Shipping method</h2>
              <div
                className={motoActive ? 'envio active' : 'envio'}
                id="moto"
                onClick={selectMoto}
              >
                <div className="titleEnv">
                  <GiHandTruck />
                  <div>
                    <h4>
                      private messaging <span>(only in town)</span>
                    </h4>
                    <p>arrive today</p>
                  </div>
                </div>
                <div className="priceEnv">
                  <h4>$950</h4>
                </div>
              </div>
              <div
                className={correoActive ? 'envio active' : 'envio'}
                id="correo"
                onClick={selectCorreo}
              >
                <div className="titleEnv">
                  <FaTruck />
                  <div>
                    <h4>Ups</h4>
                    <p>Arrives between 5 to 7 business days</p>
                  </div>
                </div>
                <div className="priceEnv">
                  <h4>$450</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="payment">
            <h2>Payment method</h2>
            <form>
              <label>Name and surname</label>
              <input
                type="name"
                name="name"
                onChange={(event) => setBuyerName(event.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail1(event.target.value)}
                style={{ border: email1 !== email2 ? '1px solid red' : '' }}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail2(event.target.value)}
                style={{ border: email1 !== email2 ? '1px solid red' : '' }}
              />
              <label>Telephone</label>
              <input
                type="tel"
                name="tel"
                onChange={(event) => setBuyerPhone(event.target.value)}
              />
              <label>card details</label>
              <div className="cardDetails">
                <input
                  className="cardNum"
                  type="num"
                  name="cardNum"
                  readOnly
                  value="5456 7611 3982 9827"
                />
                <input
                  className="cardDate"
                  type="num"
                  name="cardDate"
                  readOnly
                  value="09/29"
                />
                <input
                  className="cardCVV"
                  type="num"
                  name="cardCVV"
                  readOnly
                  value="404"
                />
              </div>
            </form>
            <div className="address">
              <h2>Delivery address</h2>
              <form>
                <div className="direccion">
                  <div>
                    <label>Street</label>
                    <input
                      type="text"
                      name="calle"
                      value="Avellaneda"
                      readOnly
                    />
                  </div>
                  <div className="altura">
                    <label>height</label>
                    <input type="num" name="altura" value="5883" readOnly />
                  </div>
                  <div className="cp">
                    <label>CP</label>
                    <input type="num" name="cp" value="1646" readOnly />
                  </div>
                </div>
                <div className="city">
                  <div>
                    <label>City</label>
                    <input
                      type="text"
                      name="ciudad"
                      value="Virreyes"
                      readOnly
                    />
                  </div>
                  <div>
                    <label>Province</label>
                    <input
                      type="text"
                      name="provincia"
                      value="Buenos Aires"
                      readOnly
                    />
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
            <div className="total">
              <div>
                <h4>Subtotal</h4>
                <h4 className="totalPrice">${totalPrice}</h4>
              </div>
              <div>
                <h4>Shipment</h4>
                <h4 className="totalEnv">${shipp}</h4>
              </div>
              <div>
                <h4>Total</h4>
                <h4 className="totalCost">${shipp + totalPrice}</h4>
              </div>
              {disabled ? (
                <button style={{ pointerEvents: 'none', opacity: '.6' }}>
                  Missing data
                </button>
              ) : (
                <button onClick={handleClick}>Make an order</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modalCheck"
      >
        <Modal.Header>
          <Modal.Title>
            <img src={logo} alt="spiderverse" width="80px" />
            <div className="logoName">
              <span>SPIDERVERSE</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <>
              <PulseLoader color={'rgb(157, 19, 789)'} size={30} />
            </>
          ) : (
            <div className="checkOrder">
              <FiCheckSquare />
              <h2>Order done successfully!</h2>
              <p>order id : {Id}</p>
              <Link to="/">
                <button onClick={back}>Back to top</button>
              </Link>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Checkout;

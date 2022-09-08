import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


const ItemDetail = ( {id, name, imagen, group, year, price, stock, info} ) => {
  
  const figuraData = {id, name, imagen, price, year, group, stock}
  const [toCart, setToCart] = useState(false);

  const onAddFigures = () => {
    setTimeout(() =>{
      setToCart(true);
    }, 500);
    console.log(`Agregaste ${name} al carrito!`)
  };


    return (
        <div key={id} className='d-inline-flex mt-4'>
          <Card border="warning" style={{ width: '16rem' }}>
          <Card.Img variant="top" src={imagen} />
          </Card>
           <Card border="warning" style={{ width: '16rem' }}>
          <Card.Body>
           <div>
           <Card.Title>{name}</Card.Title>
            <Card.Title>
              Group: {group}
            </Card.Title>
            <Card.Title>
              {year}
            </Card.Title>
            <Card.Title>
               Price: ${price}
            </Card.Title>
            <Card.Title>
               Stock: {stock}
            </Card.Title>
           </div>
            {toCart ? (
              <div>
                <Link to="/">
                <Button variant="outline-success">Continuar Comprando</Button>
              </Link>
              <Link to="/cart">
                <Button className='m-4' variant="outline-warning">Finalizar Compra!</Button>
              </Link>
              </div>
            ) : (
              <ItemCount figuraData={figuraData} stock={stock} onAddToCart={onAddFigures}/>
            )}
            <Card.Subtitle>
              {info}
            </Card.Subtitle>
          </Card.Body>
        </Card>
        </div>
    )
  

 
}

export default ItemDetail



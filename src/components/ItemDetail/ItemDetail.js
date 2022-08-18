import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


const ItemDetail = ( {id, name, imagen, group, year, price, stock} ) => {
  
  const figuraData = {id, name, imagen, price, stock}
  const [toCart, setToCart] = useState(false);

  const onAddFigures = () => {
    setTimeout(() =>{
      setToCart(true);
    }, 1000);
    console.log(`Agregaste ${name} al carrito!`)
  };


    return (
        <div key={id} className='d-inline-flex'>
           <Card border="warning" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>ID:{id} {name}</Card.Title>
            <Card.Text>
              Group: {group}
            </Card.Text>
            <Card.Text>
              {year}
            </Card.Text>
            <Card.Text>
               Price: ${price}
            </Card.Text>
            <Card.Text>
               Stock: {stock}
            </Card.Text>
            {toCart ? (
              <div>
                <Link to="/">
                <Button variant="outline-success">Continuar Comprando</Button>
              </Link>
              <Link to="/cart">
                <Button className='mt-2' variant="outline-warning">Finalizar Compra!</Button>
              </Link>
              </div>
            ) : (
              <ItemCount figuraData={figuraData} stock={stock} onAddToCart={onAddFigures}/>
            )}
          </Card.Body>
        </Card>
        </div>
    )
  

 
}

export default ItemDetail



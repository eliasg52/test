import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


const ItemDetail = ( {data}, stock ) => {

  const [toCart, setToCart] = useState(false);

  const itemToCart = () => {
    setTimeout(() =>{
      setToCart(true);
    }, 1000);
    console.log(`Agregaste ${data.name} al carrito!`)
  };

    return (
        <div key={data.id} className='d-inline-flex'>
           <Card border="warning" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={data.imagen} />
          <Card.Body>
            <Card.Title>ID:{data.id} {data.name}</Card.Title>
            <Card.Text>
              Group: {data.group}
            </Card.Text>
            <Card.Text>
              {data.year}
            </Card.Text>
            <Card.Text>
               Price: ${data.price}
            </Card.Text>
            <Card.Text>
               Stock: {data.stock}
            </Card.Text>
            {toCart ? (
              <Link to="/cart">
                <Button variant="outline-warning">Finalizar Compra!</Button>
              </Link>
            ) : (
              <ItemCount data={data} stock={stock} onAdd={itemToCart}/>
            )}
          </Card.Body>
        </Card>
        </div>
    )
  

 
}

export default ItemDetail



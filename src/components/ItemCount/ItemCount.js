import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";


const ItemCount = ( {data, onAdd} ) => {

  const [initial, setInitial] = useState(1)

  const stock = data.stock;

  const aumentar = () => {
      setInitial(initial + 1)
  };
  const disminuir = () => {
    setInitial(initial - 1)
  };
  
  return (
    <div className='d-flex justify-content-center'>
      <Card border="light" style={{ width: '18rem' }}>
        <Card.Body> 
          <Container>
            <Row>
               <Col> <Button variant="outline-primary" onClick={disminuir} disabled={initial <= 0} >-</Button>{' '}</Col>
               <Col><h3>{initial}</h3></Col>
               <Col><Button variant="outline-danger" onClick={aumentar} disabled={initial >= stock} >+</Button>{' '}</Col>
            </Row>
          </Container>
          <div className="d-grid gap-2">
            <Button className='mt-4' variant="outline-dark" size="sm" onClick={onAdd} disabled={initial <= 0}>
                Agregar al carrito
             </Button>
         </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemCount

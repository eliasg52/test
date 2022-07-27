import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemCount = ({ stock, initial, aumentar, disminuir}) => {

  return (
    <div className='d-flex justify-content-center'>
      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>COUNTER STRIKE</Card.Header>
        <Card.Body> 
          <Container>
            <Row>
               <Col> <Button variant="outline-primary" onClick={disminuir} disabled={initial <= 0} >-</Button>{' '}</Col>
               <Col><h3>{initial}</h3></Col>
               <Col><Button variant="outline-danger" onClick={aumentar} disabled={initial >= stock} >+</Button>{' '}</Col>
            </Row>
          </Container>
          <div className="d-grid gap-2">
            <Button className='mt-4' variant="outline-dark" size="sm">
                Agregar al carrito
             </Button>
         </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemCount

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../../context/CartContext';


const ItemCount = ( {stock, onAddToCart, figuraData} ) => {

  const [initial, setInitial] = useState(1)
  const {addToCart} = useContext(CartContext);
  const [noStock, SetNoStock] = useState(stock);
  const figuraDataCount = {
    ...figuraData,
    initial
  }

  useEffect(() => {
    SetNoStock(stock)
  }, [stock])


  const aumentar = () => {
    if(noStock > 1) {
      setInitial(initial + 1);
      SetNoStock(noStock - 1);
    }
  };
  const disminuir = () => {
    if(initial >= 1) {
      setInitial(initial - 1);
      SetNoStock(noStock + 1);
    }
  };
  const onAdd = () => {
    if(initial >= 1) {
      SetNoStock(noStock - initial);
      SetNoStock(noStock);
      onAddToCart();
    }
  }
  
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
            <Button className='mt-4' variant="outline-dark" size="sm" disabled={initial <= 0}  onClick={()=>{
              onAdd();
              addToCart({...figuraDataCount})
            }}>
                Agregar al carrito
             </Button>
         </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default ItemCount

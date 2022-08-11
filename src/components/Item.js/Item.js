import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Item = ({data}) => {

  return (
    <div className='d-inline-flex justify-content-around my-5 mx-5'>
       <Card border="primary" style={{ width: '14rem' }}>
      <Card.Img variant="top" src={data.imagen} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Link to={`/details/${data.id}`}>
        <Button variant="outline-danger">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item

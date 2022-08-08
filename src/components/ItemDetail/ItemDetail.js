import Card from 'react-bootstrap/Card';


const ItemDetail = ( {item} ) => {

  console.log(item)
  return item.map((item) =>{
    return (
        <div key={item.id} className='d-inline-flex'>
           <Card border="warning" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>ID:{item.id} {item.name}</Card.Title>
            <Card.Text>
              Group: {item.group}
            </Card.Text>
            <Card.Text>
              {item.year}
            </Card.Text>
            <Card.Text>
               Price: ${item.price}
            </Card.Text>
            <Card.Text>
               Stock: {item.stock}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    )
  })

 
}

export default ItemDetail



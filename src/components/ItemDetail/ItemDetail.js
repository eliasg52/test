import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ( {data}, stock, initial, aumentar, disminuir, onAdd ) => {
 
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
            <ItemCount data={data} stock={stock} initial={initial} aumentar={aumentar} disminuir={disminuir} onAdd={onAdd}/>
          </Card.Body>
        </Card>
        </div>
    )
  

 
}

export default ItemDetail



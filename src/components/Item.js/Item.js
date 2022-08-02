import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({data}, stock, initial, aumentar, disminuir, onAdd) => {

  console.log(data)

  return (
    <div className='d-inline-flex justify-content-around my-5 mx-5'>
       <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.imagen} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        {/* <Card.Text>
          {data.group}
        </Card.Text>
        <Card.Text>
          {data.year}
        </Card.Text> */}
        <Card.Text>
           ${data.price}
        </Card.Text>
        <ItemCount data={data} stock={stock} initial={initial} aumentar={aumentar} disminuir={disminuir} onAdd={onAdd}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item

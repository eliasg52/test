import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFigurasById } from '../Figuras';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const { figuraId } = useParams();

  useEffect(() => {
    getFigurasById(figuraId)
        .then(data => {
          setData(data)
        })
        .catch(error => {
          console.log(error)
        })
      }, [figuraId])

  return (
    <div>
      <ItemDetail {...data}/>
    </div>
  )
}

export default ItemDetailContainer

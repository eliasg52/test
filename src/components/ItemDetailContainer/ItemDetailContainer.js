import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { DB } from '../../api/FigurasFirebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [data, setData] = useState();
  const { figuraId } = useParams();

  useEffect(() => {
    const dbDoc = doc(DB, 'products', figuraId);
    getDoc(dbDoc)
    .then(res => setData({id:res.id, ...res.data()}))
    .catch(err => console.log(err))
  }, [figuraId]);

  return (
    <div>
      <ItemDetail {...data}/>
    </div>
  )
}

export default ItemDetailContainer

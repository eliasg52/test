import { useEffect, useState } from 'react'
import getItem from '../Details'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);

  console.log(item);

  useEffect(() => {
    try {
      async function getData() {
        let response = await getItem;
        setItem(response);
      }
      getData();
    } catch(error) {}
  }, []);

  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer

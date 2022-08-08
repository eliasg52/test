import { useEffect, useState } from "react";
import getFetch from "../Figuras";
import ItemList from "../ItemList.js/ItemList";

const ItemListContainer = () => {

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    try {
      async function getData() {
        let response = await getFetch;
        setData(response);
      }
      getData();
    } catch (error) {}
  }, []);

  return (
    <div>
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getFetch, { getFigurasByCategory } from "../Figuras";
import ItemList from "../ItemList.js/ItemList";

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const { categoryId } = useParams()


  useEffect(() => {
  
  if(!categoryId) {
    try {
      async function getData() {
        let response = await getFetch;
        setData(response);
      }
      getData();
    } catch (error) {}
  } else {
    getFigurasByCategory(categoryId).then(data => {
      setData(data)
    })
  }
   
  }, [categoryId]);

  return (
    <div>
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { DB } from "../../api/FigurasFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const { categoryId } = useParams()


  useEffect(() => {

    const colRef = collection(DB, 'products');
    if(categoryId){
      const  colFilterRef = query(colRef, 
        where('category', '==', categoryId))
      getDocs(colRef)
      .then(res=> setData(res.docs.map(item => ({id:item.id, ...item.data()})))
      )
      getDocs(colFilterRef)
      .then(res=> setData(res.docs.map(item => ({id:item.id, ...item.data()})))
      )}else{
        getDocs(colRef)
        .then(res=> setData(res.docs.map(item => ({id:item.id, ...item.data()})))
        )
      };  
    
  },[categoryId]);

  return (
    <div>
      <ItemList data={data} category={categoryId}/>
    </div>
  )
}

export default ItemListContainer

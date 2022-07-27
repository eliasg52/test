import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount"
const ItemListContainer = (props) => {

  const [initial, setInitial] = useState(1)

  const stock = 5;

  const aumentar = () => {
      setInitial(initial + 1)
      console.log(initial);
  };
  const disminuir = () => {
    setInitial(initial - 1)
    console.log(initial);
};
 
  return (
    <div>
       {props.bienvenida}
       <ItemCount stock={stock} initial={initial} aumentar={aumentar} disminuir={disminuir}/>
    </div>
  )
}

export default ItemListContainer

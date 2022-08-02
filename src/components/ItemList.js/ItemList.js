import Item from "../Item.js/Item"

const ItemList = ({ data }) => {
  return data.map((item) => {
    return <Item data={item} key={item.id}/>
  })
}

export default ItemList

import Item from "../Item.js/Item"

const ItemList = ({ data }) => {
  return data.map((item) => {
    return <Item {...item} key={item.id}/>
  })
}

export default ItemList

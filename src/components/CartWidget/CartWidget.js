import carrito from '../../imgNav/carrito.webp'

const CartWidget = () => {
  return (
    <>
       <img
            src={carrito}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="carrito"
        />
    </>
  )
}

export default CartWidget

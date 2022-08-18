import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const isInCart = (id) => {
        const figureInCart = cart.find((figureInCart) => figureInCart.id === id);
        if (figureInCart) return true;
        return false;
    };

    const addToCart = (figure) => {
        setQuantityCart(quantityCart + figure.initial);
        setTotalPrice(totalPrice + figure.price * figure.initial)
        if (isInCart(figure.id)) {
            const newCart = cart.map((figureInCart) => {
                if (figureInCart.id === figure.id) {
                    return {
                        ...figureInCart,
                        initial: figureInCart.initial + figure.initial,
                    };
                } else {
                    return figureInCart;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, figure]);
        }
    };
    const removeFromCart = (id) => {
        setCart(cart.filter((figure) => figure.id !== id));
        const itemRemoved = cart.find(figure => figure.id === id);
        setQuantityCart(quantityCart - itemRemoved.initial);
        setTotalPrice(totalPrice - itemRemoved.initial * itemRemoved.price);
    };
    const removeAll = () => {
        setCart([])
        setQuantityCart(0)
        setTotalPrice(0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAll, quantityCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ( { children } ) => {
    const [cart, setCart] = useState([]);

    const addItem = ( item, newQuantity ) => {
        const modifyCart = cart.filter( product => product.id !== item.id );
        modifyCart.push( { ...item, quantity: newQuantity } );
        setCart(modifyCart);
    }

    console.log("Cart: ", cart);

    const removeItem = (id) => {
        return setCart(cart.filter( product => product.id !== id));
    }

    const clearCart = () =>  setCart([]) ;

    const isInCart = (id) => {
        return cart.find( product => product.id === id) ? true : false;
    }

    const subTotal = () => {
        return cart.reduce( ( accumulator, item ) => accumulator + (item.quantity * item.price), 0  );
    }

    const quantityProducts = () => {
        return cart.reduce( ( accumulator, item ) => accumulator + item.quantity, 0 );
    }

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clearCart,
            isInCart,
            subTotal,
            quantityProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ( { children } ) => {
    const [cart, setCart] = useState([]);

    const addItem = ( item, newQuantity ) => {
        const modifyCart = cart.filter( product => product.id !== item.id );
        modifyCart.push( { ...item, quantity: newQuantity } );
        setCart(modifyCart);
    };

    console.log("Cart: ", cart);

    const removeItem = (id) => {
        return setCart(cart.filter( product => product.id !== id));
    };

    const clearCart = () =>  setCart([]) ;

    const isInCart = (id) => {
        return cart.find( product => product.id === id) ? true : false;
    };

    const subTotal = () => {
        return cart.reduce( ( accumulator, item ) => accumulator + (item.quantity * item.price), 0  );
    };

    const quantityProducts = () => {
        return cart.reduce( ( accumulator, item ) => accumulator + item.quantity, 0 );
    };

    const getDate = () => {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let dd = String(today.getDate()).padStart(2, '0');
        return `${today.getMonth()+1}/${dd}/${today.getFullYear()} ${hours}:${minutes}:${seconds}`;
    };

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clearCart,
            isInCart,
            subTotal,
            quantityProducts,
            cart,
            getDate
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
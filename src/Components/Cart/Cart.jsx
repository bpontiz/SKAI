import './Cart.css';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

const Cart = () => {
    const { cart, subTotal }  = useCartContext();

    const { getDate } = useCartContext();   

    const order = {
        buyer: {
            fullName: "Bruno Pontiz",
            email: "bpontiz@gmail.com",
            phone: "4565461239"
        },
        product: cart.map( item => 
            ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
        date: getDate(),
        total: subTotal()
    };

    const onHandleClick = () => {
        const dataBase = getFirestore();
        const orderCollection = collection(dataBase, 'orders');
        addDoc(orderCollection, order)
        .then( ({id}) => console.log(`Order id: ${id}`) )
    };

    if (cart.length === 0){
        return (
            <>
                <p>Your SKAI cart is empty.</p>
                <Link to="/">Go Shipping</Link>
            </>
        );
    };

    return (
        <>
            <section className="sectionStyle">
                <p className="titleStyle">Shopping Cart</p>
                <p className="priceStylee">Price</p>
            </section>
            {cart.map( product => <ItemCart key={product.id} product={product} />)}
            <p className="totalStyle">Total: <strong>${subTotal().toFixed(2)}</strong></p>
            <button className="buttonStyle" onClick={onHandleClick}>Order</button>
        </>
    )
};

export default Cart;
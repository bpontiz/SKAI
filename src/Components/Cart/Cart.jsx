import './Cart.css';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, subTotal }  = useCartContext();

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
        </>
    )
};

export default Cart;
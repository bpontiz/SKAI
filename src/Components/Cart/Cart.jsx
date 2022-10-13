import './Cart.css';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import emptyCart from '../../multimedia/emptyCart.jpg';
import Form from '../Form/Form';

const Cart = () => {
    const { cart, subTotal }  = useCartContext();

    if (cart.length === 0){
        return (
            <>
                <div className="divEmptyCartStyle">
                    <img src={emptyCart} alt="empty cart" className="emptyCartImageStyle"/>
                    <p className="emptyCartMessageStyle">Your SKAI cart is empty.</p>
                    <Link to="/services" className="linkGoShippingStyle">Go Shopping</Link>
                </div>                
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
            <Form />
        </>
    )
};

export default Cart;
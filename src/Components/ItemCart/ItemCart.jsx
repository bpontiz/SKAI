import './ItemCart.css';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ItemCart = ( {product}) => {

    const itemWord = ((product.quantity) > 1 ? 
                    <p className="subTotalStyle">Subtotal ({product.quantity} days): <strong>${(product.price*product.quantity).toFixed(2)}</strong></p> :
                    <p className="subTotalStyle">Subtotal ({product.quantity} day): <strong>${(product.price*product.quantity).toFixed(2)}</strong></p>);

    const { removeItem } = useCartContext();
    
    return (
        <section className="sectionStyle">
            <div className="divStyle">
                <img src={product.image} className="imgStyle" alt='product'/>
                <div className="infoStyle">
                    <p className="briefDescriptionStyle">{product.title}</p>
                    <p className="characteristicsStyle">In Stock</p>
                    <div className="linksStyle">
                        <button className="removeItemStyle" onClick={() => removeItem(product.id)}>Delete Product <MdDelete /></button>
                        <Link to="/services"><button className="moreServicesStyle">More Services</button></Link>
                    </div>
                    
                </div>
            </div>
            <div className="divSubTotalStyle">{itemWord}</div>
        </section>
    )
}

export default ItemCart;
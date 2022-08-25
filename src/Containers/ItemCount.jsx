import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ( { stock, initial, onAdd } ) => {
    const [count, setCount] = useState(initial);

    const decreaseQuantity = () => {
        setCount(count - 1);
    };

    const increaseQuantity = () => {
        setCount(count + 1);
    };

    return (
        <section className="sectionItemCountStyle">
            <div className="divItemCountStyle">
                <p className="itemQuoteStyle">Service 1 - D.A.C.S.</p>
                <br />
                <div>
                    <button disabled={count <= 0} type="button" className="changeNumberStyle" onClick={decreaseQuantity}>-</button>
                    <input type="number" className="inputNumberStyle" min="1" max="999" value={count} readOnly />
                    <button disabled={count >= stock} type="button" className="changeNumberStyle" onClick={increaseQuantity}>+</button>
                </div>
                <br />
                <button className="buttonAddStyle" disabled={stock <= 0 || count === 0} onClick={() => {onAdd(count)}}>Add to Cart</button>
            </div>
        </section>
    )
}

export default ItemCount;
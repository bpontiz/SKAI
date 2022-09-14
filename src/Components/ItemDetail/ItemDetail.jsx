import ItemService from '../ItemService/ItemService';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import FinishShopping from '../FinishShopping/FinishShopping';
import { useState } from 'react';

const ItemDetail = ( { data } ) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
        console.log(`You have bought ${quantity} days of membership.`);
    };

    return <>
        <ItemService key={data.id} title={data.title} image={data.image} price={data.price} feature1={data.feature1} feature2={data.feature2} feature3={data.feature3} feature4={data.feature4} feature5={data.feature5} />
        { goToCart ? <FinishShopping /> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }
    </>;
} 

export default ItemDetail;
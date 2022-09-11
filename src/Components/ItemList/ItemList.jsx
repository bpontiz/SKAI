import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ( { data = [] } ) => {
    return (
        data.map( product => <Item id={product.id} title={product.title} image={product.image} price={product.price} feature1={product.feature1} feature2={product.feature2} feature3={product.feature3} feature4={product.feature4} feature5={product.feature5} /> )
    );
}

export default ItemList;
import Item from '../ItemService/ItemService';

const ItemList = ( { data = [] } ) => {
    return (
        data.map( service => <Item key={service.id} title={service.title} image={service.image} price={service.price} /> )
    );
}

export default ItemList;
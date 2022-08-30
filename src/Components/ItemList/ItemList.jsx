import Item from '../Item/Item';

const ItemList = ( { data = [] } ) => {
    return (
        data.map( service => <Item key={service.id} title={service.title} image={service.image} price={service.price} /> )
    );
}

export default ItemList;
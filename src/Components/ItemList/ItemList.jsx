import Item from '../Item/Item';

const ItemList = ( { data = [] } ) => {
    return (
        data.map( service => <Item key={service.id} info={service} /> )
    );
}

export default ItemList;
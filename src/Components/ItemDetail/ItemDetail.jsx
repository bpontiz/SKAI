import ItemService from '../ItemService/ItemService';

const ItemDetail = ( { data } ) => {
    return (
        <ItemService id={data.id} title={data.title} image={data.image} price={data.price} feature1={data.feature1} feature2={data.feature2} feature3={data.feature3} feature4={data.feature4} feature5={data.feature5} />
    );
}

export default ItemDetail;
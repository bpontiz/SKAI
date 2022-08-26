import './Item.css';

const Item = ( { info } ) => {
    return (
        <div className="divStyle">
            <img src={info.image} alt="" className="imageStyle" />
            <p className="titleStyle">{info.title} - $ {info.price} per hour</p>
        </div>
    );
}

export default Item;
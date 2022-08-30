import './Item.css';

const Item = ( { title, image, price } ) => {
    return (
        <div className="divStyle">
            <img src={image} alt="" className="imageStyle" />
            <p className="titleStyle">{title} - $ {price} per hour</p>
        </div>
    );
}

export default Item;
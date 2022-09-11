import './Item.css';
import { FaShieldVirus } from 'react-icons/fa';
import { SiSpeedtest } from 'react-icons/si';
import { SiHomeassistant } from 'react-icons/si';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { IoMdWater } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Item = ( { id, title, image, price, feature1, feature2, feature3, feature4, feature5 } ) => {
    return (
        <div className="divStyle">
            <img src={image} alt="" className="imageStyle" to={`/services/${id}`}/>
            <div className="descriptionDiv">
                <p className="titleStyle"><Link to={`/services/${id}`} className="titleLinkStyle">{title}</Link></p>
                <ul className="ulStyle">
                    <li><MdPrecisionManufacturing /> {feature1}</li>
                    <li><SiSpeedtest /> {feature2}</li>
                    <li><SiHomeassistant /> {feature3}</li>
                    <li><FaShieldVirus /> {feature4}</li>
                    <li><IoMdWater /> {feature5}</li>
                </ul>
            </div>
            <div className="priceCartDiv">
                <p className="priceStyle">$ {price}</p>
                <p className="priceDetail">*price per hour</p>
                <Link to={`/services/${id}`} className="priceSeeDetailLink"><p className="priceSeeDetail">See details</p></Link>
                <button className="buttonAddStyle">Add to Cart</button>
            </div>
        </div>
    )
}

export default Item;
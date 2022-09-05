import './ItemDetail.css';
import { FaShieldVirus } from 'react-icons/fa';
import { SiSpeedtest } from 'react-icons/si';
import { SiHomeassistant } from 'react-icons/si';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { IoMdWater } from 'react-icons/io';


const ItemDetail = ({title, image, price}) => {
    return (
        <div className="divStyle">
            <img src={image} alt="" className="imageStyle" />
            <div className="descriptionDiv">
                <p className="titleStyle">{title}</p>
                <ul className="ulStyle">
                    <li><MdPrecisionManufacturing /> Based on extreme precision electronical instruments.</li>
                    <li><SiSpeedtest /> High speed algorithms resolution.</li>
                    <li><SiHomeassistant /> Home automated functionality.</li>
                    <li><FaShieldVirus /> Inner antimalware shielding.</li>
                    <li><IoMdWater /> IP69.</li>
                </ul>
            </div>
            <div className="priceCartDiv">
                <p className="priceStyle">$ {price}</p>
                <p className="priceDetail">*price per hour</p>
                <button className="buttonAddStyle">Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemDetail;
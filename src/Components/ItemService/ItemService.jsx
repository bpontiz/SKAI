import './ItemService.css';
import { FaShieldVirus } from 'react-icons/fa';
import { SiSpeedtest } from 'react-icons/si';
import { SiHomeassistant } from 'react-icons/si';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { IoMdWater } from 'react-icons/io';


const ItemService = ( { id, title, image, price, feature1, feature2, feature3, feature4, feature5 } ) => {

    return (
        <div className="divStyle">
            <img src={image} alt="" className="imageDetailStyle" />
            <div className="descriptionDiv">
                <p className="titleStyle">{title}</p>
                <ul className="ulStyle">
                    <li className="liDetailStyle"><MdPrecisionManufacturing /> {feature1}</li>
                    <li className="liDetailStyle"><SiSpeedtest /> {feature2}</li>
                    <li className="liDetailStyle"><SiHomeassistant /> {feature3}</li>
                    <li className="liDetailStyle"><FaShieldVirus /> {feature4}</li>
                    <li className="liDetailStyle"><IoMdWater /> {feature5}</li>
                </ul>
            </div>
            <div className="priceDetailCartDiv">
                <p className="priceDetailStyle">$ {price}</p>
                <p className="pricePerDayDetailStyle">*price per day</p>
            </div>
        </div>
    );
}

export default ItemService;
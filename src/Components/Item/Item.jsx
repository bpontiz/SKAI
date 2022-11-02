import './Item.css';
import { FaShieldVirus } from 'react-icons/fa';
import { SiSpeedtest } from 'react-icons/si';
import { SiHomeassistant } from 'react-icons/si';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { IoMdWater } from 'react-icons/io';
import { Link } from 'react-router-dom';
import AOS from 'aos';

AOS.init();
const Item = ( { id, title, image, price, feature1, feature2, feature3, feature4, feature5 } ) => {

    return (
        <div className="divItemStyle" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <img src={image} alt="service" className="imageStyle" to={`/services/${id}`}/>
            <div className="descriptionDiv">
                <p className="titleStyle"><Link to={`/services/${id}`} className="titleLinkStyle">{title}</Link></p>
                <ul className="ulStyle">
                    <li className="liItemStyle"><MdPrecisionManufacturing /> {feature1}</li>
                    <li className="liItemStyle"><SiSpeedtest /> {feature2}</li>
                    <li className="liItemStyle"><SiHomeassistant /> {feature3}</li>
                    <li className="liItemStyle"><FaShieldVirus /> {feature4}</li>
                    <li className="liItemStyle"><IoMdWater /> {feature5}</li>
                </ul>
            </div>
            <div className="priceCartDiv">
                <p className="priceStyle">$ {price}</p>
                <p className="priceDetail">*price per day</p>
                <Link to={`/services/${id}`} className="priceSeeDetailLink"><p className="priceSeeDetail">See details</p></Link>
                <button className="buttonAddStyle"><Link to={`/services/${id}`} className="addLinkAddStyle">Add to Cart</Link></button>
            </div>
        </div>
    )
}

export default Item;
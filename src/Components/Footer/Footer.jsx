import './Footer.css';
import { BsInstagram } from 'react-icons/bs';
import { TbBrandMeta } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
    return <>
        <section className="sectionFooterStyle">
            <div className="flexDivFooterStyle">
                <div className="keywordsFooterStyle">
                    <p className="subtitleFooterStyle">KEYWORDS</p>
                    <li className="liFooterStyle">Advisory</li>
                    <li className="liFooterStyle">Medical</li>
                    <li className="liFooterStyle">Artificial intelligence</li>
                    <li className="liFooterStyle">Service</li>
                </div>
                <div className="productsFooterStyle">
                    <p className="subtitleFooterStyle">PRODUCTS</p>
                    <li className="liFooterStyle">Pet</li>
                    <li className="liFooterStyle">Radiology</li>
                    <li className="liFooterStyle">Hybrid Systems</li>
                    <li className="liFooterStyle">Surgery</li>
                </div>
                <div className="divUlFooterStyle">
                    <p className="subtitleFooterStyle">GATES</p>
                    <div className="divIconFooterStyle">
                        <li className="liFooterStyle"><TbBrandMeta /> Meta</li></div>
                    <div className="divIconFooterStyle">
                        <li className="liFooterStyle"><FiLinkedin /> LinkedIn</li></div>
                    <div className="divIconFooterStyle">
                        <li className="liFooterStyle"><BsInstagram /> Instagram</li></div>
                    <div className="divIconFooterStyle">
                        <li className="liFooterStyle"><FiGithub /> Github</li>
                    </div>
                </div>
            </div>
            <p className="developedByFooterStyle">DEVELOPED BY BRUNO PONTIZ</p>
        </section>
    </>;
}

export default Footer;
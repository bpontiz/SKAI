import './Footer.css';

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
                    <li className="liFooterStyle">Google Maps</li>
                    <li className="liFooterStyle">LinkedIn</li>
                    <li className="liFooterStyle">Instagram</li>
                    <li className="liFooterStyle">Youtube</li>
                </div>
            </div>
            <p className="developedByFooterStyle">DEVELOPED BY BRUNO PONTIZ</p>
        </section>
    </>;
}

export default Footer;
import './Footer.css';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import instagram from 'react-useanimations/lib/instagram';
import facebook from 'react-useanimations/lib/facebook';

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
                        <UseAnimations
                            animation={facebook} 
                            strokeColor="white" 
                            loop={true} 
                            autoplay={true}
                        />
                        <li className="liFooterStyle">Facebook</li></div>
                    <div className="divIconFooterStyle">
                        <UseAnimations 
                            animation={linkedin} 
                            strokeColor="white" 
                            loop={true} 
                            autoplay={true}/>
                        <li className="liFooterStyle">LinkedIn</li></div>
                    <div className="divIconFooterStyle">
                        <UseAnimations 
                            animation={instagram} 
                            strokeColor="white" 
                            loop={false} 
                            autoplay={true}/>
                        <li className="liFooterStyle">Instagram</li></div>
                    <div className="divIconFooterStyle">
                        <UseAnimations 
                            animation={github} 
                            strokeColor="white" 
                            loop={true} 
                            autoplay={true}/>
                        <li className="liFooterStyle">Github</li>
                    </div>
                </div>
            </div>
            <p className="developedByFooterStyle">DEVELOPED BY BRUNO PONTIZ</p>
        </section>
    </>;
}

export default Footer;
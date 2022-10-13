import './MedicalService.css';
import CarouselServices from './CarouselServices';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import brainPetOptimized from '../../multimedia/brainPetOptimized.jpg';
import surgeryKnifeOptimized from '../../multimedia/surgeryKnifeOptimized.jpg';
import thoraxXRayOptimized from '../../multimedia/thoraxXRayOptimized.jpg';
import medicalAIOptimized from '../../multimedia/medicalAIOptimized.jpg';

AOS.init();
const MedicalService = () => {
    return (
        <section className="sectionBackgroundStyle" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="descriptionServiceStyle">
                <h2 className="titleServiceStyle">MEDICAL AI</h2>
                <div className="divKeyWordsStyle">
                    <li className="liKeyWordsStyle">
                        <img
                            className="imgKeywordsStyle"
                            src={brainPetOptimized} 
                            alt="Brain PET" 
                        />
                        <p className="topicKeywordsStyle">PET</p>
                    </li>
                    <li className="liKeyWordsStyle">
                        <img
                            className="imgKeywordsStyle"
                            src={surgeryKnifeOptimized} 
                            alt="Surgery Knife" 
                        />
                        <p className="topicKeywordsStyle">SURGERY</p>
                    </li>
                    <li className="liKeyWordsStyle">
                        <img
                            className="imgKeywordsStyle"
                            src={thoraxXRayOptimized} 
                            alt="Thorax X Ray" 
                        />
                        <p className="topicKeywordsStyle">RADIOLOGY</p>
                    </li>
                    <li className="liKeyWordsStyle">
                        <img
                            className="imgKeywordsStyle"
                            src={medicalAIOptimized} 
                            alt="Hybrid System" 
                        />
                        <p className="topicKeywordsStyle">HYBRID SYSTEMS</p>
                    </li>
                </div>
                <div className="divKeyWordsStyle">
                    <li className="liKeyWordsStyle">
                        <p className="quoteServiceStyle">
                            PET is a powerful tool created to be used in any hospital or clinic with diagnostic service.
                        </p>
                    </li>
                    <li className="liKeyWordsStyle">
                        <p className="quoteServiceStyle">
                            AI applied in this field is more than necessary. It will work simultaneously with the surgeon to perform at maximum precision.
                        </p>
                    </li>
                    <li className="liKeyWordsStyle">
                        <p className="quoteServiceStyle">
                            Radiology unit uses its radiation shielding to help people get inside x-ray camera and follow doctor's procedure.
                        </p>
                    </li>
                    <li className="liKeyWordsStyle">
                        <p className="quoteServiceStyle">
                            A domestic robot with wide field application. It takes care of family and is capable of cooking.
                        </p>
                    </li>
                </div>
                {/* <p className="quoteServiceStyle">Diagnostic And Consultancy System or D.A.C.S. provides you advisory about medical and health field queries. Inner technologies were built to apply computer science and algorithms to discover pathological cell growth in diagnostic and nuclear medicine images.</p> */}
                
            </div>
            
            <div className="imageServiceStyle">
                <CarouselServices />
            </div>
        </section>
    )
}

export default MedicalService;
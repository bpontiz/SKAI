import './CardModel.css';
import CarouselServices from './CarouselServices';

const CardModel = () => {
    return (
        <section className="sectionBackgroundStyle">
            <div className="descriptionServiceStyle">
                <h2 className="titleServiceStyle">MEDICAL AI</h2>
                <p className="quoteServiceStyle">Diagnostic And Consultancy System or D.A.C.S. provides you advisory about medical and health field queries. Inner technologies were built to apply computer science and algorithms to discover pathological cell growth in diagnostic and nuclear medicine images.</p>
                <div className="divKeyWordsStyle">
                    <li className="importantKeyWordsStyle">RADIOLOGY</li>
                    <li className="importantKeyWordsStyle">GAMMA CAMERA</li>
                </div>
                <div className="divKeyWordsStyle">
                    <li className="importantKeyWordsStyle">PET</li>
                    <li className="importantKeyWordsStyle">HYBRID SYSTEMS</li>
                </div>
            </div>
            <div className="imageServiceStyle">
                <CarouselServices />
            </div>
        </section>
    )
}

export default CardModel;
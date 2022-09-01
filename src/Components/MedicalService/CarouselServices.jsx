import React, { useState } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import surgeryImaging from '../../multimedia/surgeryImaging.jpg'
import medicalMind from '../../multimedia/medicalMind.jpg';
import medicalAI from '../../multimedia/medicalAI.jpg';
import './CarouselServices.css'

function CarouselServices() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carouselCardStyle" fade >
            <Carousel.Item className="carouselImageStyle">
                <img
                    className="d-block w-100 medicalIAStyle"
                    src={medicalAI}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item className="carouselImageStyle">
                <img
                    className="d-block w-100 medicalIAStyle"
                    src={surgeryImaging}
                    alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item className="carouselImageStyle">
                <img
                    className="d-block w-100 medicalIAStyle"
                    src={medicalMind}
                    alt="Third slide"
                />

                
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselServices;
// render(<CarouselServices />);
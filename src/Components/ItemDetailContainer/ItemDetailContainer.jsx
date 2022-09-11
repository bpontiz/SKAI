import React, { useState, useEffect } from 'react';
import '../../App.css';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const product = [
        {id: 4, image: 'https://d500.epimg.net/cincodias/imagenes/2015/10/23/lifestyle/1445601998_407543_1445602123_noticia_normal.jpg', title: "Hybrid Systems", price: 149.99, feature1: "Based on extreme precision electronical instruments.", feature2: "High speed algorithms resolution." , feature3: "Home automated functionality.", feature4: "Inner antimalware shielding.", feature5: "IP69."},
        {id: 3, image: "https://jnswire.s3.amazonaws.com/jns-media/db/9e/11826566/mit6.jpg", title: "PET", price: 99.99, feature1: "Tree decision algorithms.", feature2: "Advanced interpolation in image detection." , feature3: "SPECT Mode.", feature4: "Over 675 biological layer navegability.", feature5: "Noise rate deprecation."},
        {id: 2, image: 'https://www.zdnet.com/a/img/resize/2c69dea4abe42b3b08e7df7ec79207c3985904f0/2021/07/22/b9692a93-addc-4f82-b029-cd9d9a68831b/robotic-surgery-0.jpg?auto=webp&fit=crop&height=675&width=1200', title: "Surgery", price: 199.99, feature1: "20 GHz GMD processor.", feature2: "Arms trazability." , feature3: "Zoom screen on medical procedure.", feature4: "Over 675 biological layer navegability.", feature5: "Prediction models."},
        {id: 1, image: 'https://buyourobot.b-cdn.net/wp-content/uploads/edd/2016/11/1714_robot-pilot_thumb.jpg', title: "Radiology", price: 89.99, feature1: "Ionizing radiation shielding.", feature2: "Imaging 2D - 3D correction." , feature3: "Mammography mode.", feature4: "Over 500 biological layer navegability.", feature5: "Noise rate deprecation."}
    ];

    const [data, setData] = useState([]);

    const { detailId } = useParams();

    useEffect( () => {
        const getData = new Promise(resolve => {
            setTimeout( () => {
                resolve(product);
            }, .100);
        });

        getData.then(res => setData(res.find(product => product.id === parseInt(detailId))))

    }, []);

    const onAdd = (quantity) => {
        console.log(`You have bought ${quantity} days of membership.`);
    }

    return <>
        <ItemDetail data={data} /> 
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
}
export default ItemDetailContainer;
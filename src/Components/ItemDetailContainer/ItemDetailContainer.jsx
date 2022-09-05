import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect } from 'react';





const ItemDetailContainer = () => {
    const product = { id: 3, image: 'https://d500.epimg.net/cincodias/imagenes/2015/10/23/lifestyle/1445601998_407543_1445602123_noticia_normal.jpg', title: "Hybrid Systems", price: 149.99 };

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 2000);
        });

        getData.then(res => setData(res));
    })
    
    return (
        <ItemDetail data={data} title={product.title} image={product.image} price={product.price} />
    )
} 

export default ItemDetailContainer;
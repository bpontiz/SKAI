import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../../src/products.json';

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { detailId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getData.then(res => setData(res));

    }, [detailId]);
    
    return <>
        <ItemList data={data} /> 
    </>
} 

export default ItemListContainer;
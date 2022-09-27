import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { detailId } = useParams();

    useEffect(() => {
        const queryDataBase = getFirestore();
        const queryCollection = collection(queryDataBase, 'products');
        getDocs(queryCollection)
            .then( result => setData(result.docs.map( product => ({id: product.id, ...product.data()}))));

    }, [detailId]);
    
    return <>
        <ItemList data={data} /> 
    </>
} 

export default ItemListContainer;
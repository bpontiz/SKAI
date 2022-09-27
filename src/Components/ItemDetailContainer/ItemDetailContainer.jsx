import React, { useState, useEffect } from 'react';
import '../../App.css';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const { detailId } = useParams();

    useEffect( () => {
        const queryDataBase = getFirestore();
        const queryDocument = doc(queryDataBase, 'products', detailId);
        getDoc(queryDocument)
            .then( result => setData( {id: result.id, ...result.data()} ));

    }, [detailId]);

    return <>
        <ItemDetail data={data} /> 
    </>
}
export default ItemDetailContainer;
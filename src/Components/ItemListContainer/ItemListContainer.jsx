import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { detailId } = useParams();
    const { categoryId } = useParams();

    useEffect(() => {
        const queryDataBase = getFirestore();
        const queryCollection = collection(queryDataBase, 'products');
        if (categoryId) {
            const queryFilter = query(queryCollection, where("category", "==", categoryId))
            getDocs(queryFilter)
                .then( result => setData(result.docs.map( product => ({id: product.id, ...product.data()}))));
        } else {
            getDocs(queryCollection)
                .then( result => setData(result.docs.map( product => ({id: product.id, ...product.data()}))));
        }

    }, [detailId, categoryId]);
    
    return <>
        <p className="pCategoryStyle">Select service category</p>
        <section className="sectionCategoryStyle">
            <Link to="/category/clinic" className="linkCategoryStyle"><div className="divCategoryStyle">Clinic</div></Link>
            <Link to="/category/domestic" className="linkCategoryStyle"><div className="divCategoryStyle">Domestic</div></Link>
        </section>
        <ItemList data={data} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" /> 
    </>
} 

export default ItemListContainer;
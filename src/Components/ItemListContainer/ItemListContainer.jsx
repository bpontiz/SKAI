import React, { useState, useEffect } from 'react';
import '../../App.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
// import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

    const services = [
        { id: 1, image: 'https://momentaj.com/wp-content/uploads/2018/07/robotic-surgery_0.jpg', title: "Surgery" , price: 100},
        { id: 2, image: 'https://www.konsultasyon.net/wp-content/uploads/2020/03/pet-taramasi.jpg', title: "PET", price: 75 },
        { id: 3, image: 'https://d500.epimg.net/cincodias/imagenes/2015/10/23/lifestyle/1445601998_407543_1445602123_noticia_normal.jpg', title: "Hybrid Systems", price: 150 }
    ]

    const [data, setData] = useState([]);

    useEffect( () => {
        const getData = new Promise(resolve => {
            setTimeout( () => {
                resolve(services);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, []);

    const onAdd = (quantity) => {
        console.log(`You have bought ${quantity} days of membership.`);
    }

    let someGreetings = [
        "We are glad you are here",
        "Welcome to our website",
        "What can I do for you today?",
        "Hope I can be useful",
        "Have a great day !",
        "We look forward to serve you"
    ];
    let randomGreeting = someGreetings[Math.floor(someGreetings.length * Math.random())];
    return <>
        <div className="divGreetingStyle"><p className="itemListContainerStyle">{props.greeting}{randomGreeting}</p></div>
        {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
        <ItemList data={data} />
    </>
}
export default ItemListContainer;
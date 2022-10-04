import { useState } from 'react';
import './Form.css';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext/CartContext';

const Form = () => {
    const { cart, subTotal }  = useCartContext();
    const { getDate } = useCartContext();
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const order = {
        buyer: {
            name: name,
            lastname: lastname,
            email: email,
            phone: phone
        },
        product: cart.map( item => 
            ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
        date: getDate(),
        total: subTotal().toFixed(2)
    };

    const handleBuyer = (e) => {
        e.preventDefault();
        setName(name);
        setLastName(lastname);
        setEmail(email);
        setPhone(phone);
        console.log(order);
        return handlePost();
    };

    const handlePost = () => {
        const dataBase = getFirestore();
        const orderCollection = collection(dataBase, 'orders');
        addDoc(orderCollection, order)
        .then( ({id}) => console.log(`Order id: ${id}`) )
    };
    
    const handleReset = (e) => {
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
    };

    return <>
        <section className="orderFormSectionStyle">
            <p className="titleFormStyle">Personal information</p>
        </section>
        <form className="orderFormStyle">
            <label htmlFor="" className="orderFormLabelStyle">Enter your name:
                <input 
                    className="orderFormInputStyle"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Name"
                />
            </label>
            <label htmlFor="" className="orderFormLabelStyle">Enter your lastname:
                <input 
                    className="orderFormInputStyle"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Lastname"
                />
            </label>
            <label htmlFor="" className="orderFormLabelStyle">Enter your email:
                <input 
                    className="orderFormInputStyle"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                />
            </label>
            <label htmlFor="" className="orderFormLabelStyle">Enter your phone:
                <input 
                    className="orderFormInputStyle"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Phone"
                />
            </label>
            <div className="divFormStyle">
                <button 
                    className="buttonResetFormStyle" 
                    type="reset"
                    onClick={handleReset}>
                    Reset
                </button>
                <button className="buttonFormStyle" onClick={handleBuyer}>Order</button>
            </div>
        </form>
    </>
};

export default Form;
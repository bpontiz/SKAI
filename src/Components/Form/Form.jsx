import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './Form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const { cart, subTotal, getDate }  = useCartContext();
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const order = {
        buyer: {
            email: email,
            lastname: lastname,
            name: name,
            phone: phone
        },
        date: getDate(),
        product: cart.map( item => 
            ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity, category: item.category})),
        total: subTotal().toFixed(2)
    };

    const handleBuyer = (e) => {
        e.preventDefault();
        const toastAttributes = {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        };
        switch (true){
            case name === "":
                toast.error('Please enter name.', toastAttributes);
                break;
            case lastname === "":
                toast.error('Please enter lastname.', toastAttributes);
                break;
            case email === "":
                toast.error('Please enter email.', toastAttributes);
                break;
            case phone === "":
                toast.error('Please enter phone.', toastAttributes);
                break;
            default: showAlert();
        }
    };

    function showAlert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Confirm order',
            text: 'Please click on one button.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, order',
            cancelButtonText: 'No, cancel',
            reverseButtons: true
        })
        .then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Confirmed',
                    'Your product will be available soon.',
                    'success'
                );
                setName(name);
                setLastName(lastname);
                setEmail(email);
                setPhone(phone);
                console.log(order);
                return handlePost();
            }else if(
                result.dismiss === Swal.DismissReason.cancel
            ){
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'You did not confirm your order.',
                    'error'
                )
            }
        })
    };

    const handlePost = () => {
        const dataBase = getFirestore();
        const orderCollection = collection(dataBase, 'orders');
        addDoc(orderCollection, order)
        .then( ({id}) => {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: `Please save your order id: ${id}`,
            });
            console.log(`ORDER id is: ${id}`);
        }); 
    };
    
    const handleReset = () => {
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
            <ToastContainer />
        </form>
    </>
}; 

export default Form;
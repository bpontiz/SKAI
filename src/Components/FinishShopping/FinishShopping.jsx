import './FinishShopping.css';
import { Link } from 'react-router-dom';

const FinishShopping = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let date = `${today.getMonth()+1}/${dd}/${today.getFullYear()}`;

    return (
        <section className="sectionFinishStyle">
            <p className="pDateStyle">Today is {date}</p>
            <p className="pDateStyle">Service days selected: XXXX</p>
            <Link to='/cart' className="linkFinishStyle">Finish shopping</Link>
        </section>  
    )
}

export default FinishShopping;
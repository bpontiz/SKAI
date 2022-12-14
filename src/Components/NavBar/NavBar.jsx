import skai_3 from '../../multimedia/skai_3.png';
import '../../App.css';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext/CartContext';

const NavBar = () => {
    const { quantityProducts } = useCartContext();
    return (
        <nav className="navBarStyle">
            <section className="sectionNavbarStyle">
                <div className="rowStyle">
                    <div className="asideColumnsStyle">
                        <li>
                            <Link className="navLinkStyle" to='/'>About</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/services">Services</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/"><img src={skai_3}  alt="Skai industries logo" className="imgNavbarSkai"/></Link>
                        </li>
                    </div>
                    <div className="asideColumnsStyle">
                        <li>
                            <Link className="navLinkStyle" to="/cart">Cart<CartWidget />{quantityProducts() || "0"}</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/contact">Contact</Link>
                        </li>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar;
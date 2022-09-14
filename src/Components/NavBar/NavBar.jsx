import skai_3 from '../../multimedia/skai_3.png';
import '../../App.css';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navStyle">
            <section expand={'sm'}>
                <div className="rowStyle">
                    <div className="asideColumnsStyle">
                        <li>
                            <Link className="navLinkStyle" to='/'>About</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/">Services</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/"><img src={skai_3} style={{maxWidth: "75px", padding: "0.25rem"}} alt="Skai industries logo"/></Link>
                        </li>
                    </div>
                    <div className="asideColumnsStyle">
                        <li>
                            <Link className="navLinkStyle" to="/cart">Cart<CartWidget />0</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/">Sign In</Link>
                        </li>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar;
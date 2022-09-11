import skai_3 from '../../multimedia/skai_3.png';
import '../../App.css';
import './NavBar.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navStyle">
            <section fluid expand={'sm'}>
                <div className="rowStyle">
                    <div className="asideColumnsStyle">
                        <li>
                            <NavLink className="navLinkStyle" to='/'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinkStyle" to="/">Services</NavLink>
                        </li>
                    </div>
                    <div>
                        <li>
                            <NavLink to="/"><img src={skai_3} style={{maxWidth: "75px", padding: "0.25rem"}} alt="Skai industries logo"/></NavLink>
                        </li>
                    </div>
                    <div className="asideColumnsStyle">
                        <li>
                            <NavLink className="navLinkStyle" to="/item/:id">Cart<CartWidget />0</NavLink>
                        </li>
                        <li>
                            <NavLink className="navLinkStyle" to="/">Sign In</NavLink>
                        </li>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar;
import skai_3 from '../../multimedia/skai_3.png';
import '../../App.css';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navStyle">
            <section fluid expand={'sm'}>
                <div className="rowStyle">
                    <div className="asideColumnsStyle">
                        <li>
                            <a className="navLinkStyle" href="../../App.jsx">About</a>
                        </li>
                        <li>
                            <a className="navLinkStyle" href="../../App.jsx">Services</a>
                        </li>
                    </div>
                    <div>
                        <li>
                            <a href="../../App.jsx"><img src={skai_3} style={{maxWidth: "75px", padding: "0.25rem"}} alt="Skai industries logo"/></a>
                        </li>
                    </div>
                    <div className="asideColumnsStyle">
                        <li>
                            <a className="navLinkStyle" href="../../App.jsx">Cart<CartWidget />0</a>
                        </li>
                        <li>
                            <a className="navLinkStyle" href="../../App.jsx">Sign In</a>
                        </li>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar;
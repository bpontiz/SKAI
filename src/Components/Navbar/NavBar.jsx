import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import skai_3 from '../../multimedia/skai_3.png';
import '../../App.css';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Nav className="navStyle">
            <Container fluid expand={'sm'}>
                <Row className="rowStyle">
                    <Col className="asideColumnsStyle">
                        <Nav.Item>
                            <Nav.Link className="navLinkStyle" href="#">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLinkStyle" href="#">Services</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item>
                            <Nav.Link href="../../App.jsx"><img src={skai_3} style={{maxWidth: "75px", padding: "0.25rem"}} alt="Skai industries logo"/></Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col className="asideColumnsStyle">
                        <Nav.Item>
                            <Nav.Link className="navLinkStyle" href="#">Cart<CartWidget />0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLinkStyle" href="#">Sign In</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>
            </Container>
        </Nav>
    )
}

export default NavBar;
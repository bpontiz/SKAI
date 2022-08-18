import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import skai_3 from '../../multimedia/skai_3.png';
import '../../App.css';
import CartWidget from './CartWidget.jsx';

const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
};

const asideColumnsStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    columnGap: "2rem",
    alignItems: "center"
};

const navLinkStyle = {
    textDecoration: "none",
    color: "navy",
    fontSize: "small",
    fontFamily: "'Gruppo'",
    fontWeight: "bold",
    letterSpacing: "2px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& hover": {
        color: "red"
    }
};

const NavBar = () => {
    return (
        <Nav>
            <Container fluid>
                <Row style={rowStyle}>
                    <Col style={asideColumnsStyle}>
                        <Nav.Item>
                            <Nav.Link style={navLinkStyle} href="#">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={navLinkStyle} href="#">Services</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item>
                            <Nav.Link href="../../App.jsx"><img src={skai_3} style={{maxWidth: "75px", padding: "0.25rem"}} alt="Skai industries logo"/></Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col style={asideColumnsStyle}>
                        <Nav.Item>
                            <Nav.Link style={navLinkStyle} href="#">Cart<CartWidget /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={navLinkStyle} href="#">Sign In</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>
            </Container>
        </Nav>
    )
}

export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import skai from 'C:/Users/bpont/Documents/Coderhouse/M3-React Js/Ecommerce-BrunoPontiz/skai-app/src/multimedia/skai.png';
import 'C:/Users/bpont/Documents/Coderhouse/M3-React Js/Ecommerce-BrunoPontiz/skai-app/src/App.css';

const rowStyle = {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
};

const asideColumnsStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    columnGap: "2rem"
}

const navLinkStyle = {
    textDecoration: "none",
    color: "navy",
    fontFamily: "'Gruppo'",
    fontWeight: "bold",
    letterSpacing: "2px",
}

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
                            <Nav.Link style={navLinkStyle} href="#">Service</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col className="CenterColumn">
                        <Nav.Item>
                            <Nav.Link href="#"><img src={skai} width="100px" alt="Skai industries logo"/></Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col style={asideColumns}>
                        <Nav.Item>
                            <Nav.Link style={navLinkStyle} href="#">Cart</Nav.Link>
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
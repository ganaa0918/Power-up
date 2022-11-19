import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Images from './images/logo1.png'
function Navbars() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/Home">
        <img
              src= {Images}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/register">Бүртгүүлэх</Nav.Link>
            <Nav.Link eventKey={2} href="/Login">
              Нэвтрэх
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Navbars;
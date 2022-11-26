import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../images/logo1.png'


function Navbars(props) {
  const color = props.color;
  return (
    
    <Navbar collapseOnSelect expand="xl" bg="transparent" variant={color} className='fixed-top' >
      <Container >
        <Navbar.Brand href="/">
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
            <Nav.Link  href="/">PowerUP</Nav.Link>
            <Nav.Link   href="/Blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  href="/register">Бүртгүүлэх</Nav.Link>
            <Nav.Link  href="/Login" variant="warning" type='button' className="btn btn-warning btn-lg ms-3 text-dark" style={{borderRadius: "20px"}}>
              Нэвтрэх
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Navbars;
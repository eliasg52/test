import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import spiderman from '../../imgNav/spiderman.png'
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand>
        <Link to="/">
        <img
              src={spiderman}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="spiderman"
            />
        </Link>
            Spiderverse Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={'/category/heros'} >Heros</Nav.Link>
            <Nav.Link as={Link} to={'/category/villains'}>Villains</Nav.Link>
            <NavDropdown title="Figures" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Legends</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Mafex
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Hot Toys
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-3" variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import spiderman from '../../imgNav/spiderman.png'
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function NavBar() {

  const { cart } = useContext(CartContext);

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
            <NavDropdown title="Figures" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={'/category/heros'}>
                Heros
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/villains'}>
                Villains
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/antiheros'}>
                Anti-Heros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {cart == "" ? (true) : (<CartWidget/>)}
      </Container>
    </Navbar>
  );
}

export default NavBar;
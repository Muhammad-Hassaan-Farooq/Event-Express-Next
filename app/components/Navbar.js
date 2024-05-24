import { Navbar, Nav, NavItem } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Navbar.Brand href="/">Event Express</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link href="/signup">Login</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

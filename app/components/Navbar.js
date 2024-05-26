import { Navbar, Nav, NavItem } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="p-3">
      <Navbar.Brand href="/">Event Express</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto ">
          <NavItem>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
